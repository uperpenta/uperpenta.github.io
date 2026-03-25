"use client";

import { useRef, useMemo, useCallback, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 120;
const CONNECTION_DISTANCE = 2.2;
const RETURN_SPEED = 0.035;
const SCATTER_FORCE = 0.6;
const HOVER_RADIUS = 4.5;

// Colors from the design system
const GOLD = new THREE.Color("#ECD06F");
const GOLD_DIM = new THREE.Color("#4C4637");

function Particles() {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const mouseWorld = useRef(new THREE.Vector3(9999, 9999, 0));
  const { camera } = useThree();
  const scattered = useRef(new Float32Array(PARTICLE_COUNT * 3));

  // Generate icosahedron-based target positions
  const { basePositions, velocities } = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(2.5, 2);
    const verts = geo.attributes.position.array;

    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const vels = new Float32Array(PARTICLE_COUNT * 3);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const srcIdx = (i % (verts.length / 3)) * 3;
      positions[i * 3] = verts[srcIdx] + (Math.random() - 0.5) * 0.3;
      positions[i * 3 + 1] = verts[srcIdx + 1] + (Math.random() - 0.5) * 0.3;
      positions[i * 3 + 2] = verts[srcIdx + 2] + (Math.random() - 0.5) * 0.3;

      vels[i * 3] = (Math.random() - 0.5) * 0.003;
      vels[i * 3 + 1] = (Math.random() - 0.5) * 0.003;
      vels[i * 3 + 2] = (Math.random() - 0.5) * 0.003;
    }

    geo.dispose();
    return { basePositions: positions, velocities: vels };
  }, []);

  const currentPositions = useRef(new Float32Array(basePositions));

  const maxLines = PARTICLE_COUNT * PARTICLE_COUNT;
  const linePositions = useRef(new Float32Array(maxLines * 6));
  const lineColors = useRef(new Float32Array(maxLines * 6));

  const lineGeo = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute(
      "position",
      new THREE.BufferAttribute(linePositions.current, 3),
    );
    geo.setAttribute(
      "color",
      new THREE.BufferAttribute(lineColors.current, 3),
    );
    geo.setDrawRange(0, 0);
    return geo;
  }, []);

  const handlePointerMove = useCallback(
    (e: { clientX: number; clientY: number }) => {
      const ndcX = (e.clientX / window.innerWidth) * 2 - 1;
      const ndcY = -(e.clientY / window.innerHeight) * 2 + 1;

      const vec = new THREE.Vector3(ndcX, ndcY, 0.5);
      vec.unproject(camera);
      const dir = vec.sub(camera.position).normalize();
      const distance = -camera.position.z / dir.z;
      mouseWorld.current = camera.position
        .clone()
        .add(dir.multiplyScalar(distance));
    },
    [camera],
  );

  const handlePointerLeave = useCallback(() => {
    mouseWorld.current.set(9999, 9999, 0);
  }, []);

  useFrame((state) => {
    if (!pointsRef.current || !linesRef.current) return;

    const positions = currentPositions.current;
    const time = state.clock.elapsedTime;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;

      // Breathing offset on base position
      const bx =
        basePositions[i3] +
        Math.sin(time * 0.4 + i * 0.1) * 0.15 +
        velocities[i3] * time * 30;
      const by =
        basePositions[i3 + 1] +
        Math.cos(time * 0.3 + i * 0.15) * 0.15 +
        velocities[i3 + 1] * time * 30;
      const bz =
        basePositions[i3 + 2] +
        Math.sin(time * 0.5 + i * 0.05) * 0.1 +
        velocities[i3 + 2] * time * 30;

      // Distance from mouse in world space
      const dx = positions[i3] - mouseWorld.current.x;
      const dy = positions[i3 + 1] - mouseWorld.current.y;
      const distToMouse = Math.sqrt(dx * dx + dy * dy);

      if (distToMouse < HOVER_RADIUS) {
        // Strong scatter — closer = harder push, with cubic falloff for punch
        const t = 1 - distToMouse / HOVER_RADIUS;
        const force = t * t * SCATTER_FORCE;
        const angle = Math.atan2(dy, dx);
        scattered.current[i3] += Math.cos(angle) * force;
        scattered.current[i3 + 1] += Math.sin(angle) * force;
        // Random Z scatter for depth explosion
        scattered.current[i3 + 2] += (Math.random() - 0.5) * force * 1.2;
      }

      // Slower decay = particles stay scattered longer before returning
      scattered.current[i3] *= 0.92;
      scattered.current[i3 + 1] *= 0.92;
      scattered.current[i3 + 2] *= 0.92;

      // Lerp toward base + scatter
      const tx = bx + scattered.current[i3];
      const ty = by + scattered.current[i3 + 1];
      const tz = bz + scattered.current[i3 + 2];

      positions[i3] += (tx - positions[i3]) * RETURN_SPEED;
      positions[i3 + 1] += (ty - positions[i3 + 1]) * RETURN_SPEED;
      positions[i3 + 2] += (tz - positions[i3 + 2]) * RETURN_SPEED;
    }

    const pointGeo = pointsRef.current.geometry;
    pointGeo.attributes.position.array.set(positions);
    (pointGeo.attributes.position as THREE.BufferAttribute).needsUpdate = true;

    // Build connections
    let lineIdx = 0;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      for (let j = i + 1; j < PARTICLE_COUNT; j++) {
        const i3 = i * 3;
        const j3 = j * 3;
        const dx = positions[i3] - positions[j3];
        const dy = positions[i3 + 1] - positions[j3 + 1];
        const dz = positions[i3 + 2] - positions[j3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < CONNECTION_DISTANCE) {
          const alpha = 1 - dist / CONNECTION_DISTANCE;
          const li = lineIdx * 6;

          linePositions.current[li] = positions[i3];
          linePositions.current[li + 1] = positions[i3 + 1];
          linePositions.current[li + 2] = positions[i3 + 2];
          linePositions.current[li + 3] = positions[j3];
          linePositions.current[li + 4] = positions[j3 + 1];
          linePositions.current[li + 5] = positions[j3 + 2];

          const r = GOLD_DIM.r + (GOLD.r - GOLD_DIM.r) * alpha * 0.4;
          const g = GOLD_DIM.g + (GOLD.g - GOLD_DIM.g) * alpha * 0.4;
          const b = GOLD_DIM.b + (GOLD.b - GOLD_DIM.b) * alpha * 0.4;

          lineColors.current[li] = r;
          lineColors.current[li + 1] = g;
          lineColors.current[li + 2] = b;
          lineColors.current[li + 3] = r;
          lineColors.current[li + 4] = g;
          lineColors.current[li + 5] = b;

          lineIdx++;
        }
      }
    }

    lineGeo.setDrawRange(0, lineIdx * 2);
    (lineGeo.attributes.position as THREE.BufferAttribute).needsUpdate = true;
    (lineGeo.attributes.color as THREE.BufferAttribute).needsUpdate = true;

    pointsRef.current.rotation.y = time * 0.08;
    pointsRef.current.rotation.x = Math.sin(time * 0.05) * 0.1;
    linesRef.current.rotation.y = time * 0.08;
    linesRef.current.rotation.x = Math.sin(time * 0.05) * 0.1;
  });

  return (
    <group
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <mesh visible={false}>
        <planeGeometry args={[50, 50]} />
        <meshBasicMaterial />
      </mesh>

      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[currentPositions.current, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.06}
          color="#ECD06F"
          transparent
          opacity={0.8}
          sizeAttenuation
          depthWrite={false}
        />
      </points>

      <lineSegments ref={linesRef} geometry={lineGeo}>
        <lineBasicMaterial
          vertexColors
          transparent
          opacity={0.3}
          depthWrite={false}
        />
      </lineSegments>
    </group>
  );
}

export default function ParticleConstellation() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="w-full aspect-square" />;

  return (
    <div className="w-full aspect-square overflow-visible">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        style={{ background: "transparent", overflow: "visible" }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]}
      >
        <Particles />
      </Canvas>
    </div>
  );
}
