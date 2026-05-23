"use client";
import { useTranslations } from "next-intl";
import { ArrowUpRight, Github } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { Badge } from "@/components/ui/Badge";
import { Tilt } from "@/components/motion/Tilt";
import type { Project } from "@/content/projects";

export function ProjectCard({ project, locale }: { project: Project; locale: "fr" | "en" }) {
  const t = useTranslations("projects");
  const isComingSoon = project.type === "coming-soon";
  const isPro = project.type === "pro";

  const content = (
    <Card interactive className="h-full flex flex-col">
      <div className="flex items-start justify-between gap-3 mb-3">
        <span className="font-mono text-xs text-[var(--color-text-muted)]">
          {project.context[locale]}
        </span>
        {isPro && <Badge tone="accent">pro</Badge>}
        {isComingSoon && <Badge tone="muted">🚧 {t("comingSoon")}</Badge>}
      </div>
      <h3 className="text-lg font-semibold leading-tight">{project.title[locale]}</h3>
      <p className="mt-3 text-sm text-[var(--color-text-muted)] flex-1">
        {project.pitch[locale]}
      </p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.stack.map((s) => (
          <Tag key={s}>{s}</Tag>
        ))}
      </div>
      {project.hasCaseStudy && (
        <a
          href={`/projets/${project.slug}`}
          className="mt-5 inline-flex items-center gap-1.5 text-sm text-[var(--color-accent)] hover:gap-2.5 transition-all"
        >
          {t("viewCase")} <ArrowUpRight size={14} />
        </a>
      )}
      {project.link && (
        <a
          href={project.link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-1.5 text-sm text-[var(--color-accent)] hover:gap-2.5 transition-all"
        >
          <Github size={14} />
          {project.link.label[locale]}
        </a>
      )}
    </Card>
  );

  return isComingSoon ? <div className="opacity-70">{content}</div> : <Tilt>{content}</Tilt>;
}
