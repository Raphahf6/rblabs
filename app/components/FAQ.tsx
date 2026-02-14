"use client"
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "O software será meu ou vou pagar mensalidade pra sempre?",
      a: "O software é um ativo seu. Diferente de um SaaS onde você paga 'aluguel', na R&B Labs você investe no desenvolvimento e a Propriedade Intelectual (código-fonte) é transferida para sua empresa ao final do contrato. Você só paga manutenção se quiser nosso suporte contínuo."
    },
    {
      q: "Quanto custa desenvolver um sistema sob medida?",
      a: "Como cada operação é única, o investimento varia conforme a complexidade e as tecnologias escolhidas. Não trabalhamos com preços tabelados. Nosso compromisso é desenhar uma solução que se pague (ROI) em poucos meses com a economia gerada ou o aumento de receita. Agende o diagnóstico para recebermos um orçamento exato para o seu desafio."
    },
    {
      q: "Como funciona o pagamento?",
      a: "Trabalhamos com um fluxo facilitado: uma entrada para o Blueprint (Diagnóstico e Desenho) e o restante do desenvolvimento parcelado conforme as entregas (Sprints) acontecem. Financiamos o desenvolvimento para não descapitalizar sua operação."
    },
    {
      q: "E se eu precisar de suporte depois da entrega?",
      a: "Oferecemos 3 meses de garantia total contra bugs. Após esse período, 90% dos nossos clientes optam pelo nosso contrato de Suporte & Evolução (SLA), garantindo que o sistema esteja sempre atualizado e seguro."
    },
    {
      q: "Vocês atendem empresas fora de São Paulo?",
      a: "Sim. Nascemos digitais. Todo o processo de imersão, reuniões e treinamentos é feito via vídeo-conferência, permitindo que atendamos clientes em todo o Brasil e no exterior com a mesma qualidade."
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Perguntas Frequentes</h2>
          <p className="text-slate-600">Tire suas dúvidas antes de agendar o diagnóstico.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <span className="font-bold text-slate-800 text-lg pr-8">{faq.q}</span>
                {openIndex === idx ? 
                  <Minus className="text-blue-600 shrink-0" /> : 
                  <Plus className="text-slate-400 shrink-0" />
                }
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}