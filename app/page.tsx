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
      
      {/* 12. CTA FINAL (Chamada para Ação Definitiva) */}
      <section id="contato" className="bg-blue-900 py-24 text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-10"></div>
        <FadeIn direction="up">
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Vamos calcular quanto sua empresa perde por não ter sistema próprio?
            </h2>
            <p className="text-blue-200 mb-10 text-lg">
              Agende uma sessão de diagnóstico gratuita. Analisamos seu processo atual e desenhamos a solução ideal.
            </p>
            
            <button 
              onClick={openModal}
              className="inline-block bg-white text-blue-900 hover:bg-blue-50 font-bold py-5 px-10 rounded-lg transition-all shadow-xl hover:shadow-2xl hover:scale-105 duration-300 transform"
            >
              Agendar Diagnóstico Agora
            </button>
            
          </div>
        </FadeIn>
      </section>

      <Footer />

      {/* O MODAL (Fica invisível até ser chamado) */}
      <DiagnosisModal isOpen={isModalOpen} onClose={closeModal} />
    </main>
  );
}