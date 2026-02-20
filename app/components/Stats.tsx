"use client"
import { TrendingUp, AlertCircle, Clock, Zap, Bot } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Stats() {
  const stats = [
    {
      value: "45%",
      label: "Trabalho Automatizável",
      desc: "Quase metade das tarefas diárias da sua equipe já podem ser feitas por IAs e integrações que não dormem e não erram.",
      source: "Fonte: McKinsey & Company",
      icon: <Bot size={24} className="text-purple-400" />
    },
    {
      value: "60%",
      label: "Tempo Perdido",
      desc: "Gasto com o 'trabalho invisível': preencher planilhas, caçar informações no WhatsApp e corrigir erros manuais.",
      source: "Fonte: Índice Anatomy of Work",
      icon: <Clock size={24} className="text-orange-400" />
    },
    {
      value: "3x",
      label: "Crescimento Acelerado",
      desc: "Pequenas e médias empresas que adotam automação crescem, em média, três vezes mais rápido que os concorrentes analógicos.",
      source: "Fonte: MIT Sloan / Deloitte",
      icon: <TrendingUp size={24} className="text-green-400" />
    }
  ];

  return (
    <section className="bg-slate-900 py-24 relative overflow-hidden" id="dados">
      {/* Background Grid Sutil */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-5 pointer-events-none"></div>
      
      {/* Glow Decorativo */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-blue-400 font-bold mb-4 uppercase tracking-wider text-sm">
              <AlertCircle size={16} />
              O Custo da Inércia
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tight">
              O trabalho braçal está <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                sugando o seu lucro.
              </span>
            </h2>
          </div>
          <p className="text-slate-400 max-w-md text-sm md:text-base border-l-2 border-slate-700 pl-6 font-medium">
            Não é sobre comprar mais tecnologia. É sobre estancar a sangria financeira causada por processos manuais que já deveriam estar automatizados.
          </p>
        </div>

        {/* Cards de Estatísticas */}
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 p-8 rounded-3xl hover:bg-slate-800/80 hover:border-slate-600 transition-all group flex flex-col"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-700/50 group-hover:scale-110 transition-transform shadow-inner">
                  {stat.icon}
                </div>
                <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">{stat.source}</span>
              </div>
              
              <div className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tighter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all">
                {stat.value}
              </div>
              
              <h3 className="text-xl font-bold text-slate-200 mb-3 leading-snug">
                {stat.label}
              </h3>
              
              <p className="text-slate-400 leading-relaxed text-sm font-medium mt-auto">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Faixa de Destaque Inferior (Call to Action Consultivo) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 relative overflow-hidden bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl"
        >
          {/* Efeito de brilho no card inferior */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 pointer-events-none"></div>

          <div className="flex items-center gap-5 relative z-10">
            <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white shrink-0 shadow-[0_0_20px_rgba(37,99,235,0.4)]">
              <Zap size={24} fill="currentColor" />
            </div>
            <div>
              <p className="text-white font-black text-xl mb-1 tracking-tight">Pare de pagar o "Imposto da Ineficiência"</p>
              <p className="text-slate-400 text-sm font-medium">Agende um mapeamento gratuito e descubra quais tarefas da sua empresa podem ser automatizadas hoje.</p>
            </div>
          </div>
          
          <a href="#contato" className="relative z-10 whitespace-nowrap px-8 py-4 bg-white text-slate-900 font-black rounded-xl hover:bg-blue-50 transition-colors shadow-xl hover:scale-105 duration-300">
            Mapear Minha Operação
          </a>
        </motion.div>
        
      </div>
    </section>
  );
}