"use client";
import { motion } from "framer-motion";
import { Brain, Database, BarChart2, Cpu } from "lucide-react";
import { skillCards, type SkillCard } from "@/content/skills";

function getIcon(name: string) {
  const props = { size: 22 };
  if (name === "Brain") return <Brain {...props} />;
  if (name === "Database") return <Database {...props} />;
  if (name === "BarChart2") return <BarChart2 {...props} />;
  if (name === "Cpu") return <Cpu {...props} />;
  return <Brain {...props} />;
}

function ToolBadge({ name, abbr, color }: { name: string; abbr: string; color: string }) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-black text-xs"
        style={{ backgroundColor: color + "33", border: `1px solid ${color}66`, color }}
      >
        {abbr}
      </div>
      <span className="text-[10px] text-[var(--color-muted)] uppercase font-bold tracking-wider">
        {name}
      </span>
    </div>
  );
}

function SkillCardComponent({ card, index }: { card: SkillCard; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: "easeOut" }}
      className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: card.iconColor + "1a", color: card.iconColor }}
        >
          {getIcon(card.icon)}
        </div>
        <h3 className="font-black text-[var(--color-text)] text-base leading-snug">{card.title}</h3>
      </div>

      {/* Tools */}
      <div className="flex flex-wrap gap-4 mb-6">
        {card.tools.map((t) => (
          <ToolBadge key={t.name} name={t.name} abbr={t.abbr} color={t.color} />
        ))}
      </div>

      {/* Bullets */}
      <ul className="space-y-2.5">
        {card.bullets.map((b) => (
          <li key={b} className="flex items-start gap-2.5 text-sm text-[var(--color-muted)]">
            <span
              className="mt-1.5 h-1.5 w-1.5 rounded-full shrink-0"
              style={{ backgroundColor: card.iconColor }}
            />
            {b}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-24 max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <p className="text-xs font-black tracking-[0.25em] text-[var(--color-cyan)] uppercase mb-3">
          EXPERTISE
        </p>
        <h2
          className="font-black text-[var(--color-text)]"
          style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
        >
          Écosystème Technique
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-5">
        {skillCards.map((card, i) => (
          <SkillCardComponent key={card.id} card={card} index={i} />
        ))}
      </div>
    </section>
  );
}
