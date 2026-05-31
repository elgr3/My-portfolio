# Portfolio Redesign — Data Science Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remplacer complètement le portfolio existant par un nouveau design pixel-perfect inspiré du site de référence, repositionné Data Science / ML, en français uniquement, avec export statique pour GitHub Pages.

**Architecture:** Single-page app Next.js (App Router, `output: 'export'`) avec 7 sections (Nav, Hero, À Propos, Éducation, Portfolio, Compétences, Contact). Suppression totale de next-intl. Tous les composants sont des Client Components avec Framer Motion pour les animations scroll. Les données de contenu sont dans `site/content/`.

**Tech Stack:** Next.js (App Router), TypeScript, Tailwind CSS v4 (déjà configuré), Framer Motion, Lucide React, `next/font/google` (Inter + JetBrains Mono)

**Working directory:** `C:\Projets\Portfolio\site\` — toutes les commandes s'exécutent depuis ce dossier.

---

## Fichiers impactés

| Action | Chemin |
|--------|--------|
| Supprimer | `app/[locale]/` (tout le dossier) |
| Supprimer | `i18n/` (tout le dossier) |
| Supprimer | `app/api/` (tout le dossier) |
| Supprimer | `app/sitemap.ts` |
| Supprimer | `components/` (tout — sera recréé) |
| Supprimer | `content/certifications.ts` `content/case-studies.ts` |
| Modifier | `next.config.ts` |
| Modifier | `app/layout.tsx` |
| Modifier | `app/globals.css` |
| Modifier | `content/profile.ts` |
| Modifier | `content/projects.ts` |
| Modifier | `content/skills.ts` |
| Conserver | `content/education.ts` (déjà correct) |
| Conserver | `public/profile/rody.jpg` |
| Conserver | `public/cv/CV-Rody-Brayan-DAMA.pdf` |
| Créer | `app/page.tsx` |
| Créer | `components/Nav.tsx` |
| Créer | `components/Hero.tsx` |
| Créer | `components/About.tsx` |
| Créer | `components/Education.tsx` |
| Créer | `components/Portfolio.tsx` |
| Créer | `components/Skills.tsx` |
| Créer | `components/Contact.tsx` |
| Créer | `components/ScrollToTop.tsx` |
| Créer | `.github/workflows/deploy.yml` |

---

## Task 1: Cleanup — Supprimer l'ancienne structure

**Files:**
- Supprimer : `app/[locale]/`, `i18n/`, `app/api/`, `app/sitemap.ts`
- Supprimer : `components/` (tout le dossier)
- Supprimer : `content/certifications.ts`, `content/case-studies.ts`

- [ ] **Step 1: Supprimer les dossiers et fichiers obsolètes**

Depuis `C:\Projets\Portfolio\site\` :

```bash
rm -rf app/\[locale\] i18n app/api app/sitemap.ts components content/certifications.ts content/case-studies.ts lib/resend.ts lib/validation.ts lib/format.ts
```

Sur Windows PowerShell :
```powershell
Remove-Item -Recurse -Force "app/[locale]", "i18n", "app/api", "components", "lib"
Remove-Item -Force "app/sitemap.ts", "content/certifications.ts", "content/case-studies.ts"
```

- [ ] **Step 2: Vérifier que les fichiers essentiels sont encore présents**

```bash
ls app/          # doit montrer : globals.css, layout.tsx
ls content/      # doit montrer : education.ts, experiences.ts, profile.ts, projects.ts, skills.ts
ls public/       # doit montrer : cv/, profile/
```

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "chore: remove old i18n structure and components"
```

---

## Task 2: Config — next.config.ts + lib/cn.ts

**Files:**
- Modifier : `next.config.ts`
- Créer : `lib/cn.ts`

- [ ] **Step 1: Réécrire next.config.ts**

Remplacer tout le contenu de `next.config.ts` :

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  // basePath: "/portfolio",  // Décommenter si déployé sur username.github.io/portfolio
};

export default nextConfig;
```

- [ ] **Step 2: Créer lib/cn.ts**

```ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

- [ ] **Step 3: Vérifier que clsx et tailwind-merge sont installés**

```bash
node -e "require('clsx'); require('tailwind-merge'); console.log('OK')"
```

Si erreur :
```bash
npm install clsx tailwind-merge
```

- [ ] **Step 4: Commit**

