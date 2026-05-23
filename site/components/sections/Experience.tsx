"use client";
import { useTranslations, useLocale } from "next-intl";
import { Section } from "@/components/ui/Section";
import { Tag } from "@/components/ui/Tag";
import { Reveal } from "@/components/motion/Reveal";
import { experiences } from "@/content/experiences";
import { formatDate } from "@/lib/format";

export function Experience() {
  const t = useTranslations("experience");
  const locale = useLocale() as "fr" | "en";

  return (
    <Section id="experience" eyebrow={t("eyebrow")} title={t("title")}>
      <ol className="relative border-l border-[var(--color-border)] ml-3 space-y-10">
        {experiences.map((exp, i) => (
          <li key={`${exp.company}-${exp.start}`} className="pl-8 relative">
            <span className="absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-[var(--color-accent)] glow-cyan" />
            <Reveal index={i}>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-lg font-semibold">{exp.role[locale]}</h3>
                <span className="text-[var(--color-accent)] font-mono text-sm">
                  @ {exp.company}
                </span>
              </div>
              <p className="font-mono text-xs text-[var(--color-text-muted)] mt-1">
                {formatDate(exp.start, locale)} → {formatDate(exp.end, locale)} · {exp.location}
              </p>
              {exp.bullets[locale].length > 0 && (
                <ul className="mt-3 space-y-1.5 text-sm text-[var(--color-text-muted)]">
                  {exp.bullets[locale].map((b) => (
                    <li key={b} className="leading-relaxed">
                      <span className="text-[var(--color-accent-2)] mr-2">›</span>
                      {b}
                    </li>
                  ))}
                </ul>
              )}
              {exp.stack.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {exp.stack.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </div>
              )}
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
