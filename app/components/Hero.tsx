"use client"
import { ArrowRight, Code2, Menu, X, TrendingUp, CheckCircle2, Rocket, Bot, BarChart } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeroProps {
  onCtaClick: () => void;
}

export default function Hero({ onCtaClick }: HeroProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-[#F8FAFC] pt-6 pb-20 md:pb-32 overflow-hidden font-sans" id="inicio">
      {/* Background Positivo e Iluminado */}
      <div className="absolute top-0 inset-x-0 h-full bg-gradient-to-b from-blue-50/50 to-white -z-10"></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-400/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl">
        {/* NAV BAR */}
        <nav className="flex justify-between items-center mb-16 md:mb-24 relative z-[60]">
          <div className="text-2xl font-black flex items-center gap-3 text-slate-900 cursor-pointer tracking-tight" onClick={() => scrollToSection('inicio')}>
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
              <Code2 size={22} />
            </div>
            R&B Digital
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex gap-8 text-sm font-bold text-slate-600">
            <button onClick={() => scrollToSection('dados')} className="hover:text-blue-600 transition-colors">O Cenário</button>
            <button onClick={() => scrollToSection('metodologia')} className="hover:text-blue-600 transition-colors">Como Ajudamos</button>
            <button onClick={() => scrollToSection('solucoes')} className="hover:text-blue-600 transition-colors">Soluções</button>
          </div>

          <button onClick={onCtaClick} className="hidden md:block px-6 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-full hover:bg-blue-600 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
            Agendar Consultoria
          </button>

          {/* Botão Hambúrguer Mobile */}
          <button className="md:hidden text-slate-900 p-2 z-[70]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* MENU MOBILE OVERLAY */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-0 bg-white z-[55] flex flex-col p-8 md:hidden"
            >
              <div className="flex flex-col gap-8 mt-20">
                <button onClick={() => scrollToSection('dados')} className="text-2xl font-black text-slate-900 text-left">O Cenário</button>
                <button onClick={() => scrollToSection('metodologia')} className="text-2xl font-black text-slate-900 text-left">Como Ajudamos</button>
                <button onClick={() => scrollToSection('solucoes')} className="text-2xl font-black text-slate-900 text-left">Soluções</button>
                <button onClick={() => scrollToSection('faq')} className="text-2xl font-black text-slate-900 text-left">Dúvidas</button>
                
                <hr className="border-slate-100" />
                
                <button 
                  onClick={() => { setIsMenuOpen(false); onCtaClick(); }}
                  className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold text-lg shadow-lg"
                >
                  Agendar Consultoria
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* HERO CONTENT */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-xs font-black tracking-widest text-emerald-700 bg-emerald-50 rounded-full border border-emerald-200 uppercase shadow-sm">
              <TrendingUp size={16} />
              Acelerador de Negócios
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] mb-6 tracking-tight">
              Pequenos e médios negócios que usam a tecnologia a seu favor crescem <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">3x mais rápido.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed font-medium">
              Transforme a operação da sua empresa. A R&B Digital cria automações, sistemas sob medida e agentes de IA para você <strong className="text-slate-800">escalar seus lucros e atender mais clientes</strong> sem precisar inchar a sua equipe.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onCtaClick}
                className="flex items-center justify-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-xl font-black text-lg hover:bg-blue-700 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
              >
                Descobrir Meu Potencial
                <ArrowRight size={20} />
              </motion.button>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm font-bold text-slate-600">
              <div className="flex items-center gap-2">
                <Bot size={18} className="text-blue-500" />
                Atendimento Automatizado
              </div>
              <div className="flex items-center gap-2">
                <Rocket size={18} className="text-emerald-500" />
                Processos Ágeis
              </div>
              <div className="flex items-center gap-2">
                <BarChart size={18} className="text-purple-500" />
                Decisões por Dados
              </div>
            </div>
          </motion.div>
          
          {/* Lado Direito: O Visual do Crescimento */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block perspective-1000"
          >
             <div className="w-full h-[500px] relative">
                <div className="absolute top-8 right-0 w-[360px] bg-white rounded-2xl shadow-xl border border-slate-100 p-6 transform rotate-3">
                  <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                        <Rocket size={20} />
                      </div>
                      <div>
                        <p className="font-bold text-slate-800">Produtividade da Equipe</p>
                        <p className="text-xs text-emerald-600 font-bold">+140 horas salvas/mês</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-lg border border-slate-100">
                      <CheckCircle2 size={18} className="text-emerald-500" />
                      <span className="text-sm font-bold text-slate-700">Automação de WhatsApp: Ativa</span>
                    </div>
                    <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-lg border border-slate-100">
                      <CheckCircle2 size={18} className="text-emerald-500" />
                      <span className="text-sm font-bold text-slate-700">Sincronização de Dados: Ativa</span>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-8 left-4 w-[380px] bg-slate-900 rounded-2xl shadow-2xl border border-slate-800 p-7 transform -rotate-2 z-10">
                  <div className="absolute -top-4 -left-4 bg-blue-600 text-white text-xs font-black px-4 py-2 rounded-xl shadow-lg flex items-center gap-2 uppercase tracking-wider">
                    <TrendingUp size={16} />
                    Crescimento 3x
                  </div>
                  
                  <div className="mt-4 mb-6">
                    <p className="text-sm font-bold text-slate-400 mb-1">Faturamento Projetado</p>
                    <div className="flex items-end gap-3">
                      <p className="text-4xl font-black text-white">R$ 184k</p>
                      <span className="text-sm font-bold text-emerald-400 mb-1 bg-emerald-400/10 px-2 py-0.5 rounded flex items-center gap-1">
                        <TrendingUp size={14} /> +312%
                      </span>
                    </div>
                  </div>

                  <div className="h-32 flex items-end gap-2 pt-4 border-t border-slate-800">
                    <div className="w-full bg-slate-800 rounded-t-md h-[20%]"></div>
                    <div className="w-full bg-slate-800 rounded-t-md h-[35%]"></div>
                    <div className="w-full bg-slate-800 rounded-t-md h-[60%]"></div>
                    <div className="w-full bg-gradient-to-t from-blue-600 to-emerald-400 rounded-t-md h-[100%]"></div>
                  </div>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}