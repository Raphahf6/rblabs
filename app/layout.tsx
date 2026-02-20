import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

// Fonte para os textos gerais (limpa, moderna e geométrica)
const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: 'swap',
});

// Fonte para os Títulos (elegante, culta, estilo consultoria enterprise)
const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair",
  display: 'swap',
});

// URL final do seu site (mude quando tiver o domínio oficial)
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.rbdigital.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "R&B Digital | Consultoria em Transformação Digital e IA",
    template: "%s | R&B Digital"
  },
  description: "Aceleramos pequenas e médias empresas através de Inteligência Artificial, automação de processos e engenharia de software sob medida. Escale sua operação.",
  keywords: [
    "Transformação Digital", 
    "Consultoria de Tecnologia", 
    "Inteligência Artificial para Empresas", 
    "Automação de Processos", 
    "Engenharia de Software", 
    "Integração de Sistemas", 
    "Agentes de IA"
  ],
  authors: [{ name: "Raphael", url: "https://www.linkedin.com/in/raphaml5" }],
  creator: "R&B Digital",
  
  // Configuração para WhatsApp, LinkedIn, Facebook (Open Graph)
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: BASE_URL,
    title: "R&B Digital | Aceleração e Transformação de Negócios",
    description: "Negócios que operam com tecnologia sob medida crescem 5x mais rápido. Agende um mapeamento da sua operação.",
    siteName: "R&B Digital",
    images: [
      {
        url: "/opengraph-image.png", // Certifique-se de ter essa imagem na pasta /public
        width: 1200,
        height: 630,
        alt: "R&B Digital - Consultoria Tecnológica",
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
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-zinc-50 text-zinc-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}