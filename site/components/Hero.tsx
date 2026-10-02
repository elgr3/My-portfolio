"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Database, Download, Mail, Zap } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { profile } from "@/content/profile";

function useTypewriter(words: string[]) {
  const [display, setDisplay] = useState("");
  const state = useRef({ wi: 0, ci: 0, deleting: false });

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    function tick() {
      const { wi, ci, deleting } = state.current;
      const word = words[wi];
      if (!deleting) {
        if (ci < word.length) {
          setDisplay(word.slice(0, ci + 1));
          state.current.ci++;
          timer = setTimeout(tick, 100);
        } else {
          timer = setTimeout(() => {
            state.current.deleting = true;
            tick();
          }, 2000);
        }
      } else {
        if (ci > 0) {
          setDisplay(word.slice(0, ci - 1));
          state.current.ci--;
          timer = setTimeout(tick, 50);
        } else {
          state.current.deleting = false;
          state.current.wi = (wi + 1) % words.length;
          tick();
        }
      }
    }
    tick();
    return () => clearTimeout(timer);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return display;
}

// Flottement du texte : amplitude faible et cycle lent, le titre et le
// paragraphe bougent presque ensemble pour que l'œil suive sans effort.
const textFloat = (amplitude: number, delay = 0) => ({
  animate: { y: [0, -amplitude, 0] },
  transition: { duration: 7, repeat: Infinity, ease: "easeInOut" as const, delay },
});

const BADGE_ICONS = [BarChart3, Zap, Database];
const BADGES = [
  {
    position: "-top-2 right-0 lg:-top-4 lg:-right-4",
    style: "bg-bg/95 border-mint/30",
    icon: "text-mint",
    animate: { y: [0, -20, 0], x: [0, 15, 0] },
    transition: { duration: 4, delay: 0 },
  },
  {
    position: "bottom-16 left-0 lg:bottom-20 lg:-left-8",
    style: "bg-linear-to-r from-blue/20 to-purple-500/20 border-blue/30",
    icon: "text-blue",
    animate: { y: [0, 20, 0], x: [0, -15, 0] },
    transition: { duration: 5, delay: 0.5 },
  },
  {
    position: "-bottom-2 right-4 lg:-bottom-4 lg:right-8",
    style: "bg-linear-to-r from-purple-500/20 to-pink-500/20 border-purple-400/30",
    icon: "text-purple-400",
    animate: { y: [0, -15, 0], x: [0, 0, 0] },
    transition: { duration: 4.5, delay: 1 },
  },
];

export function Hero() {
  const typewriterText = useTypewriter([...profile.typewriterWords]);

  return (
    <section
      id="top"
      className="relative z-10 min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-mint/10 border border-mint/20 text-mint text-[11px] font-bold mb-8 uppercase tracking-widest">
            <Zap size={14} className="animate-pulse shrink-0" />
            {profile.badge}
          </div>

          {/* H1 */}
          <h1 className="text-4xl lg:text-7xl font-tech font-extrabold text-white mb-6 leading-[1.1]">
            <motion.span {...textFloat(4)} className="inline-block">
              {profile.headline1} {profile.headline2}
            </motion.span>
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-mint to-blue glow-text-mint inline-block min-h-[1.2em]">
              {typewriterText}
              <span className="cursor-blink text-white font-normal ml-1">|</span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-[17px] text-slate-400 mb-10 max-w-2xl leading-relaxed">
            <motion.span {...textFloat(3, 0.4)} className="inline-block">
              {profile.subtitle}
            </motion.span>
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href="#portfolio"
              className="px-8 py-4 bg-mint text-bg font-bold rounded-lg hover:shadow-[0_0_20px_rgba(45,212,191,0.5)] transition-all flex items-center gap-2 text-[14px] uppercase tracking-wider"
            >
              Voir mes projets <ArrowRight size={18} />
            </a>
            <a
              href={profile.cvPath}
              download
              className="px-8 py-4 border border-white/10 text-white font-bold rounded-lg hover:bg-white/5 transition-all flex items-center gap-2 text-[14px] uppercase tracking-wider"
            >
              <Download size={18} /> Télécharger mon CV
            </a>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-6 text-slate-500">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-mint transition-colors"
            >
              <LinkedinIcon size={24} />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-mint transition-colors"
            >
              <GithubIcon size={24} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="hover:text-mint transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </motion.div>

        {/* RIGHT — Photo + floating badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative group flex justify-center items-center h-[340px] lg:h-[600px] max-w-[440px] mx-auto">
            <div className="absolute -inset-4 bg-linear-to-r from-mint to-blue opacity-10 blur-3xl group-hover:opacity-20 transition-opacity" />

            <div className="relative z-10 w-64 h-64 lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden border-8 border-white/5 shadow-2xl glow-border">
              <Image
                src={profile.photo}
                alt={profile.name}
                fill
                sizes="(max-width: 1024px) 256px, 400px"
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                style={{ objectPosition: "center 25%" }}
                priority
              />
            </div>

            {[...profile.floatingBadges].map((badge, i) => {
              const b = BADGES[i];
              const Icon = BADGE_ICONS[i];
              return (
                <motion.div
                  key={badge}
                  animate={b.animate}
                  transition={{ ...b.transition, repeat: Infinity, ease: "easeInOut" }}
                  className={`absolute ${b.position} ${b.style} border p-3 lg:p-4 rounded-2xl backdrop-blur-md shadow-2xl z-20 whitespace-nowrap`}
                >
                  <Icon className={`${b.icon} mb-1 inline-block mr-2`} size={20} />
                  <span className="text-[10px] font-tech font-bold text-white uppercase tracking-tighter">
                    {badge}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
