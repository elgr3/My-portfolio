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
