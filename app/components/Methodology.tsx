"use client"
import { Search, Map, Cpu, Rocket, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Methodology() {
  const steps = [
    {
      icon: <Search size={28} />,
      title: "1. Diagnóstico de Gargalos",
      desc: "Tudo começa com uma conversa rápida. Mapeamos onde sua empresa está perdendo tempo, dinheiro ou vendas. É um Raio-X honesto da sua operação atual.",
      color: "text-blue-600",
      bg: "bg-blue-100",
      border: "border-blue-200"
    },
    {
      icon: <Map size={28} />,
      title: "2. O Plano de Ação (Roadmap)",
      desc: "Avaliamos a melhor rota. Se existir um software pronto (SaaS) que resolva seu problema de forma barata, nós o indicamos. Não empurramos código desnecessário.",
      color: "text-purple-600",
      bg: "bg-purple-100",
      border: "border-purple-200"
    },
    {
      icon: <Cpu size={28} />,
      title: "3. Integração ou Construção",
      desc: "Com o plano aprovado, colocamos a mão na massa. Conectamos suas ferramentas atuais (APIs), implantamos Agentes de IA ou construímos o sistema customizado do zero.",
      color: "text-orange-600",
      bg: "bg-orange-100",
      border: "border-orange-200"
    },
    {
      icon: <Rocket size={28} />,
      title: "4. Operação em Piloto Automático",
      desc: "Entregamos a tecnologia rodando, treinamos a sua equipe e garantimos suporte contínuo. Sua empresa passa a operar de forma inteligente e escalável.",
      color: "text-emerald-600",
      bg: "bg-emerald-100",
      border: "border-emerald-200"
    }
  ];

  return (
    <section className="py-24 bg-[#F8FAFC]" id="metodologia">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-blue-700 uppercase bg-blue-100/50 rounded-full border border-blue-200"
          >
            Nosso Método
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Não empurramos código. <br className="hidden md:block" />
            <span className="text-blue-600">Nós prescrevemos soluções.</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            Atuamos como seu parceiro estratégico de tecnologia. O foco não é vender um sistema caro, é resolver o seu problema da forma mais eficiente e lucrativa possível.
          </p>
        </div>

        <div className="relative">
          {/* Linha conectora vertical (Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-slate-200 -translate-x-1/2 rounded-full"></div>

          <div className="space-y-12 md:space-y-0 relative">
            {steps.map((step, idx) => (
              <div key={idx} className="relative md:h-48">
                
                {/* Linha conectora mobile */}
                {idx !== steps.length - 1 && (
                  <div className="md:hidden absolute left-8 top-16 bottom-[-3rem] w-0.5 bg-slate-200"></div>
                )}

                <motion.div 
                  initial={{ opacity: 0, y: 20, x: idx % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0 ${
                    idx % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                  } w-full`}
                >
                  
                  {/* Card de Conteúdo */}
                  <div className={`md:w-[45%] bg-white p-8 rounded-2xl border ${step.border} shadow-sm hover:shadow-md transition-shadow relative z-10 w-full ml-16 md:ml-0`}>
                    
                    {/* Número Flutuante no Mobile */}
                    <div className="md:hidden absolute -left-16 top-6 w-12 h-12 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center font-black text-slate-300 z-20">
                      {idx + 1}
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-3">
                      <span className={`p-2 rounded-lg ${step.bg} ${step.color} shrink-0`}>
                        {step.icon}
                      </span>
                      {step.title}
                    </h3>
                    <p className="text-slate-600 font-medium leading-relaxed text-sm">
                      {step.desc}
                    </p>
                  </div>

                  {/* Círculo Central (Desktop) */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border-4 border-slate-100 items-center justify-center font-black text-slate-400 z-20 shadow-sm">
                    {idx + 1}
                  </div>

                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Resumo da Metodologia */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 bg-slate-900 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/20 blur-[100px] rounded-full pointer-events-none"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              A tecnologia deve trabalhar para você, e não o contrário.
            </h3>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Seja integrando um software de prateleira ou construindo uma IA do zero, nosso objetivo é um só: reduzir seus custos e aumentar seus lucros.
            </p>
            <a href="#contato" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1">
              Agendar minha Consultoria Gratuita
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}