import { BriefcaseBusiness, GraduationCap } from "lucide-react";

const experiences = [
  {
    role: "Frontend Developer Trainee",
    company: "Huma Volve",
    period: "2026",
    type: "Training",
    description:
      "Working on a React and TypeScript project, building authentication interfaces, implementing form validation, and integrating REST APIs within a collaborative development workflow.",
    technologies: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "React Hook Form",
      "Zod",
      "REST APIs",
    ],
  },
  {
    role: "Full Stack Web Development Trainee",
    company: "National Telecommunication Institute (NTI)",
    period: "2026",
    type: "Training",
    description:
      "Developing web development fundamentals and expanding practical knowledge through structured full-stack training.",
    technologies: ["Web Development", "Frontend", "Backend"],
  },

{
  role: "Web Development Trainee",
  company: "Creativa Zagazig (ITIDA / TIEC)",
  period: "84-Hour Diploma",
  type: "Training",
  description:
    "Completed an 84-hour Web Development Diploma covering HTML, CSS, JavaScript, DOM manipulation, working with APIs, React, React Router, and Git/GitHub.",
  technologies: [
    "HTML",
    "CSS",
    "JavaScript",
    "DOM",
    "REST APIs",
    "React",
    "React Router",
    "Git",
    "GitHub",
  ],
},
{
  role: "ICPC Level 0 Trainee",
  company: "ICPC Zagazig University Community",
  period: "2025",
  type: "Competitive Programming Training",
  description:
    "Completed Level 0 training focused on problem-solving fundamentals and competitive programming, building a stronger foundation in algorithmic thinking.",
  technologies: [
    "C++",
    "Problem Solving",
    "Algorithms",
    "Competitive Programming",
  ],
}

];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-[#F8FAFC] px-6 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <div className="mb-14">
          <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-[#059669] uppercase">
            My Journey
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-[#111827] sm:text-4xl lg:text-5xl">
            Experience & <span className="text-[#059669]">Training</span>
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-[#64748B]">
            My professional training and hands-on learning experiences
            as I continue to grow as a software developer.
          </p>

          <div className="mt-5 h-1 w-16 rounded-full bg-[#059669]" />
        </div>

        {/* Timeline */}
        <div className="relative space-y-8 before:absolute before:top-3 before:bottom-3 before:left-5 before:w-px before:bg-[#D1FAE5] sm:before:left-6">
          {experiences.map((experience, index) => {
            const Icon =
              index === 0 ? BriefcaseBusiness : GraduationCap;

            return (
              <article
                key={experience.company}
                className="relative pl-14 sm:pl-16"
              >
                <div className="absolute top-1 left-0 flex size-10 items-center justify-center rounded-xl border border-emerald-100 bg-white text-[#059669] shadow-sm sm:left-1">
                  <Icon size={20} />
                </div>

                <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 transition-all duration-300 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-900/5 sm:p-8">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-[#111827]">
                        {experience.role}
                      </h3>

                      <p className="mt-1 font-medium text-[#059669]">
                        {experience.company}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-[#047857]">
                        {experience.type}
                      </span>

                      <span className="text-sm text-[#64748B]">
                        {experience.period}
                      </span>
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-[#64748B]">
                    {experience.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {experience.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md border border-[#E2E8F0] bg-[#F8FAFC] px-3 py-1.5 text-xs font-medium text-slate-600"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
