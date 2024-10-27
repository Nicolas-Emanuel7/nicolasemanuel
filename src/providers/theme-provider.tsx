'use client'

import * as React from 'react';
import { useState, useEffect } from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

interface ThemeProviderProps {
  children: React.ReactNode; // Define o tipo dos filhos como React.ReactNode
  attribute?: string;        // Adicione outros props conforme necessário
  defaultTheme?: string;
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Pode retornar um componente de loading se desejar

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

