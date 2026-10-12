import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sariaka Razafimahefa | Data Analyst, Data Quality & Reporting",
  description: "Data Analyst freelance spécialisée en analyse opérationnelle, qualité des données, reporting et suivi des KPI. Développement web et projets IA.",
  openGraph: {
    title: "Sariaka Razafimahefa | Data Analyst",
    description: "Portfolio professionnel : Data Analysis, Data Quality, reporting, développement web et projets intégrant l’IA.",
    locale: "fr_FR",
    type: "website",
    images: ["/zah.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
