import type React from "react";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Orly.a - Controle Financeiro Inteligente",
  description:
    "Acompanhe seus gastos, identifique padrões e economize com sugestões inteligentes. Tenha o controle total das suas finanças pessoais.",
  icons: {
    icon: "/favicon.ico",
  },
  authors: [
    {
      name: "Elnata Correa",
      url: "https://##",
    },
  ],
  openGraph: {
    title: "Orly.a - Controle Financeiro Inteligente",
    description:
      "Acompanhe seus gastos, identifique padrões e economize com sugestões inteligentes. Tenha o controle total das suas finanças pessoais.",
    images: [
      {
        url: "https://##/zivo-page.jpeg",
        alt: "Orly.a - Controle Financeiro Inteligente",
      },
    ],
    authors: "Elnata Correa",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
import { ModeToggle } from "@/components/effects/mode-toggle";
