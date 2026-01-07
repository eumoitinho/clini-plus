import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "CLINIPLUS Telemedicina",
    template: "%s | CLINIPLUS"
  },
  description: "Plataforma de telemedicina completa para pacientes e profissionais de saúde.",
  metadataBase: new URL("https://cliniplus.com.br")
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        <Header />
        <main className="mx-auto w-full max-w-6xl px-4 py-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
