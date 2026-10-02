"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, BarChart2, Cpu, Zap, ArrowRight, Filter, X } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { SectionTitle } from "@/components/SectionTitle";
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

function CategoryIcon({ category, size = 24 }: { category: string; size?: number }) {
  const props = { size };
  if (category === "MACHINE LEARNING") return <Brain {...props} />;
  if (category === "NLP") return <BarChart2 {...props} />;
  if (category === "MLOPS") return <Cpu {...props} />;
  if (category === "GENAI") return <Zap {...props} />;
  return <Brain {...props} />;
}

function ProjectCard({
  project,
  onViewDetails,
}: {
  project: Project;
  onViewDetails: (p: Project) => void;
}) {
  const comingSoon = project.status === "coming-soon";
  const cardVariants = {
    initial: { opacity: 0, scale: 0.9, y: 0, borderColor: "rgba(255, 255, 255, 0.05)" },
    animate: { opacity: comingSoon ? 0.7 : 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.9 },
    hover: {
      y: -12,
      borderColor: project.accent,
      boxShadow: `0 20px 40px -20px rgba(2, 6, 23, 0.7), 0 0 25px ${project.accent}33`,
    },
  };

  return (
    <motion.div
      layout
      variants={cardVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      whileHover="hover"
      className="bg-card border border-white/5 rounded-2xl p-8 relative group h-full flex flex-col"
    >
      {/* Category + title */}
      <div className="flex items-center gap-4 mb-8">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
          style={{ backgroundColor: `${project.accent}1a`, color: project.accent }}
        >
          <CategoryIcon category={project.category} />
        </div>
        <div className="min-w-0">
          <span className="text-[10px] font-tech font-bold text-slate-500 uppercase tracking-widest">
            {project.category}
          </span>
          <h3 className="text-xl font-tech font-extrabold tracking-tight text-white">
            {project.title}
          </h3>
        </div>
        {comingSoon && (
          <span className="ml-auto shrink-0 text-[10px] font-tech font-bold text-slate-400 border border-white/10 rounded-full px-2.5 py-1 uppercase tracking-widest">
            À venir
          </span>
        )}
      </div>

      {/* Description */}
      <p className="text-sm text-slate-400 leading-relaxed mb-8 grow group-hover:text-slate-200 transition-colors">
        {project.description}
      </p>

      {/* Metrics */}
      <div className="flex gap-4 mb-8">
        {project.metrics.map((m) => (
          <div
            key={m.label}
            className="flex-1 bg-stat border border-white/5 rounded-xl p-3 group-hover:border-white/10 transition-colors"
          >
            <span className="text-[9px] font-tech font-bold text-slate-500 uppercase block mb-1">
              {m.label}
            </span>
            <span className="text-[13px] font-tech font-extrabold" style={{ color: project.accent }}>
              {m.value}
            </span>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <button
          onClick={() => onViewDetails(project)}
          disabled={comingSoon}
          className="flex-1 py-3 bg-white/10 border border-white/20 rounded-xl text-white font-tech font-bold text-[11px] uppercase tracking-widest hover:bg-white/20 hover:border-white/40 hover:shadow-[0_0_15px_rgba(255,255,255,0.15)] transition-all flex items-center justify-center gap-2 disabled:opacity-40 disabled:pointer-events-none"
        >
          Détails
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </button>
        <a
          href={project.githubUrl ?? profile.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-disabled={comingSoon}
          tabIndex={comingSoon ? -1 : undefined}
          className={cn(
            "flex-1 py-3 bg-mint text-bg font-tech font-bold text-[11px] uppercase tracking-widest rounded-xl hover:shadow-[0_0_20px_rgba(45,212,191,0.4)] transition-all flex items-center justify-center gap-2",
            comingSoon && "pointer-events-none opacity-40"
          )}
        >
          Voir GitHub <GithubIcon size={14} />
        </a>
      </div>
    </motion.div>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6 py-12"
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div className="absolute inset-0 bg-bg/80 backdrop-blur-md" onClick={onClose} />
      <motion.div
        initial={{ scale: 0.9, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 20, opacity: 0 }}
        className="bg-card border border-white/10 w-full max-w-2xl max-h-full overflow-y-auto rounded-3xl relative shadow-2xl z-10"
      >
        <button
          onClick={onClose}
          aria-label="Fermer"
          className="absolute top-6 right-6 text-slate-500 hover:text-white transition-colors z-20"
        >
          <X size={24} />
        </button>

        <div className="p-8 md:p-12">
          <div className="flex items-center gap-4 mb-8 pr-8">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0"
              style={{ backgroundColor: `${project.accent}1a`, color: project.accent }}
            >
              <CategoryIcon category={project.category} size={28} />
            </div>
            <div>
              <span className="text-[11px] font-tech font-bold text-slate-500 uppercase tracking-[0.2em] mb-1 block">
                {project.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-tech font-extrabold text-white">
                {project.title}
              </h3>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h4 className="text-white font-tech text-xs font-bold uppercase tracking-widest mb-4">
                Description approfondie
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed whitespace-pre-line">
                {project.longDescription ?? project.description}
              </p>
            </div>

            <div>
              <h4 className="text-white font-tech text-xs font-bold uppercase tracking-widest mb-4">
                Technologies utilisées
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-slate-300 text-[10px] font-tech font-bold uppercase tracking-widest"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-6 pt-8 border-t border-white/5">
              <div className="flex gap-6">
                {project.metrics.map((m) => (
                  <div key={m.label}>
                    <span className="text-[9px] font-tech font-bold text-slate-500 uppercase block mb-1">
                      {m.label}
                    </span>
                    <span
                      className="text-[15px] font-tech font-extrabold"
                      style={{ color: project.accent }}
                    >
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>
              <a
                href={project.githubUrl ?? profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl font-tech font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:scale-105 transition-transform"
                style={{ backgroundColor: `${project.accent}1a`, color: project.accent }}
              >
                Voir GitHub <GithubIcon size={14} />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Portfolio() {
  const [active, setActive] = useState<ProjectFilter>("all");
  const [selected, setSelected] = useState<Project | null>(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const visible = projects.filter(
    (p) => active === "all" || p.filters.includes(active)
  );

  return (
    <section id="portfolio" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <SectionTitle subtitle="Portfolio" title="Mes Projets Phares" centered />

        {/* Filters */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-12">
          <div className="hidden sm:flex items-center gap-2 text-slate-500 mr-4">
            <Filter size={16} />
            <span className="text-[11px] font-tech font-bold uppercase tracking-widest">
              Filtrer par :
            </span>
          </div>
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setActive(f.id)}
              className={cn(
                "px-5 py-2.5 rounded-xl font-tech font-bold text-[10px] uppercase tracking-widest transition-all",
                active === f.id
                  ? "bg-mint text-bg shadow-[0_0_15px_rgba(45,212,191,0.3)]"
                  : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border border-white/5"
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <ProjectCard key={p.id} project={p} onViewDetails={setSelected} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Portail vers <body> : la section (relative z-10) piégerait la fenêtre sous les sections suivantes */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
          </AnimatePresence>,
          document.body
        )}
    </section>
  );
}