```bash
git add next.config.ts lib/cn.ts
git commit -m "feat(config): static export + cn utility"
```

---

## Task 3: Styles de base — globals.css

**Files:**
- Modifier : `app/globals.css`

- [ ] **Step 1: Réécrire globals.css avec les nouvelles couleurs et animations**

```css
@import "tailwindcss";

@theme {
  --color-bg:      #080c10;
  --color-bg2:     #0d1117;
  --color-surface: #111820;
  --color-border:  #1e2d3d;
  --color-cyan:    #00d4ff;
  --color-purple:  #7c3aed;
  --color-text:    #e2e8f0;
  --color-muted:   #64748b;

  --font-sans: var(--font-inter), system-ui, sans-serif;
  --font-mono: var(--font-jetbrains-mono), "Courier New", monospace;
}

* {
  box-sizing: border-box;
  border-color: var(--color-border);
}

html {
  scroll-behavior: smooth;
  background: var(--color-bg);
  color: var(--color-text);
}

body {
  font-family: var(--font-sans);
  background: var(--color-bg);
  color: var(--color-text);
  min-height: 100vh;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}

::selection {
  background: var(--color-cyan);
  color: var(--color-bg);
}

/* Dot grid pattern pour le Hero */
.dot-grid {
  background-image: radial-gradient(rgba(0, 212, 255, 0.12) 1px, transparent 1px);
  background-size: 28px 28px;
}

/* Pulse pour badge disponible */
@keyframes pulse-dot {
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: 0.5; transform: scale(1.4); }
}
.pulse-dot {
  animation: pulse-dot 1.6s ease-in-out infinite;
}

/* Cursor clignotant typewriter */
@keyframes blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
}
.cursor-blink {
  animation: blink 0.8s step-end infinite;
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add app/globals.css
git commit -m "feat(styles): new design tokens and base styles"
```

---

## Task 4: Root layout — app/layout.tsx

**Files:**
- Modifier : `app/layout.tsx`

- [ ] **Step 1: Réécrire app/layout.tsx**

```tsx
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rody Brayan DAMA — Data Scientist",
  description:
    "Alternant Data Engineer chez BNP Paribas Cardif, passionné par le Machine Learning appliqué à la finance et au banking.",
  authors: [{ name: "Rody Brayan DAMA" }],
  keywords: [
    "Data Science",
    "Machine Learning",
    "Data Engineer",
    "Python",
    "XGBoost",
    "Finance",
    "BNP Paribas",
    "Portfolio",
  ],
  openGraph: {
    title: "Rody Brayan DAMA — Data Scientist",
    description:
      "Machine Learning · Finance · Data Engineering. Transformer la donnée en valeur.",
    type: "website",
    locale: "fr_FR",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add app/layout.tsx
git commit -m "feat(layout): Inter font + updated metadata DS positioning"
```

---

## Task 5: Données de contenu — profile.ts + projects.ts + skills.ts

**Files:**
- Modifier : `content/profile.ts`
- Modifier : `content/projects.ts`
- Modifier : `content/skills.ts`

- [ ] **Step 1: Réécrire content/profile.ts**

```ts
export const profile = {
  name: "Rody Brayan DAMA",
  initials: "RD",
  tagline: "Data Science with RODY",
  badge: "✦ ALTERNANT DATA SCIENTIST · BNP PARIBAS CARDIF",
  headline1: "Transformer la donnée",
  headline2: "en valeur",
  typewriterWords: ["Data Scientist", "ML Engineer", "Finance Expert"],
  subtitle:
    "Alternant Data Engineer chez BNP Paribas Cardif, passionné par le Machine Learning appliqué à la finance et au banking.",
  aboutTitle: "De l'Ingénierie de données à la Data Science",
  aboutText:
    "Je suis Rody Brayan DAMA, Data Engineer en alternance chez BNP Paribas Cardif. Mon approche combine ingénierie de données robuste et modélisation prédictive — credit scoring, détection de fraude, churn bancaire. Je construis des pipelines fiables et des modèles explicables, pensés pour la production.",
  aboutBullets: [
    {
      title: "Machine Learning & Modélisation",
      desc: "Credit scoring, détection de fraude, churn — modèles XGBoost calibrés pour la finance.",
    },
    {
      title: "Feature Engineering",
      desc: "Traitement de données financières à grande échelle avec Pandas, NumPy, SQL.",
    },
    {
      title: "Interprétabilité",
      desc: "SHAP, explicabilité des modèles pour le banking et la conformité réglementaire.",
    },
    {
      title: "MLOps",
      desc: "Déploiement FastAPI, monitoring de dérive avec Evidently, CI/CD GitHub Actions.",
    },
  ],
  floatingBadges: ["XGBoost EXPERT", "FINANCE", "DATA DRIVEN"],
  contactTitle: "Échangeons sur la Data Science",
  contactSubtitle:
    "Alternant Data Engineer chez BNP Paribas · Disponible pour échanger sur le ML et la finance.",
  location: "Paris, Île-de-France",
  email: "damabrayan1@gmail.com",
  linkedin: "https://www.linkedin.com/in/rody-brayan-dama-somo",
  github: "https://github.com/elgr3",
  cvPath: "/cv/CV-Rody-Brayan-DAMA.pdf",
  photo: "/profile/rody.jpg",
} as const;
```

