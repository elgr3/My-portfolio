"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

function GithubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

function LinkedinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}
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
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
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
              <LinkedinIcon size={20} />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-[var(--color-muted)] hover:text-[var(--color-cyan)] transition-colors"
            >
              <GithubIcon size={20} />
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
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" as const }}
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
