import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/GithubIcon";
import { profile } from "@/content/profile";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] mt-32">
      <div className="mx-auto max-w-6xl px-6 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="font-mono text-xs text-[var(--color-text-muted)] flex items-center gap-2">
          <span className="inline-flex h-2 w-2 rounded-full bg-[var(--color-accent-2)] animate-pulse" />
          system online · v1.0
        </div>

        <div className="flex items-center gap-4">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition"
          >
            <Mail size={18} />
          </a>
        </div>

        <div className="font-mono text-xs text-[var(--color-text-muted)]">
          © {new Date().getFullYear()} {profile.name}
        </div>
      </div>
    </footer>
  );
}
