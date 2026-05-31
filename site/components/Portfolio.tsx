"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, BarChart2, Cpu, Zap, ChevronRight } from "lucide-react";

function GithubIcon({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}
import { cn } from "@/lib/cn";
import { projects, type ProjectFilter, type Project } from "@/content/projects";
import { profile } from "@/content/profile";

const FILTERS: { id: ProjectFilter; label: string }[] = [
  { id: "all", label: "TOUS" },
  { id: "ml", label: "ML" },
  { id: "nlp", label: "NLP" },
  { id: "mlops", label: "MLOPS" },
  { id: "genai", label: "GENAI" },
  { id: "finance", label: "FINANCE" },
];

function CategoryIcon({ category }: { category: string }) {
  const props = { size: 18 };
  if (category === "MACHINE LEARNING") return <Brain {...props} />;
  if (category === "NLP") return <BarChart2 {...props} />;
  if (category === "MLOPS") return <Cpu {...props} />;
  if (category === "GENAI") return <Zap {...props} />;
  return <Brain {...props} />;
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.25 }}
      whileHover={{ y: -4 }}
      className={cn(
        "bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-5 flex flex-col gap-4",
        project.status === "coming-soon" && "opacity-70"
      )}
    >
      {/* Category */}
      <div className="flex items-center gap-2">
        <span style={{ color: project.categoryColor }}>
          <CategoryIcon category={project.category} />
        </span>
        <span
          className="text-xs font-black tracking-widest uppercase"
          style={{ color: project.categoryColor }}
        >
          {project.category}
        </span>
        {project.status === "coming-soon" && (
          <span className="ml-auto text-xs font-bold text-[var(--color-muted)] border border-[var(--color-border)] rounded-full px-2 py-0.5">
            À VENIR
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="text-lg font-black text-[var(--color-text)]">{project.title}</h3>

      {/* Description */}
      <p className="text-sm text-[var(--color-muted)] leading-relaxed flex-1">{project.description}</p>

      {/* Metrics */}
      <div className="grid grid-cols-2 gap-2">
        {project.metrics.map((m) => (
          <div key={m.label} className="bg-[var(--color-bg2)] border border-[var(--color-border)] rounded-lg p-3">
            <p className="text-xs text-[var(--color-muted)] uppercase tracking-wider mb-1">{m.label}</p>
            <p className="font-bold text-[var(--color-cyan)]">{m.value}</p>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="grid grid-cols-2 gap-2">
        <button
          disabled={project.status === "coming-soon"}
          className="flex items-center justify-center gap-1 border border-[var(--color-border)] text-[var(--color-text)] rounded-lg py-2.5 text-xs font-bold hover:border-[var(--color-cyan)] hover:text-[var(--color-cyan)] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          DÉTAILS <ChevronRight size={12} />
        </button>
        <a
          href={project.githubUrl ?? profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "flex items-center justify-center gap-1 bg-[var(--color-cyan)] text-[var(--color-bg)] rounded-lg py-2.5 text-xs font-bold hover:brightness-110 transition-all",
            project.status === "coming-soon" && "pointer-events-none opacity-40"
          )}
        >
          VOIR GITHUB <GithubIcon size={12} />
        </a>
      </div>
    </motion.div>
  );
}

export function Portfolio() {
  const [active, setActive] = useState<ProjectFilter>("all");

  const visible = projects.filter(
    (p) => active === "all" || p.filters.includes(active)
  );

  return (
    <section id="portfolio" className="py-24 max-w-6xl mx-auto px-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <p className="text-xs font-black tracking-[0.25em] text-[var(--color-cyan)] uppercase mb-3">
          PORTFOLIO
        </p>
        <h2
          className="font-black text-[var(--color-text)]"
          style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
        >
          Mes Projets Phares
        </h2>
      </motion.div>

      {/* Filters */}
      <div className="flex items-center gap-2 flex-wrap mb-10">
        <span className="text-xs text-[var(--color-muted)] font-bold mr-1 hidden sm:block">
          FILTRER PAR :
        </span>
        {FILTERS.map((f) => (
          <button
            key={f.id}
            onClick={() => setActive(f.id)}
            className={cn(
              "px-4 py-1.5 rounded-full text-xs font-black tracking-wider border transition-all",
              active === f.id
                ? "bg-[var(--color-cyan)] text-[var(--color-bg)] border-[var(--color-cyan)]"
                : "border-[var(--color-border)] text-[var(--color-muted)] hover:border-[var(--color-cyan)] hover:text-[var(--color-cyan)]"
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid sm:grid-cols-2 gap-5">
        <AnimatePresence mode="popLayout">
          {visible.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
