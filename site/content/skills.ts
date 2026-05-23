export type Skill = { name: string; level: 1 | 2 | 3 | 4 | 5 };
export type SkillCategory = {
  id: string;
  label: { fr: string; en: string };
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "data-eng",
    label: { fr: "Data Engineering", en: "Data Engineering" },
    skills: [
      { name: "Python", level: 5 },
      { name: "PySpark", level: 4 },
      { name: "SQL", level: 5 },
      { name: "ETL / DataOps", level: 4 },
      { name: "OpenSearch", level: 3 },
    ],
  },
  {
    id: "cloud",
    label: { fr: "Cloud", en: "Cloud" },
    skills: [
      { name: "Azure", level: 5 },
      { name: "AWS", level: 3 },
      { name: "Vercel", level: 4 },
    ],
  },
  {
    id: "bi",
    label: { fr: "BI & Data Viz", en: "BI & Data Viz" },
    skills: [
      { name: "Power BI", level: 5 },
      { name: "Qlik Sense", level: 4 },
      { name: "Power Apps", level: 3 },
      { name: "Power Automate", level: 3 },
    ],
  },
  {
    id: "devops",
    label: { fr: "DevOps", en: "DevOps" },
    skills: [
      { name: "Git / GitHub", level: 5 },
      { name: "CI/CD", level: 4 },
      { name: "DataOps", level: 4 },
    ],
  },
  {
    id: "ai-ml",
    label: { fr: "IA / ML", en: "AI / ML" },
    skills: [
      { name: "Hugging Face", level: 3 },
      { name: "Mistral", level: 3 },
      { name: "RAG", level: 3 },
      { name: "scikit-learn", level: 3 },
    ],
  },
  {
    id: "governance",
    label: { fr: "Gouvernance", en: "Governance" },
    skills: [{ name: "DataGalaxy", level: 4 }],
  },
];
