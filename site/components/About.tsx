"use client";
import { motion } from "framer-motion";
import { profile } from "@/content/profile";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

export function About() {
  return (
    <section id="about" className="py-24 max-w-6xl mx-auto px-6">
      {/* Section header */}
      <motion.div {...fadeUp(0)} className="mb-14">
        <p className="text-xs font-black tracking-[0.25em] text-[var(--color-cyan)] uppercase mb-3">
          À PROPOS
        </p>
        <h2 className="font-black text-[var(--color-text)] leading-tight"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
          {profile.aboutTitle}
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-5 gap-12 items-start">
        {/* LEFT — text + bullets + mini-cards */}
        <div className="lg:col-span-3 space-y-8">
          <motion.p {...fadeUp(0.1)} className="text-[var(--color-muted)] leading-relaxed text-base">
            {profile.aboutText}
          </motion.p>

          <div className="space-y-4">
            {[...profile.aboutBullets].map((b, i) => (
              <motion.div key={b.title} {...fadeUp(0.15 + i * 0.08)} className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-[var(--color-cyan)] shrink-0" />
                <div>
                  <span className="font-bold text-[var(--color-text)]">{b.title}</span>
                  <span className="text-[var(--color-muted)]"> — {b.desc}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mini-cards */}
          <motion.div {...fadeUp(0.5)} className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: "MÉTHODOLOGIE",
                items: ["CRISP-DM", "Feature engineering rigoureux", "Validation croisée", "Explainability SHAP"],
              },
              {
                title: "LIVRABLES",
                items: ["Modèles calibrés & documentés", "Pipelines reproductibles", "Dashboards analytiques", "Rapports techniques"],
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-5"
              >
                <p className="text-xs font-black tracking-widest text-[var(--color-cyan)] mb-3">{card.title}</p>
                <ul className="space-y-1.5">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-[var(--color-muted)]">
                      <span className="h-1 w-1 rounded-full bg-[var(--color-cyan)] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — avatar card */}
        <motion.div
          {...fadeUp(0.2)}
          className="lg:col-span-2 flex justify-center"
        >
          <div className="w-56 h-56 md:w-64 md:h-64 bg-white rounded-2xl flex items-center justify-center shadow-xl">
            <span
              className="font-black text-[#111820] select-none"
              style={{ fontSize: "clamp(4rem, 12vw, 6rem)" }}
            >
              {profile.initials}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
