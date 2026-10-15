
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
    <header className="border-b border-white/10 bg-[#0b0d12]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
        <Link to="/" aria-label="Go to homepage">
          <img
            src="/img/icon-brand.png"
            alt="Portfolio logo"
            className="h-12 w-auto object-contain"
          />
        </Link>

        <nav aria-label="Main navigation" className="flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-400 transition-colors hover:text-purple-400"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
