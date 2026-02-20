"use client"
import { useState } from 'react';
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import PainPoints from "@/components/PainPoints";
import CaseStudies from "@/components/CaseStudies";
import Methodology from "@/components/Methodology";
import Comparison from "@/components/Comparison";
import Solutions from "@/components/Solutions";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import TechStack from "@/components/TechStack";
import Footer from "@/components/Footer";
import DiagnosisModal from '@/components/DiagnosisModal';
import FadeIn from "@/components/ui/FadeIn"; // Certifique-se de ter criado este componente

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <main className="min-h-screen flex flex-col overflow-x-hidden bg-white">
      
      {/* 1. HERO (Passamos a função openModal para o botão principal) */}
      <div id="inicio">
        <Hero onCtaClick={openModal} />
      </div>

      {/* 2. STATS (Prova Lógica - Dados de Mercado) */}
      <div id="stats">
      <FadeIn delay={0.2}>
        <Stats />
      </FadeIn>
      </div>
      {/* 3. PAIN POINTS (A Dor do Cliente) */}
      <div id="problemas">
        <FadeIn>
          <PainPoints />
        </FadeIn>
      </div>

      {/* 4. CASES (Prova Social / Storytelling) */}
      <div id="cases">
        <FadeIn>
          <CaseStudies />
        </FadeIn>
      </div>

      {/* 5. METODOLOGIA (Segurança - Como trabalhamos) */}
      <div id="metodologia">
        <FadeIn>
          <Methodology />
        </FadeIn>
      </div>

      {/* 6. COMPARAÇÃO (SaaS vs Custom - Matador de Objeção Financeira) */}
      <FadeIn>
        <Comparison />
      </FadeIn>

      {/* 7. SOLUÇÕES (O Técnico - O que entregamos) */}
      <div id="solucoes">
        <FadeIn>
          <Solutions />
        </FadeIn>
      </div>

      {/* 8. DEPOIMENTOS (Validação Social) */}
      <div id="depoimentos">
        <FadeIn>
          <Testimonials />
        </FadeIn>
      </div>

      {/* 9. SOBRE (Autoridade do Fundador) */}
      <div id="sobre">
        <FadeIn>
          <About />
        </FadeIn>
      </div>

      {/* 10. FAQ (Matador de Medos Finais) */}
      <FadeIn>
        <FAQ />
      </FadeIn>

      {/* 11. TECH STACK (Autoridade Técnica) */}
      <TechStack />
      
      {/* CTA FINAL (Chamada para Ação PME) */}
      <section id="contato" className="bg-slate-900 py-24 text-center px-4 relative overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600 rounded-full blur-[120px] opacity-20"></div>
        
        <FadeIn direction="up">
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
              O mundo mudou. Quem não usa IA e automação, vai ficar para trás.
            </h2>
            <p className="text-slate-300 mb-10 text-lg leading-relaxed">
              Não espere seu concorrente roubar seus clientes para tomar uma atitude. Agende um diagnóstico rápido e descubra como a R&B Labs pode digitalizar sua operação em poucas semanas.
            </p>
            
            <button 
              onClick={openModal}
              className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-bold py-5 px-10 rounded-full transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] hover:bg-blue-500 hover:-translate-y-1 duration-300"
            >
              Fazer Diagnóstico Gratuito Agora
            </button>
            
            <p className="mt-6 text-slate-400 text-xs uppercase tracking-widest font-bold">
              Atendimento focado e sem jargões técnicos.
            </p>
          </div>
        </FadeIn>
      </section>

      <Footer />

      {/* O MODAL (Fica invisível até ser chamado) */}
      <DiagnosisModal isOpen={isModalOpen} onClose={closeModal} />
    </main>
  );
}