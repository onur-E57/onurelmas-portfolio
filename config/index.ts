import type { Metadata } from "next";

export const links = {
  sourceCode: "https://github.com/onur-E57/onurelmas-portfolio",
  ownerName: "Onur Elmas",
  ownerEmail: "onur.elmas04@gmail.com",
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