export type CertificationLevel = "Associate" | "Fundamentals";

export type Certification = {
  code: string;
  name: string;
  level: CertificationLevel;
  url: string;
};

// Microsoft publie un badge par niveau, pas par examen.
export const LEVEL_BADGE: Record<CertificationLevel, string> = {
  Associate: "/certs/microsoft-certified-associate-badge.svg",
  Fundamentals: "/certs/microsoft-certified-fundamentals-badge.svg",
};

// Liens vers les pages officielles des certifications.
// Remplaçables par le lien de partage de votre relevé Microsoft Learn.
export const certifications: Certification[] = [
  {
    code: "DP-700",
    name: "Fabric Data Engineer Associate",
    level: "Associate",
    url: "https://learn.microsoft.com/fr-fr/credentials/certifications/fabric-data-engineer-associate/",
  },
  {
    code: "DP-600",
    name: "Fabric Analytics Engineer Associate",
    level: "Associate",
    url: "https://learn.microsoft.com/fr-fr/credentials/certifications/fabric-analytics-engineer-associate/",
  },
  {
    code: "PL-300",
    name: "Power BI Data Analyst Associate",
    level: "Associate",
    url: "https://learn.microsoft.com/fr-fr/credentials/certifications/data-analyst-associate/",
  },
  {
    code: "DP-900",
    name: "Azure Data Fundamentals",
    level: "Fundamentals",
    url: "https://learn.microsoft.com/fr-fr/credentials/certifications/azure-data-fundamentals/",
  },
  {
    code: "AZ-900",
    name: "Azure Fundamentals",
    level: "Fundamentals",
    url: "https://learn.microsoft.com/fr-fr/credentials/certifications/azure-fundamentals/",
  },
];
