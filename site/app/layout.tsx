import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rody Brayan DAMA — Data Scientist",
  description:
    "Alternant Data Engineer chez BNP Paribas Cardif, passionné par le Machine Learning appliqué à la finance et au banking.",
  authors: [{ name: "Rody Brayan DAMA" }],
  keywords: [
    "Data Science",
    "Machine Learning",
    "Data Engineer",
    "Python",
    "XGBoost",
    "Finance",
    "BNP Paribas",
    "Portfolio",
  ],
  openGraph: {
    title: "Rody Brayan DAMA — Data Scientist",
    description:
      "Machine Learning · Finance · Data Engineering. Transformer la donnée en valeur.",
    type: "website",
    locale: "fr_FR",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${jakarta.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
