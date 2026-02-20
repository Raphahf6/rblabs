"use client"
import { ShieldCheck, Target, Users, Zap, CheckCircle2, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="py-24 bg-white overflow-hidden relative" id="sobre">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 skew-x-12 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Lado Esquerdo: O Card de Autoridade (Estilo Startup Premium) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full lg:w-5/12 relative perspective-1000"
          >
            {/* Sombras e brilhos decorativos do card */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-3xl transform rotate-3 opacity-20 blur-lg"></div>
            <div className="absolute inset-0 bg-blue-500 rounded-3xl transform -rotate-2 opacity-10"></div>
            
            <div className="relative bg-slate-900 p-8 md:p-10 rounded-3xl text-white shadow-2xl border border-slate-800 overflow-hidden group">
              {/* Efeito de luz no hover */}
              <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-blue-500/10 rounded-full blur-[50px] transform group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>

              <div className="absolute -top-4 -right-4 text-slate-800/50 transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
                <ShieldCheck size={140} />
              </div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-blue-500/30">
                  <Zap size={14} />
                  Nosso DNA
                </div>
                
                <h3 className="text-2xl md:text-3xl font-black mb-6 tracking-tight leading-snug">
                  Cultura de Alta <br />Performance
                </h3>
                
                <p className="text-slate-400 leading-relaxed font-medium mb-8 text-sm md:text-base">
                  "Forjados na criação de operações e sistemas onde falhar não é uma opção, nós trazemos o rigor técnico das grandes corporações para a realidade do seu negócio. Não construímos software descartável; construímos alicerces para o seu crescimento."
                </p>
                
                <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
                  <div>
                    <p className="font-black text-lg text-white tracking-tight">Raphael</p>
                    <p className="text-blue-400 text-sm font-bold">Fundador & Consultor Técnico</p>
                  </div>
                  <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center border border-slate-700 text-slate-400">
                    <Code2 size={20} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Lado Direito: Texto Institucional Dinâmico */}
          <div className="w-full lg:w-7/12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-[1.1]">
                Nós não vendemos sistemas. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Construímos motores de lucro.
                </span>
              </h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium max-w-2xl">
                A R&B Digital nasceu de uma frustração clara: ver empresas incríveis travadas por processos manuais ou reféns de mensalidades caras que não resolvem o problema real da operação.
              </p>
            </motion.div>
            
            <div className="space-y-6">
              {/* Item 1 */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex gap-5 p-5 rounded-2xl border border-transparent hover:border-blue-100 hover:bg-blue-50/50 hover:shadow-sm transition-all group"
              >
                <div className="p-3 bg-blue-100 rounded-xl text-blue-600 h-fit shrink-0 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                  <Target size={24} />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 text-lg mb-1 flex items-center gap-2">
                    Foco Absoluto em ROI
                    <CheckCircle2 size={16} className="text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h4>
                  <p className="text-slate-600 leading-relaxed font-medium text-sm md:text-base">
                    Cada automação que desenhamos tem um objetivo claro: devolver tempo produtivo para a sua equipe ou colocar dinheiro diretamente no seu caixa.
                  </p>
                </div>
              </motion.div>

              {/* Item 2 */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex gap-5 p-5 rounded-2xl border border-transparent hover:border-purple-100 hover:bg-purple-50/50 hover:shadow-sm transition-all group"
              >
                <div className="p-3 bg-purple-100 rounded-xl text-purple-600 h-fit shrink-0 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all shadow-sm">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 text-lg mb-1 flex items-center gap-2">
                    Parceria Estratégica
                    <CheckCircle2 size={16} className="text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h4>
                  <p className="text-slate-600 leading-relaxed font-medium text-sm md:text-base">
                    Não somos apenas "fazendores de código". Atuamos como seu braço direito tecnológico, sugerindo as melhores rotas e evoluindo sua operação a cada novo desafio.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}