- [ ] **Step 2: Réécrire content/projects.ts**

```ts
export type ProjectFilter = "all" | "ml" | "nlp" | "mlops" | "genai" | "finance";

export type Metric = { label: string; value: string };

export type Project = {
  id: string;
  category: string;
  categoryColor: string;
  title: string;
  description: string;
  metrics: Metric[];
  filters: ProjectFilter[];
  status: "active" | "coming-soon";
  githubUrl?: string;
  detailsUrl?: string;
};

export const projects: Project[] = [
  {
    id: "credit-scoring",
    category: "MACHINE LEARNING",
    categoryColor: "var(--color-cyan)",
    title: "Credit Scoring",
    description:
      "Modèle de scoring crédit sur 150 000 clients bancaires (Give Me Some Credit, Kaggle). XGBoost, SHAP, gestion du déséquilibre de classes.",
    metrics: [
      { label: "AUC-ROC", value: "0.87" },
      { label: "Gini", value: "0.74" },
    ],
    filters: ["ml", "finance"],
    status: "active",
    githubUrl: "https://github.com/elgr3",
  },
  {
    id: "fraud-detection",
    category: "MACHINE LEARNING",
    categoryColor: "var(--color-cyan)",
    title: "Fraud Detection",
    description:
      "Détection de transactions frauduleuses sur données très déséquilibrées (<1% de fraudes). Isolation Forest, SMOTE, threshold optimization.",
    metrics: [
      { label: "Precision", value: "—" },
      { label: "Recall", value: "—" },
    ],
    filters: ["ml", "finance"],
    status: "coming-soon",
  },
  {
    id: "churn-prediction",
    category: "MACHINE LEARNING",
    categoryColor: "var(--color-cyan)",
    title: "Churn Prediction",
    description:
      "Prédiction de l'attrition clients bancaires avec recommandations de rétention actionnables. Pipeline complet de feature engineering.",
    metrics: [
      { label: "F1-Score", value: "—" },
      { label: "Accuracy", value: "—" },
    ],
    filters: ["ml", "finance"],
    status: "coming-soon",
  },
  {
    id: "sentiment-finance",
    category: "NLP",
    categoryColor: "#a78bfa",
    title: "Sentiment Analysis Finance",
    description:
      "Analyse de sentiment sur actualités financières avec FinBERT. Corrélation avec mouvements de marchés.",
    metrics: [
      { label: "F1-Score", value: "—" },
      { label: "Dataset", value: "—" },
    ],
    filters: ["nlp", "finance"],
    status: "coming-soon",
  },
  {
    id: "mlops-pipeline",
    category: "MLOPS",
    categoryColor: "#34d399",
    title: "Déploiement Credit Scoring",
    description:
      "Pipeline MLOps complet : FastAPI, Docker, MLflow, monitoring de dérive avec Evidently. CI/CD GitHub Actions.",
    metrics: [
      { label: "Latence", value: "—" },
      { label: "Uptime", value: "—" },
    ],
    filters: ["mlops"],
    status: "coming-soon",
  },
  {
    id: "rag-chatbot",
    category: "GENAI",
    categoryColor: "#f59e0b",
    title: "RAG Chatbot Finance",
    description:
      "Chatbot RAG sur rapports financiers annuels. LangChain, embeddings OpenAI, retrieval augmenté sur données 10-K.",
    metrics: [
      { label: "Sources", value: "—" },
      { label: "Precision", value: "—" },
    ],
    filters: ["genai", "finance"],
    status: "coming-soon",
  },
];
```

