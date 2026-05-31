"use client";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, FileText } from "lucide-react";
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
            <Linkedin size={20} />
            <span className="text-[10px] tracking-widest font-bold">LINKEDIN</span>
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 text-[var(--color-muted)] hover:text-[var(--color-cyan)] transition-colors"
          >
            <Github size={20} />
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
