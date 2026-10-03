import { fixed } from "@/lib/format";
import creditJson from "./metrics/credit-scoring.json";
import fraudJson from "./metrics/fraud-detection.json";
import churnJson from "./metrics/churn-prediction.json";

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

const repo = (name: string) => `https://github.com/elgr3/${name}`;

// Card metrics come from each project's reports/metrics.json (copied into ./metrics).
const credit: { xgboost: { auc_roc: number; gini: number } } = creditJson;
const fraud: { xgboost_smote: { precision: number; recall: number } } = fraudJson;
const churn: { test: { f1: number; auc_roc: number } } = churnJson;

export const projects: Project[] = [
  {
    id: "credit-scoring",
    category: "MACHINE LEARNING",
    accent: "#2dd4bf",
    title: "Credit Scoring",
    description:
      "Modèle de scoring crédit sur 150 000 clients bancaires (Give Me Some Credit). XGBoost optimisé par validation croisée, explicabilité SHAP.",
    longDescription:
      "Prédiction du risque de défaut à deux ans sur 150 000 emprunteurs.\n\nUn nettoyage sans fuite de données (appris sur l'entraînement uniquement) répare les revenus manquants, les âges aberrants et les codes de retard spéciaux. Une régression logistique sert de référence ; XGBoost est optimisé par recherche aléatoire et validation croisée stratifiée.\n\nSHAP explique les décisions globalement et client par client. Le modèle entraîné est publié en release pour être réutilisé.",
    tags: ["XGBoost", "SHAP", "scikit-learn", "Python", "Classes déséquilibrées"],
    metrics: [
      { label: "AUC-ROC", value: fixed(credit.xgboost.auc_roc) },
      { label: "Gini", value: fixed(credit.xgboost.gini) },
    ],
    filters: ["ml", "finance"],
    status: "active",
    githubUrl: repo("credit-scoring"),
  },
  {
    id: "fraud-detection",
    category: "MACHINE LEARNING",
    accent: "#2dd4bf",
    title: "Fraud Detection",
    description:
      "Détection de fraudes sur 284 807 transactions (0,17 % de fraudes). Isolation Forest vs XGBoost + SMOTE, seuil optimisé sur un coût métier.",
    longDescription:
      "Comparaison d'une approche non supervisée (Isolation Forest) et d'une approche supervisée (XGBoost entraîné avec SMOTE, appliqué uniquement aux données d'entraînement).\n\nAu lieu du seuil arbitraire de 0,5, le seuil de décision minimise un coût métier explicite : une fraude manquée coûte 100 fois une fausse alerte. Les performances sont mesurées sur un jeu de test jamais utilisé pour le réglage.",
    tags: ["XGBoost", "SMOTE", "Isolation Forest", "PR-AUC", "Optimisation de seuil"],
    metrics: [
      { label: "Precision", value: fixed(fraud.xgboost_smote.precision) },
      { label: "Recall", value: fixed(fraud.xgboost_smote.recall) },
    ],
    filters: ["ml", "finance"],
    status: "active",
    githubUrl: repo("fraud-detection"),
  },
  {
    id: "churn-prediction",
    category: "MACHINE LEARNING",
    accent: "#2dd4bf",
    title: "Churn Prediction",
    description:
      "Prédiction de l'attrition de 10 000 clients bancaires, explication SHAP et recommandations de rétention issues des segments les plus à risque.",
    longDescription:
      "Feature engineering (solde nul, ratio solde/salaire, produits × activité, tranches d'âge) intégré dans des pipelines scikit-learn.\n\nRégression logistique, Random Forest et XGBoost sont comparés en validation croisée ; le meilleur est évalué une seule fois sur le jeu de test. SHAP identifie les leviers du départ, et une analyse par segments (pays × âge × nombre de produits) fonde des recommandations de rétention concrètes.",
    tags: ["scikit-learn", "Random Forest", "XGBoost", "SHAP", "Segmentation"],
    metrics: [
      { label: "F1-Score", value: fixed(churn.test.f1) },
      { label: "AUC-ROC", value: fixed(churn.test.auc_roc) },
    ],
    filters: ["ml", "finance"],
    status: "active",
    githubUrl: repo("churn-prediction"),
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
