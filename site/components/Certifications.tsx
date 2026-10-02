"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import { cn } from "@/lib/cn";
import { asset } from "@/lib/asset";
import { certifications, LEVEL_BADGE } from "@/content/certifications";

export function Certifications() {
  return (
    <section id="certifications" className="py-24 relative z-10 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-linear-to-r from-mint/10 via-blue/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="container mx-auto px-6 relative z-10">
        <SectionTitle
          subtitle="Certifications"
          title={`${certifications.length} certifications Microsoft`}
          centered
        />

        <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, i) => {
            const associate = cert.level === "Associate";
            return (
              <motion.a
                key={cert.code}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="group relative w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                <div
                  className={cn(
                    "absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500",
                    associate ? "bg-blue/20" : "bg-mint/20"
                  )}
                />
                <div className="relative h-full p-8 bg-card/80 backdrop-blur-sm border border-white/10 group-hover:border-mint/40 rounded-3xl transition-colors duration-500 flex flex-col items-center text-center">
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 4 + i * 0.3, repeat: Infinity, ease: "easeInOut" }}
                    className="relative w-32 h-32 mb-6"
                  >
                    <div
                      className={cn(
                        "absolute inset-2 rounded-full blur-xl opacity-40",
                        associate ? "bg-blue" : "bg-mint"
                      )}
                    />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={asset(LEVEL_BADGE[cert.level])}
                      alt={`Badge Microsoft Certified ${cert.level}`}
                      className="relative w-full h-full object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform duration-500"
                    />
                  </motion.div>

                  <span
                    className={cn(
                      "text-[10px] font-tech font-bold uppercase tracking-widest px-3 py-1 rounded-full border mb-4",
                      associate
                        ? "text-blue border-blue/30 bg-blue/10"
                        : "text-mint border-mint/30 bg-mint/10"
                    )}
                  >
                    {cert.level}
                  </span>

                  <p className="text-4xl font-tech font-black text-transparent bg-clip-text bg-linear-to-r from-mint to-blue mb-2">
                    {cert.code}
                  </p>
                  <h3 className="text-white font-tech font-bold text-base leading-snug mb-6">
                    Microsoft Certified : {cert.name}
                  </h3>

                  <span className="mt-auto inline-flex items-center gap-2 text-[11px] font-tech font-bold uppercase tracking-widest text-slate-500 group-hover:text-mint transition-colors">
                    Vérifier <ExternalLink size={13} />
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
