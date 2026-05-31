"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, BarChart2, Cpu, Zap, ChevronRight, Github } from "lucide-react";
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
          VOIR GITHUB <Github size={12} />
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
