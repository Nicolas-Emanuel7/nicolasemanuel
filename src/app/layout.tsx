import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/ui/Navbar";
import { ThemeProvider } from "@/providers/theme-provider";
import CustomCursor from "@/components/ui/CursorLed";

export const metadata: Metadata = {
  title: "Nicolas - Portfólio",
  description: "Meu portfólio de projetos e experiências.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Componente do cursor LED */}
          <CustomCursor />

          {/* Navbar e o conteúdo da página */}
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