- [ ] **Step 3: Réécrire content/skills.ts**

```ts
export type Tool = { name: string; abbr: string; color: string };

export type SkillCard = {
  id: string;
  icon: string;
  iconColor: string;
  title: string;
  tools: Tool[];
  bullets: string[];
};

export const skillCards: SkillCard[] = [
  {
    id: "ml",
    icon: "Brain",
    iconColor: "var(--color-cyan)",
    title: "Machine Learning & Modélisation",
    tools: [
      { name: "Python", abbr: "PY", color: "#3b82f6" },
      { name: "XGBoost", abbr: "XGB", color: "#f97316" },
      { name: "sklearn", abbr: "SKL", color: "#f59e0b" },
      { name: "SHAP", abbr: "SHP", color: "#a78bfa" },
    ],
    bullets: [
      "Scoring crédit & détection d'anomalies",
      "Feature engineering financier",
      "Calibration & gestion du déséquilibre",
    ],
  },
  {
    id: "data-eng",
    icon: "Database",
    iconColor: "#34d399",
    title: "Data Engineering & SQL",
    tools: [
      { name: "Pandas", abbr: "PD", color: "#3b82f6" },
      { name: "NumPy", abbr: "NP", color: "#60a5fa" },
      { name: "SQL", abbr: "SQL", color: "#f59e0b" },
      { name: "Git", abbr: "GIT", color: "#f97316" },
    ],
    bullets: [
      "Pipelines ETL/ELT Azure & AWS",
      "Optimisation requêtes SQL",
      "PySpark, OpenSearch",
    ],
  },
  {
    id: "viz",
    icon: "BarChart2",
    iconColor: "#a78bfa",
    title: "Visualisation & Reporting",
    tools: [
      { name: "Power BI", abbr: "PBI", color: "#f59e0b" },
      { name: "Plotly", abbr: "PLT", color: "#3b82f6" },
      { name: "Seaborn", abbr: "SNS", color: "#34d399" },
      { name: "Matplotlib", abbr: "MPL", color: "#f97316" },
    ],
    bullets: [
      "Dashboards Power BI & Qlik Sense",
      "EDA & storytelling data",
      "Dashboards analytiques interactifs",
    ],
  },
  {
    id: "mlops",
    icon: "Cpu",
    iconColor: "#f59e0b",
    title: "MLOps & GenAI",
    tools: [
      { name: "FastAPI", abbr: "API", color: "#34d399" },
      { name: "Docker", abbr: "DKR", color: "#3b82f6" },
      { name: "MLflow", abbr: "MLF", color: "#f97316" },
      { name: "LangChain", abbr: "LC", color: "#a78bfa" },
    ],
    bullets: [
      "Déploiement API & monitoring drift",
      "CI/CD GitHub Actions",
      "RAG / LLM sur données financières",
    ],
  },
];
```

- [ ] **Step 4: Commit**

```bash
git add content/profile.ts content/projects.ts content/skills.ts
git commit -m "feat(content): DS repositioning — profile, projects, skills"
```

---

## Task 6: Nav component

**Files:**
- Créer : `components/Nav.tsx`

- [ ] **Step 1: Créer components/Nav.tsx**

```tsx
"use client";
import { useState, useEffect } from "react";
import { cn } from "@/lib/cn";
import { profile } from "@/content/profile";

const links = [
  { label: "ACCUEIL", href: "#top" },
  { label: "À PROPOS", href: "#about" },
  { label: "PORTFOLIO", href: "#portfolio" },
  { label: "COMPÉTENCES", href: "#skills" },
  { label: "CONTACT", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[var(--color-bg)]/90 backdrop-blur-md border-b border-[var(--color-border)]"
          : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-3 shrink-0">
          <div className="w-9 h-9 rounded-lg bg-[var(--color-cyan)] flex items-center justify-center">
            <span className="text-[var(--color-bg)] font-black text-sm tracking-tight">
              {profile.initials}
            </span>
          </div>
          <span className="hidden sm:block text-sm font-semibold text-[var(--color-text)]">
            {profile.tagline}
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-xs font-bold tracking-widest text-[var(--color-muted)] hover:text-[var(--color-cyan)] transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Menu"
        >
          <span className={cn("block h-0.5 w-6 bg-[var(--color-text)] transition-all", menuOpen && "rotate-45 translate-y-2")} />
          <span className={cn("block h-0.5 w-6 bg-[var(--color-text)] transition-all", menuOpen && "opacity-0")} />
          <span className={cn("block h-0.5 w-6 bg-[var(--color-text)] transition-all", menuOpen && "-rotate-45 -translate-y-2")} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[var(--color-bg2)] border-b border-[var(--color-border)] px-6 py-4">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-xs font-bold tracking-widest text-[var(--color-muted)] hover:text-[var(--color-cyan)] transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/Nav.tsx
git commit -m "feat(nav): sticky nav with logo, links, mobile hamburger"
```

