"use client";
import { useTranslations, useLocale } from "next-intl";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Monogram } from "@/components/motion/Monogram";
import { Reveal } from "@/components/motion/Reveal";
import { profile } from "@/content/profile";
import { certifications } from "@/content/certifications";

export function About() {
  const t = useTranslations("about");
  const locale = useLocale() as "fr" | "en";
  const values = ["rigor", "curiosity", "product", "teach"] as const;

  return (
    <Section id="about" eyebrow={t("eyebrow")} title={t("title")}>
      <div className="grid md:grid-cols-3 gap-12 items-start">
        <Reveal className="md:col-span-1 flex justify-center">
          <Monogram />
        </Reveal>

        <div className="md:col-span-2 space-y-8">
          <Reveal index={1}>
            <p className="text-lg leading-relaxed text-[var(--color-text-muted)]">
              {profile.pitch[locale]}
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-4">
            {values.map((v, i) => (
              <Reveal key={v} index={2 + i}>
                <Card>
                  <h3 className="font-semibold text-[var(--color-accent)]">
                    {t(`values.${v}`)}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                    {t(`values.${v}Desc`)}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>

          <Reveal index={6}>
            <div>
              <h3 className="font-mono text-sm text-[var(--color-text-muted)] mb-3">
                // {t("certs")}
              </h3>
              <div className="flex flex-wrap gap-2">
                {certifications.map((c) => (
                  <Badge key={c.name} tone="accent">
                    {c.name}
                  </Badge>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
