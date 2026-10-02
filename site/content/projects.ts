export type ProjectFilter = "all" | "ml" | "nlp" | "mlops" | "genai" | "finance";

export type Metric = { label: string; value: string };

export type Project = {
  id: string;
  category: string;
  accent: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
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
    accent: "#2dd4bf",
    title: "Credit Scoring",
    description:
      "Modèle de scoring crédit sur 150 000 clients bancaires (Give Me Some Credit, Kaggle). XGBoost, SHAP, gestion du déséquilibre de classes.",
    longDescription:
      "Modèle de scoring crédit entraîné sur le jeu de données Give Me Some Credit (Kaggle), soit 150 000 clients bancaires.\n\nLe modèle XGBoost est entraîné en tenant compte du déséquilibre de classes, puis expliqué avec SHAP pour rendre chaque décision interprétable.",
    tags: ["XGBoost", "SHAP", "Kaggle", "Classes déséquilibrées"],
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
    accent: "#2dd4bf",
    title: "Fraud Detection",
    description:
      "Détection de transactions frauduleuses sur données très déséquilibrées (<1% de fraudes). Isolation Forest, SMOTE, threshold optimization.",
    tags: ["Isolation Forest", "SMOTE", "Threshold optimization"],
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
    accent: "#2dd4bf",
    title: "Churn Prediction",
    description:
      "Prédiction de l'attrition clients bancaires avec recommandations de rétention actionnables. Pipeline complet de feature engineering.",
    tags: ["Feature engineering", "Classification", "Rétention client"],
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
    accent: "#a78bfa",
    title: "Sentiment Analysis Finance",
    description:
      "Analyse de sentiment sur actualités financières avec FinBERT. Corrélation avec mouvements de marchés.",
    tags: ["FinBERT", "NLP", "Actualités financières"],
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
    accent: "#34d399",
    title: "Déploiement Credit Scoring",
    description:
      "Pipeline MLOps complet : FastAPI, Docker, MLflow, monitoring de dérive avec Evidently. CI/CD GitHub Actions.",
    tags: ["FastAPI", "Docker", "MLflow", "Evidently", "GitHub Actions"],
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
    accent: "#f59e0b",
    title: "RAG Chatbot Finance",
    description:
      "Chatbot RAG sur rapports financiers annuels. LangChain, embeddings OpenAI, retrieval augmenté sur données 10-K.",
    tags: ["LangChain", "Embeddings OpenAI", "RAG", "10-K"],
    metrics: [
      { label: "Sources", value: "—" },
      { label: "Precision", value: "—" },
    ],
    filters: ["genai", "finance"],
    status: "coming-soon",
  },
];
