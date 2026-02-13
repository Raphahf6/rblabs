"use client"
import { TrendingDown, AlertCircle, Clock, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Stats() {
  const stats = [
    {
      value: "40%",
      label: "Desperdício em Licenças SaaS",
      desc: "Das empresas pagam por softwares que suas equipes nunca usam. É dinheiro saindo do caixa todo mês sem ROI.",
      source: "Fonte: Gartner (2024)",
      icon: <TrendingDown size={24} className="text-red-400" />
    },
    {
      value: "60%",
      label: "Tempo perdido em 'Micro-tarefas'",
      desc: "Seus funcionários gastam mais da metade do dia preenchendo planilhas e corrigindo dados em vez de vender ou produzir.",
      source: "Fonte: Asana 'Anatomy of Work'",
      icon: <Clock size={24} className="text-orange-400" />
    },
    {
      value: "240%",
      label: "ROI Médio de Automação",
      desc: "Empresas que substituem processos manuais por software customizado recuperam o investimento em menos de 9 meses.",
      source: "Fonte: McKinsey Digital",
      icon: <Zap size={24} className="text-blue-400" />
    }
  ];

  return (
    <section className="bg-slate-900 py-24 relative overflow-hidden">
      {/* Background Grid Sutil */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-5"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-blue-400 font-bold mb-4 uppercase tracking-wider text-sm">
              <AlertCircle size={16} />
              Dados de Mercado
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              O custo invisível da <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                ineficiência operacional
              </span>
            </h2>
          </div>
          <p className="text-slate-400 max-w-md text-sm md:text-base border-l-2 border-slate-700 pl-6">
            Não é apenas sobre tecnologia. É sobre estancar a sangria financeira causada por processos manuais e ferramentas genéricas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-2xl hover:bg-slate-800 transition-colors group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-slate-900 rounded-lg border border-slate-700 group-hover:border-blue-500/30 transition-colors">
                  {stat.icon}
                </div>
                <span className="text-xs text-slate-500 font-mono">{stat.source}</span>
              </div>
              
              <div className="text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tight group-hover:text-blue-400 transition-colors">
                {stat.value}
              </div>
              
              <h3 className="text-xl font-bold text-slate-200 mb-3">
                {stat.label}
              </h3>
              
              <p className="text-slate-400 leading-relaxed text-sm">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Faixa de Destaque Inferior */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-blue-900/50 to-purple-900/50 border border-blue-500/20 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shrink-0 shadow-[0_0_15px_rgba(37,99,235,0.5)]">
              <Zap size={24} fill="currentColor" />
            </div>
            <div>
              <p className="text-white font-bold text-lg">Pare de pagar o "Imposto da Ineficiência"</p>
              <p className="text-blue-200 text-sm">Agende um diagnóstico e descubra quanto sua empresa pode economizar.</p>
            </div>
          </div>
          <a href="#contato" className="whitespace-nowrap px-6 py-3 bg-white text-blue-900 font-bold rounded-lg hover:bg-blue-50 transition-colors shadow-lg">
            Calcular minha economia
          </a>
        </motion.div>
      </div>
    </section>
  );
}