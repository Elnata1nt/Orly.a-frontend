"use client"
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useEffect, useState } from "react";
import type { ThemeProviderProps } from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false);

  // Quando o componente é montado, define 'mounted' como true
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Durante a hidratação, retorna o conteúdo sem o ThemeProvider
    return <>{children}</>;
  }

  // Depois que a hidratação foi concluída, podemos renderizar o ThemeProvider
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
