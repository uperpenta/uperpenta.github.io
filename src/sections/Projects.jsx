import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <div className="py-6 max-w-7xl mx-auto pt-20">
      <h3 className="text-darkred font-bold font-nunito text-3xl pb-10">
        Projects
      </h3>
      <div className="flex flex-row justify-between">
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
      </div>
    </div>
  );
}
