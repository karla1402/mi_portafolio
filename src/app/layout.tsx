import { Header } from "@/components/header";
import { PageWrapper } from "@/components/page-wrapper";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portafolio | Luis Cortés",
  description: "Página personal de Luis Cortés - Estudiante de IA y Desarrollador Web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <PageWrapper>
          <Header />
          {children}
        </PageWrapper>
      </body>
    </html>
  );
}
