"use client";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/motion/Reveal";
import { skillCategories } from "@/content/skills";

export function Skills() {
  const t = useTranslations("skills");
  const locale = useLocale() as "fr" | "en";

  return (
    <Section id="skills" eyebrow={t("eyebrow")} title={t("title")}>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillCategories.map((cat, i) => (
          <Reveal key={cat.id} index={i}>
            <Card className="h-full">
              <h3 className="font-mono text-sm text-[var(--color-accent)] mb-4">
                // {cat.label[locale]}
              </h3>
              <ul className="space-y-3">
                {cat.skills.map((sk) => (
                  <li key={sk.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{sk.name}</span>
                      <span className="font-mono text-xs text-[var(--color-text-muted)]">
                        {sk.level}/5
                      </span>
                    </div>
                    <div className="h-1 rounded-full bg-[var(--color-border)] overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-2)]"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(sk.level / 5) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
