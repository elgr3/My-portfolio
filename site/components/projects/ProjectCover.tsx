"use client";
import { motion } from "framer-motion";
import type { ProjectCategory, TechIcon } from "@/content/projects";

type Theme = {
  gradient: string;
  accent: string;
  pattern: "grid" | "dots" | "waves" | "lines";
  patternColor: string;
};

const THEMES: Record<ProjectCategory, Theme> = {
  "data-engineering": {
    gradient:
      "linear-gradient(135deg, #061a2c 0%, #0a3d62 45%, rgba(0,217,255,0.18) 100%)",
    accent: "#00d9ff",
    pattern: "grid",
    patternColor: "rgba(0, 217, 255, 0.18)",
  },
  bi: {
    gradient:
      "linear-gradient(135deg, #1a0a29 0%, #46195e 50%, rgba(0,217,255,0.18) 100%)",
    accent: "#a78bfa",
    pattern: "waves",
    patternColor: "rgba(167, 139, 250, 0.22)",
  },
  "ai-ml": {
    gradient:
      "linear-gradient(135deg, #0f1a0a 0%, #2f4f10 50%, rgba(199,255,62,0.22) 100%)",
    accent: "#c7ff3e",
    pattern: "dots",
    patternColor: "rgba(199, 255, 62, 0.28)",
  },
  backend: {
    gradient:
      "linear-gradient(135deg, #0a0f14 0%, #1f2937 50%, rgba(199,255,62,0.12) 100%)",
    accent: "#c7ff3e",
    pattern: "lines",
    patternColor: "rgba(232, 232, 240, 0.12)",
  },
};

function PatternSvg({ kind, color }: { kind: Theme["pattern"]; color: string }) {
  const patternId = `proj-pattern-${kind}-${color.replace(/[^a-z0-9]/gi, "")}`;
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      aria-hidden
      style={{ mixBlendMode: "screen" }}
    >
      <defs>
        {kind === "grid" && (
          <pattern id={patternId} width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke={color} strokeWidth="1" />
          </pattern>
        )}
        {kind === "dots" && (
          <pattern id={patternId} width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.2" fill={color} />
          </pattern>
        )}
        {kind === "waves" && (
          <pattern id={patternId} width="48" height="24" patternUnits="userSpaceOnUse">
            <path
              d="M0 12 Q 12 0 24 12 T 48 12"
              fill="none"
              stroke={color}
              strokeWidth="1"
            />
          </pattern>
        )}
        {kind === "lines" && (
          <pattern
            id={patternId}
            width="14"
            height="14"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <line x1="0" y1="0" x2="0" y2="14" stroke={color} strokeWidth="1" />
          </pattern>
        )}
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
}

export function ProjectCover({
  theme = "data-engineering",
  icons = [],
  comingSoon = false,
  slug,
}: {
  theme?: ProjectCategory;
  icons?: TechIcon[];
  comingSoon?: boolean;
  slug?: string;
}) {
  const t = THEMES[theme];
  const visibleIcons = icons.slice(0, 3);

  const iconPositions = [
    { top: "22%", left: "18%", size: 44, rot: -6, delay: 0 },
    { top: "48%", left: "55%", size: 56, rot: 4, delay: 0.1 },
    { top: "26%", left: "72%", size: 38, rot: -10, delay: 0.2 },
  ];

  return (
    <div
      className="relative aspect-[16/10] w-full overflow-hidden"
      style={{ background: t.gradient }}
    >
      <PatternSvg kind={t.pattern} color={t.patternColor} />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(120% 80% at 80% 20%, ${t.accent}22, transparent 55%), radial-gradient(80% 60% at 10% 90%, rgba(0,0,0,0.45), transparent 65%)`,
        }}
      />

      <div className="absolute inset-0">
        {visibleIcons.map((icon, i) => {
          const pos = iconPositions[i];
          if (!pos) return null;
          return (
            <motion.div
              key={icon}
              className="absolute"
              style={{
                top: pos.top,
                left: pos.left,
                width: pos.size,
                height: pos.size,
                color: t.accent,
                transform: `translate(-50%, -50%) rotate(${pos.rot}deg)`,
                filter: `drop-shadow(0 4px 16px ${t.accent}55)`,
              }}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 0.85, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + pos.delay, duration: 0.5 }}
            >
              <img
                src={`/tech/${icon}.svg`}
                alt=""
                aria-hidden
                className="h-full w-full transition-all duration-500 group-hover:scale-110"
              />
            </motion.div>
          );
        })}
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-surface)]/95 via-[var(--color-surface)]/10 to-transparent"
      />

      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-5 py-3">
        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
          <span
            className="inline-block h-1.5 w-1.5 rounded-full"
            style={{ background: t.accent, boxShadow: `0 0 8px ${t.accent}` }}
          />
          {theme.replace("-", " · ")}
        </div>
        {slug && (
          <span className="font-mono text-[10px] text-[var(--color-text-muted)]/70">
            ~/{slug}
          </span>
        )}
      </div>

      {comingSoon && (
        <div className="absolute right-4 top-4 rounded-full border border-[var(--color-border)] bg-[var(--color-bg)]/80 px-2.5 py-1 font-mono text-[10px] text-[var(--color-text-muted)] backdrop-blur">
          🚧 WIP
        </div>
      )}

      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-px left-0 right-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, ${t.accent}, transparent)`,
        }}
      />
    </div>
  );
}
