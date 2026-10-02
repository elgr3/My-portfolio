export type CaseStudyStat = {
  icon: "Clock" | "Layers" | "Target";
  value: string;
  label: string;
  desc: string;
  gradient: string;
};

// Les chiffres ci-dessous sont factuels (durée, stack, axes de travail).
// Remplacez-les par des résultats mesurés quand vous en avez.
export const caseStudy = {
  eyebrow: "Étude de cas détaillée",
  titleLine1: "Mission Data Analyst :",
  titleLine2: "SNCF Voyageurs",
  subtitle:
    "Dashboards Power BI interactifs et automatisation du reporting temps réel.",
  context: [
    { icon: "Building2", title: "Organisation", content: "SNCF Voyageurs" },
    { icon: "Briefcase", title: "Secteur", content: "Transport ferroviaire de voyageurs" },
    { icon: "MapPin", title: "Localisation", content: "Villeneuve-Saint-Georges, France" },
  ],
  missionBefore:
    "Conception de dashboards Power BI interactifs et automatisation du reporting temps réel. En amont, mise en place de ",
  missionHighlight: "processus ETL et optimisation des bases SQL",
  missionAfter:
    ", complétées par des scripts Python pour automatiser les tâches d'analyse.",
  statsTitle: "La mission en chiffres",
  stats: [
    {
      icon: "Clock",
      value: "12",
      label: "Mois de mission",
      desc: "Sept. 2024 – août 2025",
      gradient: "from-mint to-cyan-400",
    },
    {
      icon: "Layers",
      value: "4",
      label: "Technologies",
      desc: "Power BI · SQL · Python · ETL",
      gradient: "from-blue to-blue-400",
    },
    {
      icon: "Target",
      value: "3",
      label: "Axes de travail",
      desc: "Dashboards · ETL · Automatisation",
      gradient: "from-purple-500 to-pink-500",
    },
  ] satisfies CaseStudyStat[],
} as const;
