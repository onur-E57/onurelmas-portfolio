import type { Metadata } from "next";

export const links = {
  // Kendi portfolyo reponun linki (Açık kaynak kalacaksa böyle kalsın)
  sourceCode: "https://github.com/onur-E57/onurelmas-portfolio",
  ownerName: "Onur Elmas",
  ownerEmail: "onurelmas@example.com", // Kendi mail adresini yazabilirsin
} as const;

export const siteConfig: Metadata = {
  title: "Onur Elmas | Frontend Developer",
  description: "Onur Elmas'ın modern ve minimalist kişisel portfolyo web sitesi.",
  keywords: [
    "Onur Elmas",
    "Frontend Developer",
    "React Geliştirici",
    "Web Tasarım",
    "Next.js",
    "React",
    "TailwindCSS",
    "Portfolio",
    "İstanbul",
    "Bilgisayar Programcılığı"
  ] as Array<string>,
  authors: {
    name: "Onur Elmas",
    url: "https://github.com/onur-E57",
  },
} as const;