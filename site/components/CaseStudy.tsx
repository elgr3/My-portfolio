"use client";
import { motion } from "framer-motion";
import { Briefcase, Building2, Clock, Layers, MapPin, Target } from "lucide-react";
import { caseStudy } from "@/content/caseStudy";

const ICONS = { Briefcase, Building2, Clock, Layers, MapPin, Target };

export function CaseStudy() {
  return (
    <section id="case-study" className="py-32 relative z-10 overflow-hidden">
      {/* Halos qui dérivent */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-80 h-80 bg-linear-to-r from-mint/20 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [100, 0, 100], y: [50, 0, 50] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-40 -right-40 w-80 h-80 bg-linear-to-l from-blue/20 to-transparent rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-xs font-tech font-bold text-mint uppercase tracking-widest inline-block px-4 py-2 bg-white/5 border border-mint/30 rounded-full mb-6">
              ✨ {caseStudy.eyebrow}
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-tech font-black text-white mt-6 mb-6">
              <span className="block">{caseStudy.titleLine1}</span>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-mint via-blue to-purple-500 glow-text-mint">
                {caseStudy.titleLine2}
              </span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto mt-4">{caseStudy.subtitle}</p>
          </motion.div>

          {/* Contexte */}
          <div className="grid lg:grid-cols-3 gap-6 mb-12">
            {caseStudy.context.map((item, i) => {
              const Icon = ICONS[item.icon];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-linear-to-r from-mint/10 to-blue/10 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
                  <div className="relative p-6 bg-card/50 backdrop-blur-sm border border-white/10 group-hover:border-mint/50 rounded-2xl transition-all duration-500">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="p-3 bg-linear-to-br from-mint/20 to-blue/20 rounded-xl group-hover:from-mint/40 group-hover:to-blue/40 transition-all">
                        <Icon className="text-mint w-5 h-5" />
                      </div>
                      <h4 className="text-white font-tech text-sm font-bold uppercase tracking-tight">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-slate-300 font-tech text-sm ml-14">{item.content}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="group relative mb-12"
          >
            <div className="absolute inset-0 bg-linear-to-r from-mint/20 via-blue/20 to-purple-500/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700" />
            <div className="relative p-6 sm:p-10 bg-linear-to-br from-card via-[#0f1629] to-card border border-white/10 group-hover:border-mint/30 rounded-3xl transition-all duration-500 overflow-hidden">
              <div className="relative flex flex-col sm:flex-row items-start gap-6">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="p-4 bg-linear-to-br from-mint/30 to-blue/20 rounded-2xl shrink-0 glow-border"
                >
                  <Target className="text-mint w-7 h-7" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-tech font-bold text-white mb-4">🎯 Mission</h3>
                  <p className="text-slate-300 leading-relaxed text-lg">
                    {caseStudy.missionBefore}
                    <span className="text-mint font-bold">{caseStudy.missionHighlight}</span>
                    {caseStudy.missionAfter}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Chiffres */}
          <h3 className="text-2xl font-tech font-bold text-white mb-8 text-center">
            🚀 {caseStudy.statsTitle}
          </h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {caseStudy.stats.map((stat, i) => {
              const Icon = ICONS[stat.icon];
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  className="group relative h-full"
                >
                  <div
                    className={`absolute inset-0 bg-linear-to-r ${stat.gradient} opacity-0 group-hover:opacity-20 blur-2xl rounded-2xl transition-all duration-700`}
                  />
                  <div className="relative h-full p-8 bg-card/60 backdrop-blur-sm border border-white/10 group-hover:border-white/30 rounded-2xl transition-all duration-500 flex flex-col items-center justify-center text-center overflow-hidden">
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className={`relative z-10 p-4 rounded-2xl bg-linear-to-br ${stat.gradient} mb-6`}
                    >
                      <Icon className="w-8 h-8 text-white opacity-90" />
                    </motion.div>
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.2 + 0.3, type: "spring", stiffness: 100 }}
                      className={`text-5xl font-tech font-black mb-3 text-transparent bg-clip-text bg-linear-to-r ${stat.gradient}`}
                    >
                      {stat.value}
                    </motion.div>
                    <h4 className="text-white font-tech font-bold uppercase tracking-tight text-sm mb-1">
                      {stat.label}
                    </h4>
                    <p className="text-xs text-slate-400 font-tech">{stat.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