---

## Task 7: Hero component

**Files:**
- Créer : `components/Hero.tsx`

- [ ] **Step 1: Créer components/Hero.tsx**

```tsx
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
  const typewriterText = useTypewriter(profile.typewriterWords as unknown as string[]);

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
          {profile.floatingBadges.map((badge, i) => {
            const positions = [
              "top-4 -right-4 md:top-8 md:-right-8",
              "bottom-16 -right-8 md:-right-12",
              "bottom-4 -left-4 md:-left-8",
            ];
            return (
              <motion.div
                key={badge}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: [10, -6, 0] }}
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
```

- [ ] **Step 2: Commit**

```bash
git add components/Hero.tsx
git commit -m "feat(hero): typewriter, photo, floating badges, CTAs"
```

---

## Task 8: About component

**Files:**
- Créer : `components/About.tsx`

- [ ] **Step 1: Créer components/About.tsx**

```tsx
"use client";
import { motion } from "framer-motion";
import { profile } from "@/content/profile";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

export function About() {
  return (
    <section id="about" className="py-24 max-w-6xl mx-auto px-6">
      {/* Section header */}
      <motion.div {...fadeUp(0)} className="mb-14">
        <p className="text-xs font-black tracking-[0.25em] text-[var(--color-cyan)] uppercase mb-3">
          À PROPOS
        </p>
        <h2 className="font-black text-[var(--color-text)] leading-tight"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
          {profile.aboutTitle}
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-5 gap-12 items-start">
        {/* LEFT — text + bullets + mini-cards */}
        <div className="lg:col-span-3 space-y-8">
          <motion.p {...fadeUp(0.1)} className="text-[var(--color-muted)] leading-relaxed text-base">
            {profile.aboutText}
          </motion.p>

          <div className="space-y-4">
            {profile.aboutBullets.map((b, i) => (
              <motion.div key={b.title} {...fadeUp(0.15 + i * 0.08)} className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-[var(--color-cyan)] shrink-0" />
                <div>
                  <span className="font-bold text-[var(--color-text)]">{b.title}</span>
                  <span className="text-[var(--color-muted)]"> — {b.desc}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mini-cards */}
          <motion.div {...fadeUp(0.5)} className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: "MÉTHODOLOGIE",
                items: ["CRISP-DM", "Feature engineering rigoureux", "Validation croisée", "Explainability SHAP"],
              },
              {
                title: "LIVRABLES",
                items: ["Modèles calibrés & documentés", "Pipelines reproductibles", "Dashboards analytiques", "Rapports techniques"],
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-5"
              >
                <p className="text-xs font-black tracking-widest text-[var(--color-cyan)] mb-3">{card.title}</p>
                <ul className="space-y-1.5">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-[var(--color-muted)]">
                      <span className="h-1 w-1 rounded-full bg-[var(--color-cyan)] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — avatar card */}
        <motion.div
          {...fadeUp(0.2)}
          className="lg:col-span-2 flex justify-center"
        >
          <div className="w-56 h-56 md:w-64 md:h-64 bg-white rounded-2xl flex items-center justify-center shadow-xl">
            <span
              className="font-black text-[#111820] select-none"
              style={{ fontSize: "clamp(4rem, 12vw, 6rem)" }}
            >
              {profile.initials}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/About.tsx
git commit -m "feat(about): text, bullets, mini-cards, avatar"
```

---

## Task 9: Education component

**Files:**
- Créer : `components/Education.tsx`

- [ ] **Step 1: Créer components/Education.tsx**

