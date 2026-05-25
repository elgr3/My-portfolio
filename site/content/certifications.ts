export type CertificationLogoSlug = "az-900" | "dp-900" | "pl-300";

export type Certification = {
  code: string;
  name: { fr: string; en: string };
  issuer: "Microsoft";
  logoSlug: CertificationLogoSlug;
  url: string;
};

export const certifications: Certification[] = [
  {
    code: "AZ-900",
    name: {
      fr: "Azure Fundamentals",
      en: "Azure Fundamentals",
    },
    issuer: "Microsoft",
    logoSlug: "az-900",
    url: "https://learn.microsoft.com/credentials/certifications/azure-fundamentals/",
  },
  {
    code: "DP-900",
    name: {
      fr: "Azure Data Fundamentals",
      en: "Azure Data Fundamentals",
    },
    issuer: "Microsoft",
    logoSlug: "dp-900",
    url: "https://learn.microsoft.com/credentials/certifications/azure-data-fundamentals/",
  },
  {
    code: "PL-300",
    name: {
      fr: "Power BI Data Analyst Associate",
      en: "Power BI Data Analyst Associate",
    },
    issuer: "Microsoft",
    logoSlug: "pl-300",
    url: "https://learn.microsoft.com/credentials/certifications/data-analyst-associate/",
  },
];
