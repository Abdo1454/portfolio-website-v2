
import { Link } from "react-router-dom";

const navLinks: { label: string; href: string }[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#E2E8F0] bg-[#F8FAFC]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          aria-label="Go to homepage"
          className="shrink-0"
        >
          <img
            src="/img/icon-brand.png"
            alt="Portfolio logo"
            className="h-10 w-auto object-contain sm:h-12"
          />
        </Link>

        {/* Navigation */}
        <nav
          aria-label="Main navigation"
          className="flex items-center gap-4 overflow-x-auto sm:gap-6 lg:gap-8"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="shrink-0 text-sm font-medium text-slate-600 transition-colors hover:text-[#059669]"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
