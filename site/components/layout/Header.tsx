"use client";
import { useTranslations } from "next-intl";
import { Download, Menu, X } from "lucide-react";
import { useState } from "react";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { profile } from "@/content/profile";

const sections = ["about", "experience", "skills", "projects", "education", "contact"] as const;

export function Header() {
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-[var(--color-bg)]/70 border-b border-[var(--color-border)]">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-mono text-sm tracking-tight">
          <span className="text-[var(--color-accent)]">rody</span>
          <span className="text-[var(--color-text-muted)]">@</span>
          <span>portfolio</span>
          <span className="ml-1 text-[var(--color-accent-2)]">~</span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {sections.map((s) => (
            <a
              key={s}
              href={`#${s}`}
              className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition"
            >
              {t(s)}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={profile.cvPath}
            download
            className="inline-flex items-center gap-1.5 text-sm text-[var(--color-text)] hover:text-[var(--color-accent)] transition"
          >
            <Download size={14} />
            {t("cv")}
          </a>
          <LocaleSwitcher />
        </div>

        <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-[var(--color-border)] bg-[var(--color-bg)]">
          <div className="mx-auto max-w-6xl px-6 py-4 flex flex-col gap-3">
            {sections.map((s) => (
              <a
                key={s}
                href={`#${s}`}
                onClick={() => setOpen(false)}
                className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
              >
                {t(s)}
              </a>
            ))}
            <div className="flex items-center gap-3 pt-3 border-t border-[var(--color-border)]">
              <a
                href={profile.cvPath}
                download
                className="inline-flex items-center gap-1.5 text-sm"
              >
                <Download size={14} />
                {t("cv")}
              </a>
              <LocaleSwitcher />
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
