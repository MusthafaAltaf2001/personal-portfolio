import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <div id="projects" className="flex flex-col items-center pt-16">
      <span className="text-4xl font-bold text-[#EAB308] px-0 sm:px-10 py-4">
        PROJECTS
      </span>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
