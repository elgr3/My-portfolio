"use client";
import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { SectionTitle } from "@/components/SectionTitle";
import { profile } from "@/content/profile";

const SOCIALS = [
  { label: "LinkedIn", href: profile.linkedin, Icon: LinkedinIcon },
  { label: "GitHub", href: profile.github, Icon: GithubIcon },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-bg relative overflow-hidden z-10">
      <div className="absolute inset-0 bg-linear-to-t from-mint/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-block p-4 rounded-full bg-mint/10 mb-8">
            <Mail className="text-mint" size={40} />
          </div>

          <SectionTitle subtitle="Contact" title={profile.contactTitle} centered />

          <p className="text-slate-400 -mt-6 mb-12 max-w-xl mx-auto text-[17px] leading-relaxed">
            {profile.contactSubtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4 mb-20">
            <a
              href={`mailto:${profile.email}`}
              className="px-10 py-5 bg-mint text-bg font-extrabold rounded-lg hover:shadow-[0_0_20px_rgba(45,212,191,0.5)] transition-all flex items-center gap-3 text-[14px] uppercase tracking-widest"
            >
              Me contacter
            </a>
            <a
              href={profile.cvPath}
              download
              className="px-10 py-5 border border-white/10 text-white font-extrabold rounded-lg hover:bg-white/5 transition-all flex items-center gap-3 text-[14px] uppercase tracking-widest"
            >
              <Download size={20} /> Télécharger CV
            </a>
          </div>

          {/* Socials */}
          <div className="flex justify-center gap-12 pt-12 border-t border-white/5">
            {SOCIALS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 group"
              >
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-500 group-hover:text-mint group-hover:border-mint transition-all">
                  <Icon size={22} />
                </div>
                <span className="text-[10px] font-tech font-bold text-slate-500 uppercase tracking-widest">
                  {label}
                </span>
              </a>
            ))}
          </div>

          <div className="mt-8 text-slate-300">
            Email :{" "}
            <a href={`mailto:${profile.email}`} className="text-mint hover:underline">
              {profile.email}
            </a>
          </div>

          <div className="mt-20 text-slate-600 text-[10px] font-tech font-bold uppercase tracking-[0.4em]">
            © {new Date().getFullYear()} Rody Brayan DAMA — Data Scientist
          </div>
        </motion.div>
      </div>
    </section>
  );
}