```tsx
"use client";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
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

export function Education() {
  return (
    <section id="education" className="py-24 max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-14"
      >
        <p className="text-xs font-black tracking-[0.25em] text-[var(--color-cyan)] uppercase mb-3">
          ÉDUCATION
        </p>
        <h2
          className="font-black text-[var(--color-text)]"
          style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
        >
          Mon parcours académique
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {education.map((edu, i) => (
          <motion.div
            key={edu.school}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            className="bg-white rounded-2xl p-6 flex flex-col items-center text-center gap-4 shadow-sm hover:-translate-y-1 transition-transform duration-200"
          >
            <div className="w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center">
              <GraduationCap size={28} className="text-gray-500" />
            </div>
            <div>
              <p className="font-bold text-sm text-gray-900 leading-snug mb-1">{edu.school}</p>
              <p className="text-xs text-[var(--color-cyan)] font-bold tracking-wider uppercase">
                {COUNTRY[edu.school] ?? "FRANCE"}
              </p>
              <p className="text-xs text-gray-400 mt-1">
                {formatYear(edu.start)} – {formatYear(edu.end)}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/Education.tsx
git commit -m "feat(education): white cards on dark bg"
```

---

## Task 10: Portfolio component

**Files:**
- Créer : `components/Portfolio.tsx`

- [ ] **Step 1: Créer components/Portfolio.tsx**

```tsx
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, BarChart2, Cpu, Zap, ChevronRight, Github } from "lucide-react";
import { cn } from "@/lib/cn";
import { projects, type ProjectFilter, type Project } from "@/content/projects";
import { profile } from "@/content/profile";

const FILTERS: { id: ProjectFilter; label: string }[] = [
  { id: "all", label: "TOUS" },
  { id: "ml", label: "ML" },
  { id: "nlp", label: "NLP" },
  { id: "mlops", label: "MLOPS" },
  { id: "genai", label: "GENAI" },
  { id: "finance", label: "FINANCE" },
];

function CategoryIcon({ category }: { category: string }) {
  const props = { size: 18 };
  if (category === "MACHINE LEARNING") return <Brain {...props} />;
  if (category === "NLP") return <BarChart2 {...props} />;
  if (category === "MLOPS") return <Cpu {...props} />;
  if (category === "GENAI") return <Zap {...props} />;
  return <Brain {...props} />;
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.25 }}
      whileHover={{ y: -4 }}
      className={cn(
        "bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-5 flex flex-col gap-4",
        project.status === "coming-soon" && "opacity-70"
      )}
    >
      {/* Category */}
      <div className="flex items-center gap-2">
        <span style={{ color: project.categoryColor }}>
          <CategoryIcon category={project.category} />
        </span>
        <span
          className="text-xs font-black tracking-widest uppercase"
          style={{ color: project.categoryColor }}
        >
          {project.category}
        </span>
        {project.status === "coming-soon" && (
          <span className="ml-auto text-xs font-bold text-[var(--color-muted)] border border-[var(--color-border)] rounded-full px-2 py-0.5">
            À VENIR
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="text-lg font-black text-[var(--color-text)]">{project.title}</h3>

      {/* Description */}
      <p className="text-sm text-[var(--color-muted)] leading-relaxed flex-1">{project.description}</p>

      {/* Metrics */}
      <div className="grid grid-cols-2 gap-2">
        {project.metrics.map((m) => (
          <div key={m.label} className="bg-[var(--color-bg2)] border border-[var(--color-border)] rounded-lg p-3">
            <p className="text-xs text-[var(--color-muted)] uppercase tracking-wider mb-1">{m.label}</p>
            <p className="font-bold text-[var(--color-cyan)]">{m.value}</p>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="grid grid-cols-2 gap-2">
        <button
          disabled={project.status === "coming-soon"}
          className="flex items-center justify-center gap-1 border border-[var(--color-border)] text-[var(--color-text)] rounded-lg py-2.5 text-xs font-bold hover:border-[var(--color-cyan)] hover:text-[var(--color-cyan)] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          DÉTAILS <ChevronRight size={12} />
        </button>
        <a
          href={project.githubUrl ?? profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "flex items-center justify-center gap-1 bg-[var(--color-cyan)] text-[var(--color-bg)] rounded-lg py-2.5 text-xs font-bold hover:brightness-110 transition-all",
            project.status === "coming-soon" && "pointer-events-none opacity-40"
          )}
        >
          VOIR GITHUB <Github size={12} />
        </a>
      </div>
    </motion.div>
  );
}

export function Portfolio() {
  const [active, setActive] = useState<ProjectFilter>("all");

  const visible = projects.filter(
    (p) => active === "all" || p.filters.includes(active)
  );

  return (
    <section id="portfolio" className="py-24 max-w-6xl mx-auto px-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <p className="text-xs font-black tracking-[0.25em] text-[var(--color-cyan)] uppercase mb-3">
          PORTFOLIO
        </p>
        <h2
          className="font-black text-[var(--color-text)]"
          style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
        >
          Mes Projets Phares
        </h2>
      </motion.div>

      {/* Filters */}
      <div className="flex items-center gap-2 flex-wrap mb-10">
        <span className="text-xs text-[var(--color-muted)] font-bold mr-1 hidden sm:block">
          FILTRER PAR :
        </span>
        {FILTERS.map((f) => (
          <button
            key={f.id}
            onClick={() => setActive(f.id)}
            className={cn(
              "px-4 py-1.5 rounded-full text-xs font-black tracking-wider border transition-all",
              active === f.id
                ? "bg-[var(--color-cyan)] text-[var(--color-bg)] border-[var(--color-cyan)]"
                : "border-[var(--color-border)] text-[var(--color-muted)] hover:border-[var(--color-cyan)] hover:text-[var(--color-cyan)]"
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid sm:grid-cols-2 gap-5">
        <AnimatePresence mode="popLayout">
          {visible.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/Portfolio.tsx
git commit -m "feat(portfolio): filters, project cards with metrics, animated grid"
```

