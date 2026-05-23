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
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
