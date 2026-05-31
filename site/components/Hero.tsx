"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/content/profile";

function useTypewriter(words: string[]) {
  const [display, setDisplay] = useState("");
  const state = useRef({ wi: 0, ci: 0, deleting: false });

  useEffect(() => {
    function tick() {
      const { wi, ci, deleting } = state.current;
      const word = words[wi];
      if (!deleting) {
        if (ci < word.length) {
          setDisplay(word.slice(0, ci + 1));
          state.current.ci++;
          setTimeout(tick, 80);
        } else {
          setTimeout(() => {
            state.current.deleting = true;
            tick();
          }, 2200);
        }
      } else {
        if (ci > 0) {
          setDisplay(word.slice(0, ci - 1));
          state.current.ci--;
          setTimeout(tick, 40);
        } else {
          state.current.deleting = false;
          state.current.wi = (wi + 1) % words.length;
          tick();
        }
      }
    }
    tick();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return display;
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

export function Hero() {
  const typewriterText = useTypewriter([...profile.typewriterWords]);

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center dot-grid overflow-hidden"
    >
      {/* Radial glow top-left */}
      <div
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-20 w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <div>
          {/* Badge */}
          <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 mb-8">
            <span className="h-2 w-2 rounded-full bg-[var(--color-cyan)] pulse-dot" />
            <span className="text-xs font-bold tracking-widest text-[var(--color-cyan)] uppercase">
              {profile.badge}
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            {...fadeUp(0.1)}
            className="font-black leading-[1.05] mb-6"
            style={{ fontSize: "clamp(2.4rem, 6vw, 4.5rem)" }}
          >
            <span className="block text-[var(--color-text)]">{profile.headline1}</span>
            <span className="block text-[var(--color-text)]">{profile.headline2}</span>
            <span className="block text-[var(--color-cyan)]">
              {typewriterText}
              <span className="cursor-blink text-[var(--color-cyan)]">|</span>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            {...fadeUp(0.2)}
            className="text-[var(--color-muted)] text-base md:text-lg max-w-lg mb-10 leading-relaxed"
          >
            {profile.subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-4 mb-10">
            <a
              href="#portfolio"
              className="px-6 py-3 bg-[var(--color-cyan)] text-[var(--color-bg)] font-bold text-sm rounded-lg hover:brightness-110 transition-all"
            >
              VOIR MES PROJETS →
            </a>
            <a
              href={profile.cvPath}
              download
              className="px-6 py-3 border border-[var(--color-border)] text-[var(--color-text)] font-bold text-sm rounded-lg hover:border-[var(--color-cyan)] hover:text-[var(--color-cyan)] transition-all"
            >
              TÉLÉCHARGER MON CV
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div {...fadeUp(0.4)} className="flex items-center gap-5">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[var(--color-muted)] hover:text-[var(--color-cyan)] transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-[var(--color-muted)] hover:text-[var(--color-cyan)] transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="text-[var(--color-muted)] hover:text-[var(--color-cyan)] transition-colors"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </div>

        {/* RIGHT — Photo + floating badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="relative flex justify-center items-center"
        >
          {/* Photo */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-[var(--color-cyan)]/30 shadow-[0_0_60px_-10px_rgba(0,212,255,0.3)]">
            <Image
              src={profile.photo}
              alt={profile.name}
              fill
              sizes="(max-width: 768px) 256px, 320px"
              className="object-cover"
              priority
            />
          </div>

          {/* Floating badges */}
          {[...profile.floatingBadges].map((badge, i) => {
            const positions = [
              "top-4 -right-4 md:top-8 md:-right-8",
              "bottom-16 -right-8 md:-right-12",
              "bottom-4 -left-4 md:-left-8",
            ];
            return (
              <motion.div
                key={badge}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + i * 0.15 }}
                className={`absolute ${positions[i]} bg-[var(--color-surface)] border border-[var(--color-border)] rounded-full px-3 py-1.5 text-xs font-bold text-[var(--color-cyan)] whitespace-nowrap shadow-lg`}
              >
                {badge}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
