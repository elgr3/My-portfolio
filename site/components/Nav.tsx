"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { profile } from "@/content/profile";

const links = [
  { label: "Accueil", href: "#top" },
  { label: "À propos", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Compétences", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-bg/95 backdrop-blur-md border-b border-white/5 py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2 shrink-0">
          <div className="w-10 h-10 bg-linear-to-br from-mint to-blue rounded-lg flex items-center justify-center font-tech font-extrabold text-bg shadow-lg">
            {profile.initials}
          </div>
          <span className="font-tech text-sm font-bold tracking-tight text-white">
            {profile.tagline}
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[12px] font-tech font-semibold text-slate-400 hover:text-white transition-colors uppercase tracking-widest"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(true)}
          aria-label="Ouvrir le menu"
        >
          <Menu size={24} />
        </button>
      </div>
    </nav>

      {/* Mobile menu — hors du <nav> : son backdrop-blur piégerait le position: fixed */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed inset-0 bg-bg z-[60] flex flex-col items-center justify-center gap-8 md:hidden"
          >
            <button
              className="absolute top-6 right-6 text-white"
              onClick={() => setMenuOpen(false)}
              aria-label="Fermer le menu"
            >
              <X size={32} />
            </button>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-tech font-bold text-white hover:text-mint"
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
