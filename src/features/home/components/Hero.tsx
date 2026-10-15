
import { ArrowRight, Code2,  Link2 } from "lucide-react";
import {Link} from "react-router-dom"
import HeroImage from "../../../../public/img/WhatsApp Image 2026-10-15 at 4.12.16 PM.jpeg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[85vh] items-center overflow-hidden bg-[#F8FAFC] px-6 py-20"
    >
      {/* Emerald background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 -z-0 h-96 w-96 rounded-full bg-emerald-500/10 blur-[120px]"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 md:grid-cols-2">
        {/* Hero content */}
        <div>
          <p className="mb-5 flex items-center gap-3 text-sm font-semibold tracking-widest text-[#059669] uppercase">
            <span className="h-px w-8 bg-[#059669]" />
            Frontend Developer
          </p>

          <h1 className="text-4xl leading-tight font-bold tracking-tight text-[#111827] sm:text-5xl lg:text-7xl">
            Abdulrahim
            <span className="mt-2 block text-[#059669]">
              Elsayed.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            I'm a Frontend Developer passionate about building
            responsive, accessible, and user-friendly web
            applications using React, TypeScript, and modern
            frontend technologies.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-[#059669] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#047857]"
            >
              View Projects
              <ArrowRight size={18} />
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-[#E2E8F0] bg-white px-6 py-3 font-semibold text-[#111827] transition-colors hover:border-[#059669] hover:text-[#059669]"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5">
            <Link
              to="https://github.com/Abdo1454"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="text-slate-500 transition-colors hover:text-[#059669]"
            >
              <Code2 />
            </Link>

            <Link
              to="https://www.linkedin.com/in/abdulrhim-elsayed/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="text-slate-500 transition-colors hover:text-[#059669]"
            >
              <Link2 />
            </Link>
          </div>
        </div>

        {/* Profile image */}
        <div className="relative mx-auto w-full max-w-md">
          <div
            aria-hidden="true"
            className="absolute inset-8 rounded-full bg-emerald-500/15 blur-3xl"
          />

          <img
            src={HeroImage}
            alt="Abdulrahim Elsayed"
            className="relative z-10 mx-auto max-h-[480px] w-full rounded-2xl object-contain"
          />
        </div>
      </div>
    </section>
  );
}
