import React from "react";
import SkillSection from "/src/components/SkillSection";
import  fullstackIcon from "/src/assets/photos/fullstack-icon.svg";
import cloudIcon from "/src/assets/photos/cloud-icon.svg";
import paintIcon from "/src/assets/photos/paint.svg";

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

  const designSkills = [
    "Figma",
    "Photoshop",
  ];

  return (
    <div className=" max-w-7xl mx-auto flex flex-col justify-between bg-aboutbg rounded-2xl">
      <div
        className=" flex-col flex mx-auto my-[60px] pl-2 mr-18 text-justify"
        style={{
          marginLeft:
            "calc(var(--skill-index-margin) + var(--skill-index-width))",
        }}
      >
        <h3 className="text-aboutgrey font-inter font-bold">About</h3>
        <p className="text-white font-inter font-bold text-3xl ">
          My work is about harmony — between creativity and logic, structure and
          spontaneity. I believe great engineering is like music: it thrives on{" "}
          <span className="text-rhythm">rhythm</span>,{" "}
          <span className="text-adaptability">adaptability</span>, and{" "}
          <span className="text-flow">flow</span>.
        </p>
      </div>

      <div className="flex flex-col bg-aboutbg2 rounded-2xl m-2 sm:m-4 mt-auto text-justify">
        <SkillSection
          index={1}
          title="Full-Stack Development"
          description="Translating ideas into functional, maintainable products, combining logic and creativity to deliver seamless user experiences from backend to frontend."
          skills={fullstackSkills}
          iconSrc={fullstackIcon}
        />
        <div className="h-[1px] ml-4 mr-4 divide-y bg-aboutdivide mx-auto"></div>
        <SkillSection
          index={2}
          title="DevOps & Cloud"
          description="Bridging development and operations to deliver automation, reliability, and continuous improvement through resilient infrastructure and tooling."
          skills={devopsSkills}
          iconSrc={cloudIcon}
        />
        <div className="h-[1px] ml-4 mr-4 divide-y bg-aboutdivide mx-auto"></div>
        <SkillSection
          index={3}
          title="UI/UX Design"
          description="Designing user interfaces that are both functional and visually appealing, ensuring a seamless and enjoyable user experience."
          skills={designSkills}
          iconSrc={paintIcon}
        />
      </div>
    </div>
  );
}
