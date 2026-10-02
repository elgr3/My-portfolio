"use client";
import { motion } from "framer-motion";
import { Brain, Database, BarChart2, Cpu } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import { skillCards, type SkillCard, type Tool } from "@/content/skills";

function getIcon(name: string) {
  const props = { size: 28 };
  if (name === "Brain") return <Brain {...props} />;
  if (name === "Database") return <Database {...props} />;
  if (name === "BarChart2") return <BarChart2 {...props} />;
  if (name === "Cpu") return <Cpu {...props} />;
  return <Brain {...props} />;
}

function ToolBadge({ tool, index }: { tool: Tool; index: number }) {
  return (
    <motion.div
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 3 + index * 0.5, repeat: Infinity }}
      whileHover={{ scale: 1.1 }}
      className="flex flex-col items-center gap-3 group/tool"
    >
      <div className="w-16 h-16 bg-white/5 rounded-2xl p-3 flex items-center justify-center border border-white/5 group-hover/tool:border-white/20 transition-all backdrop-blur-sm relative">
        <div
          className="absolute inset-0 rounded-2xl blur-sm scale-90 group-hover/tool:scale-110 transition-transform"
          style={{ backgroundColor: tool.color + "22" }}
        />
        {tool.logo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={tool.logo}
            alt=""
            className="w-full h-full object-contain relative z-10 brightness-90 group-hover/tool:brightness-110 group-hover/tool:drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-all"
          />
        ) : (
          <span
            className="relative z-10 font-tech font-extrabold text-sm"
            style={{ color: tool.color }}
          >
            {tool.abbr}
          </span>
        )}
      </div>
      <span className="text-[10px] font-tech font-bold text-slate-500 uppercase tracking-widest group-hover/tool:text-white transition-colors">
        {tool.name}
      </span>
    </motion.div>
  );
}

function SkillCardComponent({ card, index }: { card: SkillCard; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay: index * 0.1 }}
      className="p-1 bg-linear-to-br from-white/10 to-transparent rounded-[2rem] overflow-hidden group"
    >
      <div className="bg-card p-6 sm:p-10 rounded-[1.9rem] h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center gap-5 mb-10">
          <motion.div
            animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="w-16 h-16 shrink-0 bg-mint/10 rounded-2xl flex items-center justify-center text-mint shadow-[0_0_20px_rgba(45,212,191,0.1)] group-hover:shadow-[0_0_30px_rgba(45,212,191,0.2)] transition-all"
          >
            {getIcon(card.icon)}
          </motion.div>
          <h3 className="text-xl sm:text-2xl font-tech font-extrabold text-white">{card.title}</h3>
        </div>

        {/* Tools */}
        <div className="flex flex-wrap gap-6 sm:gap-8 mb-10">
          {card.tools.map((t, i) => (
            <ToolBadge key={t.name} tool={t} index={i} />
          ))}
        </div>

        {/* Bullets */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-auto">
          {card.bullets.map((b) => (
            <div
              key={b}
              className="flex items-center gap-3 p-3 bg-white/[0.02] border border-white/5 rounded-xl hover:bg-white/[0.05] transition-colors"
            >
              <div className="w-1.5 h-1.5 shrink-0 rounded-full bg-mint shadow-[0_0_5px_rgba(45,212,191,1)]" />
              <span className="text-slate-400 text-xs font-semibold leading-tight">{b}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-24 relative z-10 overflow-hidden">
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-10 w-64 h-64 bg-linear-to-r from-mint/20 to-transparent rounded-full blur-3xl opacity-30 pointer-events-none"
      />
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-10 w-64 h-64 bg-linear-to-l from-blue/20 to-transparent rounded-full blur-3xl opacity-30 pointer-events-none"
      />

      <div className="container mx-auto px-6 relative z-10">
        <SectionTitle subtitle="Expertise" title="Écosystème Technique" centered />

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCards.map((card, i) => (
            <SkillCardComponent key={card.id} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
