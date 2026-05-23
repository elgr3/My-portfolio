import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/content/projects";
import { caseStudies } from "@/content/case-studies";
import { Tag } from "@/components/ui/Tag";
import { Badge } from "@/components/ui/Badge";

export function generateStaticParams() {
  return projects
    .filter((p) => p.hasCaseStudy)
    .flatMap((p) => [
      { locale: "fr", slug: p.slug },
      { locale: "en", slug: p.slug },
    ]);
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ locale: "fr" | "en"; slug: string }>;
}) {
  const { locale, slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  const caseStudy = caseStudies.find((c) => c.slug === slug);
  if (!project || !caseStudy) notFound();

  return (
    <main className="mx-auto max-w-3xl px-6 py-32">
      <Link
        href={locale === "fr" ? "/#projects" : "/en#projects"}
        className="inline-flex items-center gap-1.5 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] mb-12"
      >
        <ArrowLeft size={14} />
        {locale === "fr" ? "Retour aux projets" : "Back to projects"}
      </Link>

      <Badge tone="accent" className="mb-4">
        {project.context[locale]}
      </Badge>
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
        {project.title[locale]}
      </h1>
      <p className="text-lg text-[var(--color-text-muted)] mb-6">{project.pitch[locale]}</p>

      <div className="flex flex-wrap gap-1.5 mb-12">
        {project.stack.map((s) => (
          <Tag key={s}>{s}</Tag>
        ))}
      </div>

      <article className="space-y-10">
        {caseStudy.sections.map((s) => (
          <section key={s.heading[locale]}>
            <h2 className="font-mono text-sm text-[var(--color-accent)] mb-3">
              // {s.heading[locale]}
            </h2>
            <p className="text-base leading-relaxed text-[var(--color-text)]">
              {s.body[locale]}
            </p>
          </section>
        ))}
      </article>
    </main>
  );
}
