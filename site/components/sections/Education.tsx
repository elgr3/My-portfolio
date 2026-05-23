"use client";
import { useLocale, useTranslations } from "next-intl";
import { GraduationCap } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/motion/Reveal";
import { education } from "@/content/education";
import { formatDate } from "@/lib/format";

export function Education() {
  const t = useTranslations("education");
  const locale = useLocale() as "fr" | "en";

  return (
    <Section id="education" eyebrow={t("eyebrow")} title={t("title")}>
      <div className="grid md:grid-cols-2 gap-4">
        {education.map((e, i) => (
          <Reveal key={e.school} index={i}>
            <Card className="h-full">
              <GraduationCap className="text-[var(--color-accent)] mb-3" size={20} />
              <h3 className="text-base font-semibold">{e.school}</h3>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">{e.degree[locale]}</p>
              <p className="mt-3 font-mono text-xs text-[var(--color-text-muted)]">
                {formatDate(e.start, locale)} → {formatDate(e.end, locale)}
              </p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
