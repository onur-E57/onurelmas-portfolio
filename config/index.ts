import type { Metadata } from "next";

export const links = {
  sourceCode: "https://github.com/onur-E57/onurelmas-portfolio",
  ownerName: "Onur Elmas",
  ownerEmail: "onur.elmas04@gmail.com",
} as const;

export const siteConfig: Metadata = {
  title: "Onur Elmas | Jr. Full-Stack Developer",
  description: "Onur Elmas'ın kişisel portfolyo web sitesi. React, .NET C# ve Java ile geliştirilmiş full-stack, frontend ve backend projeleri.",
  keywords: [
    "Onur Elmas",
    "Full-Stack Developer",
    "Backend Developer",
    "Frontend Developer",
    "React Geliştirici",
    ".NET Core",
    "C#",
    "ASP.NET",
    "Java",
    "SQL Server",
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