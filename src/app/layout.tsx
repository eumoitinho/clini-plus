import { Outfit } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Providers } from "./providers";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

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
    <html lang="pt-BR" className={outfit.variable}>
      <body className="min-h-screen bg-slate-50 font-sans text-slate-900 antialiased">
        <Providers>
          <Header />
          <main className="w-full">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
