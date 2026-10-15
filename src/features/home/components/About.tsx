import { Code2, GraduationCap, Target } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Frontend Development",
    description:
      "Building responsive and user-friendly interfaces with React, TypeScript, and modern web technologies.",
  },
  {
    icon: GraduationCap,
    title: "Computer Science Student",
    description:
      "Studying Computers and Information at Zagazig University while strengthening my software engineering fundamentals.",
  },
  {
    icon: Target,
    title: "Continuous Learning",
    description:
      "Improving my problem-solving skills and learning through practical projects, training, and competitive programming.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-white px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-14">
          <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-[#059669] uppercase">
            Get to know me
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-[#111827] sm:text-4xl lg:text-5xl">
            About <span className="text-[#059669]">Me</span>
          </h2>

          <div className="mt-5 h-1 w-16 rounded-full bg-[#059669]" />
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* About Text */}
          <div>
            <h3 className="mb-5 text-2xl leading-snug font-semibold text-[#111827] sm:text-3xl">
              Turning ideas into meaningful digital experiences.
            </h3>

            <div className="space-y-4 text-base leading-8 text-[#64748B]">
              <p>
                I'm a Frontend Developer focused on building clean,
                responsive, and accessible web interfaces using React
                and TypeScript.
              </p>

              <p>
                As a Computer and Information student at Zagazig
                University, I'm combining academic knowledge with
                hands-on training and real-world project experience.
              </p>

              <p>
                My goal is to grow as a software engineer, write
                maintainable code, solve challenging problems, and
                eventually build complete applications from frontend
                to backend.
              </p>
            </div>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center justify-center rounded-lg bg-[#059669] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#047857]"
            >
              Let's Work Together
            </a>
          </div>

          {/* Highlight Cards */}
          <div className="grid gap-4">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-900/5"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-[#059669] transition-colors group-hover:bg-[#059669] group-hover:text-white">
                      <Icon size={23} />
                    </div>

                    <div>
                      <h4 className="mb-2 text-lg font-semibold text-[#111827]">
                        {item.title}
                      </h4>

                      <p className="text-sm leading-7 text-[#64748B]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
