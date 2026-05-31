"use client";
import { useState, useEffect } from "react";
import { cn } from "@/lib/cn";
import { profile } from "@/content/profile";

const links = [
  { label: "ACCUEIL", href: "#top" },
  { label: "À PROPOS", href: "#about" },
  { label: "PORTFOLIO", href: "#portfolio" },
  { label: "COMPÉTENCES", href: "#skills" },
  { label: "CONTACT", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[var(--color-bg)]/90 backdrop-blur-md border-b border-[var(--color-border)]"
          : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-3 shrink-0">
          <div className="w-9 h-9 rounded-lg bg-[var(--color-cyan)] flex items-center justify-center">
            <span className="text-[var(--color-bg)] font-black text-sm tracking-tight">
              {profile.initials}
            </span>
          </div>
          <span className="hidden sm:block text-sm font-semibold text-[var(--color-text)]">
            {profile.tagline}
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-xs font-bold tracking-widest text-[var(--color-muted)] hover:text-[var(--color-cyan)] transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Menu"
        >
          <span className={cn("block h-0.5 w-6 bg-[var(--color-text)] transition-all", menuOpen && "rotate-45 translate-y-2")} />
          <span className={cn("block h-0.5 w-6 bg-[var(--color-text)] transition-all", menuOpen && "opacity-0")} />
          <span className={cn("block h-0.5 w-6 bg-[var(--color-text)] transition-all", menuOpen && "-rotate-45 -translate-y-2")} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[var(--color-bg2)] border-b border-[var(--color-border)] px-6 py-4">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-xs font-bold tracking-widest text-[var(--color-muted)] hover:text-[var(--color-cyan)] transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
