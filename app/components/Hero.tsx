"use client"
import { ArrowRight, Code2, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

// Interface para definir que o Hero aceita uma função de clique
interface HeroProps {
  onCtaClick: () => void;
}

export default function Hero({ onCtaClick }: HeroProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função para scroll suave nos links internos
  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-white pt-6 pb-20 overflow-hidden">
      {/* Background Decorativo Animado */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-50%] right-[-10%] w-[800px] h-[800px] bg-gradient-to-br from-blue-50 to-purple-50 rounded-full blur-3xl opacity-60 -z-10"
      />

      <div className="container mx-auto px-6 max-w-6xl">
        {/* NAV BAR */}
        <nav className="flex justify-between items-center mb-16 md:mb-24 relative z-50">
          <div className="text-2xl font-bold flex items-center gap-2 text-slate-900 cursor-pointer" onClick={() => scrollToSection('inicio')}>
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white">
              <Code2 size={20} />
            </div>
            R&B Labs
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-600">
            <button onClick={() => scrollToSection('stats')} className="hover:text-blue-600 transition-colors">Por que ter?</button>
            <button onClick={() => scrollToSection('cases')} className="hover:text-blue-600 transition-colors">Cases Reais</button>
            <button onClick={() => scrollToSection('metodologia')} className="hover:text-blue-600 transition-colors">Como funciona</button>
            <button onClick={() => scrollToSection('sobre')} className="hover:text-blue-600 transition-colors">Quem somos</button>
          </div>

          {/* Botão do Menu chama o Modal também */}
          <button onClick={onCtaClick} className="hidden md:block px-6 py-2 bg-slate-900 text-white text-sm font-bold rounded-lg hover:bg-slate-800 transition-all">
            Fale Conosco
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-20 left-0 w-full bg-white shadow-xl z-50 p-6 flex flex-col gap-4 md:hidden border-b border-gray-100"
          >
            <button onClick={() => scrollToSection('problemas')} className="text-left font-semibold text-slate-700 py-2 border-b border-slate-50">Por que ter?</button>
            <button onClick={() => scrollToSection('cases')} className="text-left font-semibold text-slate-700 py-2 border-b border-slate-50">Cases Reais</button>
            <button onClick={() => scrollToSection('metodologia')} className="text-left font-semibold text-slate-700 py-2 border-b border-slate-50">Como funciona</button>
            <button onClick={onCtaClick} className="text-left font-bold text-blue-600 py-2 mt-2">Agendar Diagnóstico</button>
          </motion.div>
        )}

        {/* HERO CONTENT */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-widest text-blue-700 bg-blue-50 rounded-full border border-blue-100 uppercase">
              Software House & Enterprise Solutions
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6">
              Pare de alugar software. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Construa o seu.
              </span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
              Desenvolvemos sistemas customizados para empresas que superaram as planilhas e cansaram de pagar mensalidades por softwares genéricos que travam sua operação.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              {/* BOTÃO PRINCIPAL COM AÇÃO DO MODAL */}
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onCtaClick}
                className="flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20"
              >
                Orçar Meu Sistema
                <ArrowRight size={20} />
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('cases')}
                className="flex items-center justify-center gap-2 border border-slate-300 text-slate-700 px-8 py-4 rounded-lg font-semibold hover:bg-slate-50 transition-all"
              >
                Ver Cases Reais
              </motion.button>
            </div>
            
            <div className="mt-8 flex items-center gap-4 text-sm text-slate-500">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-slate-400 border-2 border-white"></div>
              </div>
              <p>Junte-se a empresas que já economizam milhares de reais.</p>
            </div>
          </motion.div>
          
          {/* Ilustração Abstrata Animada (Lado Direito) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden md:block"
          >
            {/* Elemento flutuante Principal */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative bg-white rounded-2xl p-6 shadow-2xl border border-slate-100 z-20"
            >
              <div className="flex items-center gap-4 mb-6 border-b border-slate-100 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="text-xs text-slate-400 ml-auto font-mono">Dashboard v2.0 - Admin</div>
              </div>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="h-24 bg-blue-50 rounded-lg w-1/2 flex flex-col justify-center p-4 border border-blue-100">
                    <span className="text-xs text-blue-500 font-bold uppercase tracking-wider">Economia Anual</span>
                    <span className="text-3xl font-bold text-blue-900">R$ 124k</span>
                  </div>
                  <div className="h-24 bg-purple-50 rounded-lg w-1/2 flex flex-col justify-center p-4 border border-purple-100">
                    <span className="text-xs text-purple-500 font-bold uppercase tracking-wider">Produtividade</span>
                    <span className="text-3xl font-bold text-purple-900">+45%</span>
                  </div>
                </div>
                
                {/* Gráfico Animado */}
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-xs text-slate-400 font-bold">PERFORMANCE EM TEMPO REAL</span>
                  </div>
                  <div className="h-32 bg-slate-50 rounded-lg w-full flex items-end p-2 gap-2 border border-slate-100">
                     {[35, 60, 45, 80, 55, 90, 70].map((h, i) => (
                        <motion.div 
                          key={i}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${h}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 + (i * 0.1), ease: "circOut" }}
                          className="flex-1 bg-slate-200 rounded-t-sm hover:bg-blue-600 transition-colors cursor-pointer"
                        />
                     ))}
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Elemento decorativo atrás (Sombra/Contexto) */}
            <div className="absolute top-10 -right-10 w-full h-full bg-slate-900 rounded-2xl -z-10 opacity-5 transform rotate-6 scale-95"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl opacity-20 -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}