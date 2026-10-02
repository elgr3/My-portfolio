"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/SectionTitle";
import { profile } from "@/content/profile";

const SHOWCASE = [
  { src: "/logos/python.svg", alt: "Python" },
  { src: "/logos/azure.svg", alt: "Microsoft Azure" },
  { src: "/logos/apachespark.svg", alt: "Apache Spark" },
  { src: "/logos/scikitlearn.svg", alt: "scikit-learn" },
];

const CARDS = [
  {
    title: "Méthodologie",
    items: ["CRISP-DM", "Feature engineering rigoureux", "Validation croisée", "Explainability SHAP"],
  },
  {
    title: "Livrables",
    items: ["Modèles calibrés & documentés", "Pipelines reproductibles", "Dashboards analytiques", "Rapports techniques"],
  },
];

function LogoShowcase() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setActive((a) => (a + 1) % SHOWCASE.length), 3800);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.div
      animate={{ y: [0, -12, 0], x: [0, 8, 0], scale: [0.98, 1, 0.98] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="relative w-full max-w-[520px] h-[420px] rounded-3xl overflow-hidden border border-white/5 bg-linear-to-br from-black/60 to-transparent shadow-2xl"
    >
      {SHOWCASE.map((logo, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <motion.img
          key={logo.src}
          src={logo.src}
          alt={logo.alt}
          initial={false}
          animate={{ opacity: i === active ? 1 : 0, scale: i === active ? 1 : 0.96 }}
          transition={{ duration: 0.9 }}
          className="absolute inset-0 w-full h-full object-contain p-24 pointer-events-none"
        />
      ))}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {SHOWCASE.map((logo, i) => (
          <button
            key={logo.src}
            onClick={() => setActive(i)}
            aria-label={`Afficher ${logo.alt}`}
            className={`w-2.5 h-2.5 rounded-full ${i === active ? "bg-mint" : "bg-white/20"}`}
          />
        ))}
      </div>
    </motion.div>
  );
}

export function About() {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT — text + bullets + mini-cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle subtitle="À propos" title={profile.aboutTitle} />

            <div className="space-y-6 text-slate-400 leading-relaxed text-[17px] max-w-xl">
              <p>{profile.aboutText}</p>

              <ul className="list-disc pl-6 space-y-2 marker:text-mint">
                {[...profile.aboutBullets].map((b) => (
                  <li key={b.title}>
                    <strong className="text-white">{b.title}</strong> — {b.desc}
                  </li>
                ))}
              </ul>

              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {CARDS.map((card) => (
                  <div key={card.title} className="p-6 bg-card border border-white/5 rounded-2xl">
                    <h4 className="text-white font-tech text-xs font-bold uppercase tracking-tight mb-2">
                      {card.title}
                    </h4>
                    <p className="text-[12px] text-slate-400">{card.items.join(" · ")}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT — carrousel des outils phares */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="hidden lg:flex justify-center"
          >
            <LogoShowcase />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
