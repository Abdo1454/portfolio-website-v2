import { Code, Link, Mail, Send } from "lucide-react";

const contactMethods = [
{
  title: "Email",
  value: "abdulrimelsayed@gmail.com",
  href: "mailto:abdulrimelsayed@gmail.com",
  icon: Mail,
},
{
title: "GitHub",
value: "Abdo1454",
href: "https://github.com/Abdo1454",
icon: Code,
},
{
title: "LinkedIn",
value: "Connect with me",
href: "https://www.linkedin.com/in/abdulrhim-elsayed/",
icon: Link,
},
];

export default function Contact() {
return (
<section    id="contact"    className="bg-white px-6 py-24 sm\:py-28"  >
<div className="mx-auto max-w-7xl">
<div className="mx-auto mb-14 max-w-2xl text-center">
<p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
Get In Touch
\</p>


      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
        Let's Work <span className="text-emerald-600">Together</span>
      </h2>

      <p className="mt-5 text-base leading-7 text-slate-500">
        I'm open to frontend opportunities, internships, and collaborative
        projects. Feel free to reach out!
      </p>
    </div>

    <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
      <div>
        <h3 className="text-2xl font-bold text-gray-900">
          Have a project in mind?
        </h3>

        <p className="mt-4 max-w-md leading-7 text-slate-500">
          Whether you have an opportunity, a project idea, or just want to
          connect, I'd be happy to hear from you.
        </p>

        <div className="mt-8 space-y-4">
          {contactMethods.map(({ title, value, href, icon: Icon }) => (
            <a
              key={title}
              href={href}
              target={title === "Email" ? undefined : "_blank"}
              rel={title === "Email" ? undefined : "noopener noreferrer"}
              className="group flex items-center gap-4 rounded-xl border border-slate-200 p-4 transition-all hover:border-emerald-300 hover:bg-emerald-50/50"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 transition-colors group-hover:bg-emerald-100">
                <Icon size={22} />
              </span>

              <span>
                <span className="block text-sm text-slate-500">
                  {title}
                </span>
                <span className="mt-1 block font-semibold text-gray-900">
                  {value}
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-center rounded-2xl border border-slate-200 bg-slate-50 p-8 sm:p-10">
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
          <Send size={26} />
        </div>

        <h3 className="text-2xl font-bold text-gray-900">
          Let's build something great.
        </h3>

        <p className="mt-4 leading-7 text-slate-500">
          I'm continuously learning React and TypeScript and looking for
          opportunities to grow as a frontend developer.
        </p>

        <a
          href="mailto:your.email@example.com"
          className="mt-8 inline-flex w-fit items-center justify-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-emerald-700"
        >
          Contact Me
          <Send size={17} />
        </a>
      </div>
    </div>
  </div>
</section>


);
}
