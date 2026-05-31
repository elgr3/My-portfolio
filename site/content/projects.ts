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
