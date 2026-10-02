export type Tool = { name: string; abbr: string; color: string; logo?: string };

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
    iconColor: "#2dd4bf",
    title: "Machine Learning & Modélisation",
    tools: [
      { name: "Python", abbr: "PY", color: "#3b82f6", logo: "/logos/python.svg" },
      { name: "XGBoost", abbr: "XGB", color: "#f97316" },
      { name: "sklearn", abbr: "SKL", color: "#f59e0b", logo: "/logos/scikitlearn.svg" },
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
      { name: "Pandas", abbr: "PD", color: "#3b82f6", logo: "/logos/pandas.svg" },
      { name: "NumPy", abbr: "NP", color: "#60a5fa", logo: "/logos/numpy.svg" },
      { name: "SQL", abbr: "SQL", color: "#f59e0b" },
      { name: "Git", abbr: "GIT", color: "#f97316", logo: "/logos/git.svg" },
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
      { name: "Plotly", abbr: "PLT", color: "#3b82f6", logo: "/logos/plotly.svg" },
      { name: "Seaborn", abbr: "SNS", color: "#34d399" },
      { name: "Matplotlib", abbr: "MPL", color: "#f97316", logo: "/logos/matplotlib.svg" },
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
      { name: "FastAPI", abbr: "API", color: "#34d399", logo: "/logos/fastapi.svg" },
      { name: "Docker", abbr: "DKR", color: "#3b82f6", logo: "/logos/docker.svg" },
      { name: "MLflow", abbr: "MLF", color: "#f97316", logo: "/logos/mlflow.svg" },
      { name: "LangChain", abbr: "LC", color: "#a78bfa", logo: "/logos/langchain.svg" },
    ],
    bullets: [
      "Déploiement API & monitoring drift",
      "CI/CD GitHub Actions",
      "RAG / LLM sur données financières",
    ],
  },
];
