import Image from "next/image";
import type { Project } from "@/lib/data";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <a href={project.href}>
      <div className="projects-div">
        <span className="projects-div-heading">{project.title}</span>
        <Image
          className={`projects-div-img ${project.imageClassName ?? ""}`}
          src={project.image}
          sizes="250px"
          alt=" "
        />
        <span className="projects-div-description">{project.description}</span>
      </div>
    </a>
  );
}
