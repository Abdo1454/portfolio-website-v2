import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="bg-[#F8FAFC] px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-14">
          <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-[#059669] uppercase">
            My Recent Work
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-[#111827] sm:text-4xl lg:text-5xl">
            Featured <span className="text-[#059669]">Projects</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-[#64748B]">
            Explore some of my projects, built to practice my skills
            and create useful, responsive web experiences.
          </p>

          <div className="mt-5 h-1 w-16 rounded-full bg-[#059669]" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} Project={project} />
          ))}
        </div>

        {/* GitHub Link */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/Abdo1454"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-[#E2E8F0] bg-white px-6 py-3 font-semibold text-[#111827] transition-colors hover:border-[#059669] hover:text-[#059669]"
          >
            Explore More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
