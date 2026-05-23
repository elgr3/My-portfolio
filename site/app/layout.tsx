import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rody-dama.vercel.app"),
  title: {
    default: "Rody Brayan DAMA — Data Engineer & Analyst",
    template: "%s · Rody Brayan DAMA",
  },
  description:
    "Data Engineer & Analyst en alternance chez BNP Paribas Cardif. Pipelines cloud, PySpark, Python, SQL, Power BI, IA.",
  authors: [{ name: "Rody Brayan DAMA" }],
  keywords: [
    "Data Engineer",
    "Data Analyst",
    "PySpark",
    "Azure",
    "Power BI",
    "Python",
    "SQL",
    "BNP Paribas",
    "Portfolio",
  ],
  openGraph: {
    title: "Rody Brayan DAMA — Data Engineer & Analyst",
    description:
      "Pipelines cloud · PySpark · Azure · Power BI · IA. Construire la donnée utile à grande échelle.",
    type: "website",
    locale: "fr_FR",
    siteName: "Rody Brayan DAMA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rody Brayan DAMA — Data Engineer & Analyst",
    description:
      "Pipelines cloud · PySpark · Azure · Power BI · IA. Construire la donnée utile à grande échelle.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html className={`${geistSans.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  );
}
