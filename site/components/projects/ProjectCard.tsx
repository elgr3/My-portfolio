"use client";
import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/GithubIcon";
import { Tag } from "@/components/ui/Tag";
import { Badge } from "@/components/ui/Badge";
import { Tilt } from "@/components/motion/Tilt";
import { ProjectCover } from "@/components/projects/ProjectCover";
import { cn } from "@/lib/cn";
import type { Project, TechIcon } from "@/content/projects";

function defaultIconsFromStack(stack: string[]): TechIcon[] {
  const map: Record<string, TechIcon> = {
    python: "python",
    pyspark: "pyspark",
    azure: "azure",
    aws: "aws",
    sql: "sql",
    "power bi": "powerbi",
    powerbi: "powerbi",
    react: "react",
    reactivesearch: "react",
    opensearch: "opensearch",
    "elasticsearch dsl": "opensearch",
    java: "java",
    javafx: "java",
    mysql: "database",
    sqlite: "database",
    tkinter: "python",
    langchain: "langchain",
    mistral: "mistral",
    "hugging face": "huggingface",
    huggingface: "huggingface",
    "vector db": "database",
    "ci/cd": "ci",
    etl: "etl",
    datagalaxy: "database",
  };
  const picked: TechIcon[] = [];
  for (const s of stack) {
    const icon = map[s.toLowerCase()];
    if (icon && !picked.includes(icon)) picked.push(icon);
    if (picked.length >= 3) break;
  }
  return picked;
}

export function ProjectCard({ project, locale }: { project: Project; locale: "fr" | "en" }) {
  const t = useTranslations("projects");
  const isComingSoon = project.type === "coming-soon";
  const isPro = project.type === "pro";
  const theme = project.coverTheme ?? project.categories[0];
  const icons = project.coverIcons ?? defaultIconsFromStack(project.stack);

  const href = project.hasCaseStudy
    ? `/projets/${project.slug}`
    : project.link?.href;
  const external = !!project.link && !project.hasCaseStudy;

  const inner = (
    <div
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] transition-all duration-300",
        !isComingSoon &&
          "hover:border-[var(--color-accent)]/50 hover:bg-[var(--color-surface-hover)] hover:shadow-[0_0_40px_-12px_rgba(0,217,255,0.45)]"
      )}
    >
      <ProjectCover
        theme={theme}
        icons={icons}
        comingSoon={isComingSoon}
        slug={project.slug}
      />

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-start justify-between gap-3">
          <span className="font-mono text-xs text-[var(--color-text-muted)]">
            {project.context[locale]}
          </span>
          {isPro && <Badge tone="accent">pro</Badge>}
          {isComingSoon && <Badge tone="muted">🚧 {t("comingSoon")}</Badge>}
        </div>
        <h3 className="text-lg font-semibold leading-tight">{project.title[locale]}</h3>
        <p className="mt-3 flex-1 text-sm text-[var(--color-text-muted)]">
          {project.pitch[locale]}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </div>
        {project.hasCaseStudy && (
          <div className="mt-5 inline-flex items-center gap-1.5 text-sm text-[var(--color-accent)] transition-all group-hover:gap-2.5">
            {t("viewCase")} <ArrowUpRight size={14} />
          </div>
        )}
        {project.link && !project.hasCaseStudy && (
          <div className="mt-5 inline-flex items-center gap-1.5 text-sm text-[var(--color-accent)] transition-all group-hover:gap-2.5">
            <GithubIcon size={14} />
            {project.link.label[locale]}
          </div>
        )}
        {isComingSoon && (
          <div className="mt-5 font-mono text-xs text-[var(--color-text-muted)]">
            // {t("comingSoon")}
          </div>
        )}
      </div>
    </div>
  );

  if (isComingSoon) {
    return <div className="opacity-70">{inner}</div>;
  }

  const wrapped = href ? (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={project.title[locale]}
      className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:rounded-lg"
    >
      {inner}
    </a>
  ) : (
    inner
  );

  return <Tilt className="h-full">{wrapped}</Tilt>;
}