---

## Task 11: Skills component

**Files:**
- Créer : `components/Skills.tsx`

- [ ] **Step 1: Créer components/Skills.tsx**

```tsx
"use client";
import { motion } from "framer-motion";
import { Brain, Database, BarChart2, Cpu } from "lucide-react";
import { skillCards, type SkillCard } from "@/content/skills";

function getIcon(name: string) {
  const props = { size: 22 };
  if (name === "Brain") return <Brain {...props} />;
  if (name === "Database") return <Database {...props} />;
  if (name === "BarChart2") return <BarChart2 {...props} />;
  if (name === "Cpu") return <Cpu {...props} />;
  return <Brain {...props} />;
}

function ToolBadge({ name, abbr, color }: { name: string; abbr: string; color: string }) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-black text-xs"
        style={{ backgroundColor: color + "33", border: `1px solid ${color}66`, color }}
      >
        {abbr}
      </div>
      <span className="text-[10px] text-[var(--color-muted)] uppercase font-bold tracking-wider">
        {name}
      </span>
    </div>
  );
}

function SkillCardComponent({ card, index }: { card: SkillCard; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: "easeOut" }}
      className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: card.iconColor + "1a", color: card.iconColor }}
        >
          {getIcon(card.icon)}
        </div>
        <h3 className="font-black text-[var(--color-text)] text-base leading-snug">{card.title}</h3>
      </div>

      {/* Tools */}
      <div className="flex flex-wrap gap-4 mb-6">
        {card.tools.map((t) => (
          <ToolBadge key={t.name} name={t.name} abbr={t.abbr} color={t.color} />
        ))}
      </div>

      {/* Bullets */}
      <ul className="space-y-2.5">
        {card.bullets.map((b) => (
          <li key={b} className="flex items-start gap-2.5 text-sm text-[var(--color-muted)]">
            <span
              className="mt-1.5 h-1.5 w-1.5 rounded-full shrink-0"
              style={{ backgroundColor: card.iconColor }}
            />
            {b}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-24 max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <p className="text-xs font-black tracking-[0.25em] text-[var(--color-cyan)] uppercase mb-3">
          EXPERTISE
        </p>
        <h2
          className="font-black text-[var(--color-text)]"
          style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
        >
          Écosystème Technique
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-5">
        {skillCards.map((card, i) => (
          <SkillCardComponent key={card.id} card={card} index={i} />
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/Skills.tsx
git commit -m "feat(skills): 2x2 grid with tool badges and bullets"
```

---

## Task 12: Contact + ScrollToTop

**Files:**
- Créer : `components/Contact.tsx`
- Créer : `components/ScrollToTop.tsx`

- [ ] **Step 1: Créer components/Contact.tsx**

```tsx
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
```

- [ ] **Step 2: Créer components/ScrollToTop.tsx**

