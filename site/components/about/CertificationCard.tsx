"use client";
import { useLocale, useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";
import type { Certification } from "@/content/certifications";

export function CertificationCard({ cert }: { cert: Certification }) {
  const t = useTranslations("about");
  const locale = useLocale() as "fr" | "en";

  return (
    <a
      href={cert.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col gap-4 overflow-hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-5 transition-all duration-300 hover:border-[var(--color-accent)]/50 hover:bg-[var(--color-surface-hover)] hover:shadow-[0_0_32px_-8px_rgba(0,217,255,0.35)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle, rgba(0,217,255,0.18), transparent 65%)",
        }}
      />

      <div className="relative flex items-start justify-between">
        <div
          className="flex h-14 w-14 items-center justify-center text-[var(--color-accent)] transition-transform duration-300 group-hover:scale-105"
          aria-hidden
        >
          <img
            src={`/certs/${cert.logoSlug}.svg`}
            alt=""
            className="h-14 w-14"
            style={{ filter: "drop-shadow(0 0 12px rgba(0,217,255,0.25))" }}
          />
        </div>
        <ArrowUpRight
          size={16}
          className="text-[var(--color-text-muted)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--color-accent)]"
        />
      </div>

      <div className="relative space-y-1.5">
        <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-[var(--color-accent)]">
          {cert.code}
        </div>
        <h3 className="text-sm font-semibold leading-snug text-[var(--color-text)]">
          {cert.name[locale]}
        </h3>
        <div className="flex items-center gap-1.5 pt-1 font-mono text-[11px] text-[var(--color-text-muted)]">
          <span className="inline-block h-px w-3 bg-[var(--color-border)]" />
          {cert.issuer}
          <span className="opacity-50">·</span>
          <span className="opacity-70 transition-opacity group-hover:opacity-100">
            {t("certViewOn")}
          </span>
        </div>
      </div>
    </a>
  );
}
