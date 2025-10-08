import React from "react";
import SkillSection from "/src/components/SkillSection";

export default function About() {
  const fullstackSkills = [
    "Node.js",
    "Express.js",
    "React",
    "Next.js",
    "Tailwind CSS",
    "TypeScript",
    "Postgres",
    "OAuth",
    "Git",
  ];

  const devopsSkills = [
    "Terraform",
    "Ansible",
    "Puppet",
    "Scripting",
    "Bash",
    "Python",
    "AWS",
    "GCP",
    "Digital Ocean",
    "Grafana",
    "Docker",
    "Linux",
    "K8s",
    "CI/CD",
    "Automation",
  ];

  const architectureSkills = [
    "Scalability & Performance",
    "API Design",
    "Clean Architecture",
    "System Design",
  ];

  return (
    <div className="py-6 max-w-6xl mx-auto flex flex-col justify-between pt-30 bg-gray-800 rounded-lg">
      <div className="flex-col flex mb-6">
        <h3 className="text-gray-500 font-bold">About</h3>
        <p className="text-white">
          My work is about harmony — between creativity and logic, structure and
          spontaneity. I believe great engineering is like music: it thrives on
          rhythm, adaptability, and flow.
        </p>
      </div>

      <div className="flex flex-col bg-gray-600 rounded-lg divide-y divide-gray-700">
        <SkillSection
          index={1}
          title="Full-Stack Development"
          description="Translating ideas into functional, maintainable products — combining logic and creativity to deliver seamless user experiences from backend to frontend."
          skills={fullstackSkills}
          iconSrc="src/assets/photos/fullstack-icon.svg"
        />
        <SkillSection
          index={2}
          title="DevOps & Cloud"
          description="Bridging development and operations to deliver automation, reliability, and continuous improvement through resilient infrastructure and tooling."
          skills={devopsSkills}
          iconSrc="src/assets/photos/cloud-icon.svg"
        />
        <SkillSection
          index={3}
          title="System Architecture"
          description="Designing and structuring systems that connect technology with purpose — ensuring performance, scalability, and clean design across every project."
          skills={architectureSkills}
          iconSrc="src/assets/photos/api-icon.svg"
        />
      </div>
    </div>
  );
}
