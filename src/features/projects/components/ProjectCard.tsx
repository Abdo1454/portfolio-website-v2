import { Code2, ExternalLink } from "lucide-react";
import type {Project} from "../types/project.types";
interface ProjectCardProps {
  Project: Project;
}
export default function ProjectCard({Project}:ProjectCardProps) {
  return (
    <div>
        <article>
            <img src={Project.image} alt={`${Project.title} preview`}
             loading="lazy"></img>


         {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#111827]">
          {Project.title}
        </h3>
        <p className="mt-3 min-h-20 text-sm leading-7 text-[#64748B]">
          {Project.description}
        </p>
        </div>
         {/* Technologies */}
        <div className="mt-4 flex flex-wrap gap-2">
          {Project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-md bg-emerald-50 px-3 py-1.5 text-xs font-medium text-[#047857]"
            >
              {technology}
            </span>
          ))}
        </div>
         {/* Project Links */}
        <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-[#E2E8F0] pt-5">
          <a
            href={Project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${Project.title} source code on GitHub`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#111827] transition-colors hover:text-[#059669]"
          >
            <Code2 size={18} />
            Source Code
          </a>
           {Project.liveUrl && (
            <a
              href={Project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${Project.title} live demo`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#059669] transition-colors hover:text-[#047857]"
            >
              Live Demo
              <ExternalLink size={16} />
            </a>
                 )}
        </div>

     
        </article>
    </div>
  )
}
