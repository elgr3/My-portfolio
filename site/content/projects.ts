export type ProjectCategory = "data-engineering" | "bi" | "ai-ml" | "backend";

export type Project = {
  slug: string;
  title: { fr: string; en: string };
  context: { fr: string; en: string };
  pitch: { fr: string; en: string };
  stack: string[];
  categories: ProjectCategory[];
  type: "pro" | "personal" | "school" | "coming-soon";
  link?: { href: string; label: { fr: string; en: string } };
  hasCaseStudy?: boolean;
};

export const projects: Project[] = [
  {
    slug: "pipeline-cloud-bnp",
    title: {
      fr: "Pipeline Cloud Migration & Industrialisation Data",
      en: "Cloud Migration Pipeline & Data Industrialization",
    },
    context: {
      fr: "Mission @ BNP Paribas Cardif · Data Engineer · 2026",
      en: "Mission @ BNP Paribas Cardif · Data Engineer · 2026",
    },
    pitch: {
      fr: "Conception et optimisation de pipelines pour migrer des flux de données vers Azure/AWS, avec automatisation CI/CD et gouvernance via DataGalaxy.",
      en: "Design and optimization of pipelines migrating data flows to Azure/AWS, with CI/CD automation and DataGalaxy governance.",
    },
    stack: ["Python", "PySpark", "Azure", "AWS", "SQL", "CI/CD", "DataGalaxy"],
    categories: ["data-engineering"],
    type: "pro",
    hasCaseStudy: true,
  },
  {
    slug: "dashboards-sncf",
    title: {
      fr: "Dashboards stratégiques & Automatisation ETL",
      en: "Strategic Dashboards & ETL Automation",
    },
    context: {
      fr: "Mission @ SNCF Voyageurs · Data Analyst · 2024–2025",
      en: "Mission @ SNCF Voyageurs · Data Analyst · 2024–2025",
    },
    pitch: {
      fr: "Dashboards Power BI temps réel pour le suivi des KPIs voyageurs + pipelines ETL Python/SQL pour fiabiliser la donnée en amont.",
      en: "Real-time Power BI dashboards for passenger KPIs + Python/SQL ETL pipelines to stabilize upstream data.",
    },
    stack: ["Power BI", "SQL", "Python", "ETL"],
    categories: ["bi", "data-engineering"],
    type: "pro",
    hasCaseStudy: true,
  },
  {
    slug: "moteur-recherche-opensearch",
    title: {
      fr: "Moteur de recherche documentaire OpenSearch",
      en: "OpenSearch Document Search Engine",
    },
    context: {
      fr: "Mission @ Matheles IT Consulting · Data Engineer · 2024",
      en: "Mission @ Matheles IT Consulting · Data Engineer · 2024",
    },
    pitch: {
      fr: "Mise en place complète d'un moteur de recherche : indexation, configuration des indices OpenSearch, front en ReactiveSearch.",
      en: "End-to-end search engine: document indexing, OpenSearch index configuration, ReactiveSearch frontend.",
    },
    stack: ["OpenSearch", "ReactiveSearch", "React", "Elasticsearch DSL"],
    categories: ["data-engineering", "backend"],
    type: "pro",
    hasCaseStudy: true,
  },
  {
    slug: "gestion-stagiaire",
    title: { fr: "Gestion-Stagiaire", en: "Internship Manager" },
    context: { fr: "Projet personnel · 2023", en: "Personal project · 2023" },
    pitch: {
      fr: "Application de gestion des stagiaires d'une entreprise (CRUD complet, persistance).",
      en: "Internship management application for companies (full CRUD, persistence).",
    },
    stack: ["Java", "JavaFX", "MySQL"],
    categories: ["backend"],
    type: "personal",
    link: {
      href: "https://github.com/elgr3/Gestion-Stagiaire",
      label: { fr: "Voir sur GitHub", en: "View on GitHub" },
    },
  },
  {
    slug: "gestion-cin",
    title: { fr: "Gestion CIN", en: "ID Card Manager" },
    context: { fr: "Projet personnel · 2023", en: "Personal project · 2023" },
    pitch: {
      fr: "Système de gestion d'identités (CIN) avec interface Python et persistance SQLite.",
      en: "Identity card management system with Python UI and SQLite persistence.",
    },
    stack: ["Python", "Tkinter", "SQLite"],
    categories: ["backend"],
    type: "personal",
    link: {
      href: "https://github.com/elgr3/Gestion_Cin-",
      label: { fr: "Voir sur GitHub", en: "View on GitHub" },
    },
  },
  {
    slug: "rag-azure",
    title: { fr: "RAG sur la doc Azure", en: "RAG on Azure docs" },
    context: { fr: "Projet vitrine · en cours", en: "Showcase project · in progress" },
    pitch: {
      fr: "Mini-projet RAG répondant aux questions sur la doc Azure via Hugging Face + Mistral + vector DB.",
      en: "RAG mini-project answering Azure doc questions via Hugging Face + Mistral + vector DB.",
    },
    stack: ["Python", "LangChain", "Mistral", "Hugging Face", "Vector DB"],
    categories: ["ai-ml"],
    type: "coming-soon",
  },
];
