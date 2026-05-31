"use client";
import { motion } from "framer-motion";
import { Mail, FileText } from "lucide-react";

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

export function Contact() {
  return (
    <section id="contact" className="py-24 max-w-6xl mx-auto px-6">
      {/* Top divider */}
      <div className="w-full h-px bg-[var(--color-border)] mb-24" />

      {/* Centered content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center max-w-xl mx-auto"
      >
        {/* Email icon in circle */}
        <div className="w-14 h-14 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] flex items-center justify-center mb-8 text-[var(--color-cyan)]">
          <Mail size={24} />
        </div>

        <p className="text-xs font-black tracking-[0.25em] text-[var(--color-cyan)] uppercase mb-3">
          CONTACT
        </p>

        <h2
          className="font-black text-[var(--color-text)] mb-4"
          style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
        >
          {profile.contactTitle}
        </h2>

        <p className="text-[var(--color-muted)] mb-10 leading-relaxed">
          {profile.contactSubtitle}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="px-7 py-3 bg-[var(--color-cyan)] text-[var(--color-bg)] font-bold text-sm rounded-lg hover:brightness-110 transition-all"
          >
            ME CONTACTER
          </a>
          <a
            href={profile.cvPath}
            download
            className="flex items-center gap-2 px-7 py-3 border border-[var(--color-border)] text-[var(--color-text)] font-bold text-sm rounded-lg hover:border-[var(--color-cyan)] hover:text-[var(--color-cyan)] transition-all"
          >
            <FileText size={14} />
            TÉLÉCHARGER CV
          </a>
        </div>
      </motion.div>

      {/* Footer */}
      <div className="mt-24 border-t border-[var(--color-border)] pt-10 flex flex-col items-center gap-6">
        {/* Social icons */}
        <div className="flex items-center gap-6">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 text-[var(--color-muted)] hover:text-[var(--color-cyan)] transition-colors"
          >
            <LinkedinIcon size={20} />
            <span className="text-[10px] tracking-widest font-bold">LINKEDIN</span>
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 text-[var(--color-muted)] hover:text-[var(--color-cyan)] transition-colors"
          >
            <GithubIcon size={20} />
            <span className="text-[10px] tracking-widest font-bold">GITHUB</span>
          </a>
        </div>

        <p className="text-xs text-[var(--color-muted)] text-center">
          Email :{" "}
          <a href={`mailto:${profile.email}`} className="text-[var(--color-cyan)] hover:underline">
            {profile.email}
          </a>
        </p>

        <p className="text-[10px] text-[var(--color-muted)]/50 tracking-widest uppercase">
          © {new Date().getFullYear()} Rody Brayan DAMA — Data Scientist
        </p>
      </div>
    </section>
  );
}
