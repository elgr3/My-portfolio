"use client";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "@/content/education";

function formatYear(dateStr: string) {
  return dateStr.split("-")[0];
}

const COUNTRY: Record<string, string> = {
  "EFREI — Grande école du numérique": "FRANCE",
  "ESIC — École Supérieure d'Informatique et du Commerce": "FRANCE",
  "ISTY — Institut des Sciences et Techniques des Yvelines": "FRANCE",
  "ESIMAC — École Sup. d'Ingénieur et de Management d'Afrique Centrale": "CAMEROUN",
};

export function Education() {
  return (
    <section id="education" className="py-24 max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-14"
      >
        <p className="text-xs font-black tracking-[0.25em] text-[var(--color-cyan)] uppercase mb-3">
          ÉDUCATION
        </p>
        <h2
          className="font-black text-[var(--color-text)]"
          style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
        >
          Mon parcours académique
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {education.map((edu, i) => (
          <motion.div
            key={edu.school}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            className="bg-white rounded-2xl p-6 flex flex-col items-center text-center gap-4 shadow-sm hover:-translate-y-1 transition-transform duration-200"
          >
            <div className="w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center">
              <GraduationCap size={28} className="text-gray-500" />
            </div>
            <div>
              <p className="font-bold text-sm text-gray-900 leading-snug mb-1">{edu.school}</p>
              <p className="text-xs text-[var(--color-cyan)] font-bold tracking-wider uppercase">
                {COUNTRY[edu.school] ?? "FRANCE"}
              </p>
              <p className="text-xs text-gray-400 mt-1">
                {formatYear(edu.start)} – {formatYear(edu.end)}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
