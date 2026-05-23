import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://rody-dama.vercel.app";
  const now = new Date();
  const staticUrls = ["", "/en"].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 1,
  }));
  const caseUrls = projects
    .filter((p) => p.hasCaseStudy)
    .flatMap((p) => [
      { url: `${base}/projets/${p.slug}`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.7 },
      { url: `${base}/en/projets/${p.slug}`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.7 },
    ]);
  return [...staticUrls, ...caseUrls];
}
