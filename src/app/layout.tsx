import type { Metadata } from "next";
import "@/styles/index.scss";

export const metadata: Metadata = {
  title: "Damien Lecointre | Développeur web React, Next.js & Typescript",
  description: "Développeur web spécialisé en React, Next.js et TypeScript. Je conçois des sites et applications modernes, adaptées à vos besoins.",
  keywords: ["Développeur Web","Développeur Web full stack", "React", "Next.js", "TypeScript", "Portfolio"],
  openGraph: {
    title: "Damien Lecointre | Développeur web React, Next.js & Typescript",
    description: "Développeur web spécialisé en React, Next.js et TypeScript, je crée des sites et applications modernes, performants et pensés pour vos besoins.",
    url: "https://ton-domaine.com",
    siteName: "Damien Lecointre Portfolio",
    images: [
      {
        url: "https://ton-domaine.com/preview.png",
        width: 1200,
        height: 630,
        alt: "Aperçu portfolio Damien Lecointre",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Damien Lecointre | Développeur React, Next.js & Typescript",
    description: "Portfolio de Damien Lecointre, développeur web spécialiste React, Next.js et TypeScript.",
    images: ["https://ton-domaine.com/preview.png"],
  },
  alternates: {
    canonical: "https://ton-domaine.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  );
}
