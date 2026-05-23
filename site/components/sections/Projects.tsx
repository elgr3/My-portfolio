"use client";
import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects, type ProjectCategory } from "@/content/projects";
import { profile } from "@/content/profile";
import { cn } from "@/lib/cn";

type Filter = "all" | ProjectCategory;
const filters: Filter[] = ["all", "data-engineering", "bi", "ai-ml", "backend"];
const labelKey: Record<Filter, string> = {
  all: "all",
  "data-engineering": "dataEng",
  bi: "bi",
  "ai-ml": "aiMl",
  backend: "backend",
};

export function Projects() {
  const t = useTranslations("projects");
  const locale = useLocale() as "fr" | "en";
  const [filter, setFilter] = useState<Filter>("all");

  const visible = projects.filter(
    (p) => filter === "all" || p.categories.includes(filter as ProjectCategory)
  );

  return (
    <Section id="projects" eyebrow={t("eyebrow")} title={t("title")}>
      <div className="flex flex-wrap gap-2 mb-8">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={cn(
              "px-3 py-1.5 rounded-full text-xs font-mono border transition",
              filter === f
                ? "border-[var(--color-accent)] bg-[var(--color-accent)]/10 text-[var(--color-accent)]"
                : "border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
            )}
          >
            {t(labelKey[f])}
          </button>
        ))}
      </div>

      <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <AnimatePresence mode="popLayout">
          {visible.map((p, i) => (
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
            >
              <ProjectCard project={p} locale={locale} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <Reveal index={10} className="mt-10 text-center">
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-sm text-[var(--color-accent)] hover:underline"
        >
          {t("moreOnGithub")}
        </a>
      </Reveal>
    </Section>
  );
}
