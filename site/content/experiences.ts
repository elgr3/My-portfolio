export type Experience = {
  company: string;
  role: { fr: string; en: string };
  start: string;
  end: string | "present";
  location: string;
  bullets: { fr: string[]; en: string[] };
  stack: string[];
};

export const experiences: Experience[] = [
  {
    company: "BNP Paribas Cardif",
    role: { fr: "Data Engineer", en: "Data Engineer" },
    start: "2026-02",
    end: "present",
    location: "Nanterre",
    stack: ["Python", "PySpark", "Azure", "AWS", "SQL", "Power BI", "CI/CD", "DataGalaxy"],
    bullets: {
      fr: [
        "Conception et optimisation de pipelines de migration cloud (Azure, AWS) — scalabilité et sécurité des flux.",
        "Automatisation des workflows via Python, Power Apps, Power Automate.",
        "Feature engineering et préparation de datasets pour modèles prédictifs.",
        "Dashboarding Power BI orienté data storytelling.",
        "Intégration DataOps : versioning GitHub, pipelines CI/CD pour projets IA.",
      ],
      en: [
        "Design and optimization of cloud migration pipelines (Azure, AWS) — scalability and security.",
        "Workflow automation with Python, Power Apps, Power Automate.",
        "Feature engineering and dataset preparation for predictive models.",
        "Power BI dashboarding with data storytelling focus.",
        "DataOps integration: GitHub versioning, CI/CD pipelines for AI projects.",
      ],
    },
  },
  {
    company: "BNP Paribas Cardif",
    role: { fr: "Data Analyst", en: "Data Analyst" },
    start: "2025-09",
    end: "present",
    location: "Nanterre",
    stack: ["Power BI", "Qlik Sense", "SQL", "Python"],
    bullets: {
      fr: [
        "Analyse des besoins métiers et pilotage opérationnel.",
        "BI & dashboarding via Power BI et Qlik Sense.",
        "Garantie de la qualité et de la cohérence des indicateurs.",
        "Industrialisation des processus de reporting.",
      ],
      en: [
        "Business needs analysis and operational steering.",
        "BI & dashboarding via Power BI and Qlik Sense.",
        "Quality assurance for KPIs and indicators.",
        "Industrialization of reporting processes.",
      ],
    },
  },
  {
    company: "Efreika",
    role: { fr: "Responsable Pôle Stage & Alternance", en: "Internships & Apprenticeships Lead" },
    start: "2025-08",
    end: "present",
    location: "Villejuif",
    stack: [],
    bullets: {
      fr: ["Accompagnement des étudiants dans leurs recherches de stages et alternances."],
      en: ["Mentoring students in their internship and apprenticeship search."],
    },
  },
  {
    company: "Acadomia",
    role: { fr: "Tuteur académique", en: "Academic Tutor" },
    start: "2024-10",
    end: "present",
    location: "Paris",
    stack: [],
    bullets: {
      fr: [
        "Suivi pédagogique individualisé en maths, sciences, informatique.",
        "Méthodologie sur mesure et vulgarisation de concepts complexes.",
      ],
      en: [
        "Personalized tutoring in math, science, and computer science.",
        "Tailored methodology and complex concept simplification.",
      ],
    },
  },
  {
    company: "SNCF Voyageurs",
    role: { fr: "Data Analyst", en: "Data Analyst" },
    start: "2024-09",
    end: "2025-08",
    location: "Villeneuve-Saint-Georges",
    stack: ["Power BI", "SQL", "Python", "ETL"],
    bullets: {
      fr: [
        "Dashboards Power BI interactifs et automatisation du reporting temps réel.",
        "Mise en place de processus ETL et optimisation des bases SQL.",
        "Scripts Python pour l'automatisation de tâches d'analyse.",
      ],
      en: [
        "Interactive Power BI dashboards and real-time reporting automation.",
        "ETL pipelines and SQL database optimization.",
        "Python scripts for analysis task automation.",
      ],
    },
  },
  {
    company: "Matheles IT Consulting",
    role: { fr: "Data Engineer", en: "Data Engineer" },
    start: "2024-05",
    end: "2024-09",
    location: "Paris",
    stack: ["OpenSearch", "ReactiveSearch", "React"],
    bullets: {
      fr: [
        "Mise en place d'un moteur de recherche documentaire avec OpenSearch.",
        "Indexation, configuration des indices, développement du front en ReactiveSearch.",
      ],
      en: [
        "Built a document search engine with OpenSearch.",
        "Indexing, index configuration, ReactiveSearch frontend development.",
      ],
    },
  },
  {
    company: "Parkours",
    role: { fr: "Professeur particulier de mathématiques", en: "Private Math Tutor" },
    start: "2024-01",
    end: "2024-08",
    location: "Paris",
    stack: [],
    bullets: {
      fr: ["Cours de soutien scolaire et aide aux devoirs."],
      en: ["After-school tutoring and homework assistance."],
    },
  },
  {
    company: "Flux",
    role: { fr: "Consultant technico-fonctionnel", en: "Technical-Functional Consultant" },
    start: "2023-06",
    end: "2023-08",
    location: "Yaoundé, Cameroun",
    stack: ["Power BI"],
    bullets: {
      fr: [
        "Reverse engineering d'une solution existante.",
        "Prise en main de Power BI.",
        "Analyse des besoins clients.",
      ],
      en: [
        "Reverse engineering of an existing solution.",
        "Power BI onboarding.",
        "Client needs analysis.",
      ],
    },
  },
];