```tsx
"use client";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Retour en haut"
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-[var(--color-cyan)] text-[var(--color-bg)] flex items-center justify-center shadow-lg hover:brightness-110 transition-all"
    >
      <ArrowUp size={20} />
    </button>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add components/Contact.tsx components/ScrollToTop.tsx
git commit -m "feat(contact): centered CTA + footer + scroll-to-top FAB"
```

---

## Task 13: Page principale — app/page.tsx

**Files:**
- Créer : `app/page.tsx`

- [ ] **Step 1: Créer app/page.tsx**

```tsx
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Education } from "@/components/Education";
import { Portfolio } from "@/components/Portfolio";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { ScrollToTop } from "@/components/ScrollToTop";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Education />
        <Portfolio />
        <Skills />
        <Contact />
      </main>
      <ScrollToTop />
    </>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add app/page.tsx
git commit -m "feat(page): assemble all sections"
```

---

## Task 14: Vérification TypeScript + build

**Files:**
- Aucun nouveau fichier — vérification uniquement

- [ ] **Step 1: Lancer le type-check**

Depuis `C:\Projets\Portfolio\site\` :

```bash
npx tsc --noEmit
```

Résultat attendu : aucune erreur. Si erreurs :

- `Cannot find module '@/lib/cn'` → vérifier que `lib/cn.ts` existe
- `Cannot find name 'profile.typewriterWords'` → vérifier `content/profile.ts` qu'il y a bien `typewriterWords`
- `Type 'readonly [...]' is not assignable` → dans `Hero.tsx` changer `profile.typewriterWords as unknown as string[]` par `[...profile.typewriterWords]`
- `Module not found: next-intl` → vérifier que `next.config.ts` ne l'importe plus

- [ ] **Step 2: Lancer le serveur de dev**

```bash
npm run dev
```

Ouvrir `http://localhost:3000`. Vérifier visuellement :
- Nav sticky visible avec logo RD cyan
- Hero avec typewriter fonctionnel
- Photo de profil ronde affichée
- Sections scrollables avec animations fade-up
- Bouton scroll-to-top cyan apparaît après scroll

- [ ] **Step 3: Lancer le build de production**

```bash
npm run build
```

Résultat attendu : `✓ Compiled successfully` + fichiers statiques dans `out/`.

Si erreur `"use client"` sur composant serveur : ajouter `"use client"` en haut du fichier concerné.

Si erreur `Image with src... must use "width" and "height"` : déjà géré avec `fill` + `sizes`.

- [ ] **Step 4: Commit final**

```bash
git add -A
git commit -m "feat(portfolio): initial setup — pixel-perfect DS redesign"
```

---

## Task 15: GitHub Actions — Déploiement GitHub Pages

**Files:**
- Créer : `.github/workflows/deploy.yml`

- [ ] **Step 1: Créer le dossier .github/workflows à la racine du repo (C:\Projets\Portfolio\)**

Note : ce fichier va à la **racine du repo** (`C:\Projets\Portfolio\`), pas dans `site/`.

```bash
mkdir -p C:/Projets/Portfolio/.github/workflows
```

- [ ] **Step 2: Créer .github/workflows/deploy.yml**

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [master]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    defaults:
      run:
        working-directory: site
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "npm"
          cache-dependency-path: site/package-lock.json

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build
        env:
          NEXT_PUBLIC_BASE_PATH: /portfolio

      - uses: actions/upload-pages-artifact@v3
        with:
          path: site/out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

- [ ] **Step 3: Activer basePath dans next.config.ts pour GitHub Pages**

Dans `site/next.config.ts`, décommenter la ligne basePath :

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: "/portfolio",
};

export default nextConfig;
```

> ⚠️ Si le repo GitHub s'appelle autrement que `portfolio`, adapter la valeur de `basePath`.
> Si tu as un domaine custom ou si le repo s'appelle `<username>.github.io`, mettre `basePath: ""`.

- [ ] **Step 4: Commit**

```bash
git add .github/workflows/deploy.yml site/next.config.ts
git commit -m "feat(ci): GitHub Actions deploy to GitHub Pages"
```

---

## Instructions de déploiement manuel (pour toi)

Une fois satisfait du résultat local :

```bash
# Dans C:\Projets\Portfolio\
git remote add origin https://github.com/<ton-username>/portfolio.git
git push -u origin master
```

Puis sur GitHub :
- Settings → Pages → Source : **GitHub Actions**
- Le workflow se déclenche automatiquement au push

URL finale : `https://<ton-username>.github.io/portfolio`
