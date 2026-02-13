"use client"
import { ClipboardList, PenTool, Code2, Rocket, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Methodology() {
  const steps = [
    {
      number: "01",
      title: "Imersão e Diagnóstico",
      icon: <ClipboardList size={28} />,
      desc: "Não adivinhamos nada. Mergulhamos na sua operação para entender os gargalos, as planilhas ocultas e onde o dinheiro está sendo perdido.",
      deliverable: "Entregável: Relatório de Viabilidade Técnica."
    },
    {
      number: "02",
      title: "Arquitetura e Prototipagem",
      icon: <PenTool size={28} />,
      desc: "Desenhamos a solução visualmente antes de escrever uma linha de código. Você aprova o design e o fluxo de telas.",
      deliverable: "Entregável: Protótipo Navegável."
    },
    {
      number: "03",
      title: "Desenvolvimento Ágil",
      icon: <Code2 size={28} />,
      desc: "Construção do software em ciclos (Sprints). A cada 15 dias, você vê uma nova funcionalidade rodando. Nada de caixas pretas.",
      deliverable: "Entregável: Acesso ao Ambiente de Homologação."
    },
    {
      number: "04",
      title: "Treinamento e Go-Live",
      icon: <Rocket size={28} />,
      desc: "Não apenas entregamos o login. Treinamos sua equipe, configuramos o servidor e acompanhamos a primeira semana de uso intenso.",
      deliverable: "Entregável: Manual do Usuário e Garantia de 3 meses."
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="metodologia">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 mb-4 text-sm font-bold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full"
          >
            Processo Transparente
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Do problema à solução em 4 etapas
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Eliminamos a incerteza do desenvolvimento de software. Nosso método garante que 
            o projeto fique dentro do prazo, do orçamento e da expectativa.
          </p>
        </div>

        <div className="relative">
          {/* Linha conectora (Desktop) */}
          <div className="hidden md:block absolute top-10 left-0 w-full h-1 bg-slate-100 -z-10">
            <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600 w-full opacity-20"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.5 }}
                className="relative bg-white pt-4 md:pt-0"
              >
                {/* Icone Flutuante */}
                <div className="w-20 h-20 mx-auto md:mx-0 bg-white border-4 border-slate-50 rounded-full flex items-center justify-center text-blue-600 shadow-lg mb-6 relative z-10 group hover:scale-110 transition-transform duration-300">
                  {step.icon}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center text-sm font-bold border-2 border-white">
                    {step.number}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 text-center md:text-left">
                  {step.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed text-sm mb-4 text-center md:text-left min-h-[80px]">
                  {step.desc}
                </p>

                <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 flex gap-2 items-start">
                  <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                  <span className="text-xs font-semibold text-slate-700">
                    {step.deliverable}
                  </span>
                </div>

                {/* Linha conectora vertical (Mobile) */}
                {idx !== steps.length - 1 && (
                  <div className="md:hidden absolute top-20 left-1/2 w-0.5 h-full bg-slate-200 -z-10 -ml-[1px]"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action Secundário */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-slate-900 text-white px-6 py-3 rounded-lg shadow-lg">
            <span className="text-sm font-medium">Você acompanha tudo em tempo real pelo nosso portal do cliente.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}