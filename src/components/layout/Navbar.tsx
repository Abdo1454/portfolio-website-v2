import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks: { label: string; href: string }[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#E2E8F0] bg-[#F8FAFC]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          aria-label="Go to homepage"
          onClick={closeMenu}
          className="relative z-10 shrink-0"
        >
          <img
            src="/img/icon-brand.png"
            alt="Portfolio logo"
            className="h-10 w-auto object-contain sm:h-12"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-5 md:flex lg:gap-7"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-[#059669]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          className="relative z-10 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#E2E8F0] text-slate-700 transition-colors hover:bg-emerald-50 hover:text-[#059669] md:hidden"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        className={`absolute left-0 right-0 top-full border-b border-[#E2E8F0] bg-[#F8FAFC] shadow-lg shadow-slate-900/5 transition-all duration-200 md:hidden ${
          isMenuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0 pointer-events-none"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              tabIndex={isMenuOpen ? 0 : -1}
              className="rounded-lg px-4 py-3 text-sm font-medium text-slate-600 transition-colors hover:bg-emerald-50 hover:text-[#059669]"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}