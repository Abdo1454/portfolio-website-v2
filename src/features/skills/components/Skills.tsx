
import {
  Code2,
  Globe,
  Layers,
  Palette,
  Wrench,
} from "lucide-react";

const skillGroups = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["JavaScript", "TypeScript", "HTML5", "CSS3"],
  },
  {
    title: "Frontend Development",
    icon: Globe,
    skills: ["React", "Next.js", "React Router", "Responsive Design"],
  },
  {
    title: "Styling & UI",
    icon: Palette,
    skills: [
      "Tailwind CSS",
      "Bootstrap",
      "CSS Flexbox",
      "CSS Grid",
    ],
  },
  {
    title: "State & Forms",
    icon: Layers,
    skills: ["Redux Toolkit", "React Hook Form", "Zod"],
  },
  {
    title: "Tools & Workflow",
    icon: Wrench,
    skills: ["Git", "GitHub", "Vite", "REST APIs", "Postman"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-[#F8FAFC] px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-[#059669] uppercase">
            What I work with
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-[#111827] sm:text-4xl lg:text-5xl">
            My <span className="text-[#059669]">Skills</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#64748B]">
            Technologies and tools I use to build modern,
            responsive, and maintainable web applications.
          </p>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#059669]" />
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <article
                key={group.title}
                className="rounded-2xl border border-[#E2E8F0] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-900/5"
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-emerald-50 text-[#059669]">
                    <Icon size={22} />
                  </div>

                  <h3 className="text-lg font-semibold text-[#111827]">
                    {group.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:border-emerald-200 hover:bg-emerald-50 hover:text-[#047857]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
