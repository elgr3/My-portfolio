"use client";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
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

const cardVariants = {
  initial: { y: 0, scale: 1 },
  hover: { y: -15, scale: 1.03, transition: { type: "spring" as const, stiffness: 300, damping: 20 } },
};

const iconVariants = {
  initial: { scale: 1, rotate: 0 },
  hover: {
    scale: 1.15,
    rotate: [0, -5, 5, 0],
    transition: {
      rotate: { duration: 0.6, ease: "easeInOut" as const },
      scale: { type: "spring" as const, stiffness: 400, damping: 12 },
    },
  },
};

export function Education() {
  return (
    <section id="education" className="py-24 relative z-10 bg-white/[0.01]">
      <div className="container mx-auto px-6 text-center">
        <SectionTitle subtitle="Éducation" title="Mon parcours académique" centered />

        <div className="flex flex-wrap justify-center gap-10">
          {education.map((edu) => {
            const [short, ...rest] = edu.school.split(" — ");
            return (
              <motion.div
                key={edu.school}
                initial="initial"
                whileHover="hover"
                variants={cardVariants}
                className="bg-white p-6 rounded-[40px] w-64 aspect-square flex flex-col items-center justify-center shadow-2xl relative overflow-hidden cursor-default"
              >
                <motion.div
                  variants={iconVariants}
                  className="h-20 w-20 rounded-3xl bg-slate-100 flex items-center justify-center mb-4"
                >
                  <GraduationCap size={40} className="text-bg" />
                </motion.div>
                <h4 className="text-bg font-tech font-extrabold text-lg uppercase leading-tight">
                  {short}
                </h4>
                <p className="text-slate-500 text-[10px] font-tech font-semibold leading-snug mt-1 px-2">
                  {rest.join(" — ")}
                </p>
                <p className="text-slate-400 text-[9px] font-tech font-bold uppercase tracking-widest mt-3">
                  {COUNTRY[edu.school] ?? "FRANCE"} · {formatYear(edu.start)} – {formatYear(edu.end)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
