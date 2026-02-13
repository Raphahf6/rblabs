import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// URL final do seu site (mude quando tiver o domínio)
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.rblabs.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "R&B Labs | Software House & Sistemas Sob Medida",
    template: "%s | R&B Labs"
  },
  description: "Desenvolvimento de software corporativo, criação de SaaS, automação de processos e aplicativos. Transforme planilhas em sistemas de alta performance.",
  keywords: [
    "Software House", 
    "Desenvolvimento de Sistemas", 
    "Criar SaaS", 
    "Automação Comercial", 
    "App para empresas", 
    "Consultoria de TI", 
    "Sistema de Gestão Customizado"
  ],
  authors: [{ name: "Raphael", url: "https://www.linkedin.com/in/raphaml5" }],
  creator: "R&B Labs",
  
  // Configuração para WhatsApp, LinkedIn, Facebook (Open Graph)
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: BASE_URL,
    title: "R&B Labs | Pare de alugar software. Construa o seu.",
    description: "Sua empresa merece um sistema próprio. Desenvolvimento ágil, código escalável e foco no ROI. Agende um diagnóstico.",
    siteName: "R&B Labs",
    images: [
      {
        url: "/opengraph-image.png", // A imagem que criamos no passo 1
        width: 1200,
        height: 630,
        alt: "R&B Labs Hero Section",
      },
    ],
  },
  
  // Configuração para Robôs de Busca
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-50 text-slate-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}