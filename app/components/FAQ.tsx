"use client"
import { useState } from 'react';
import { Plus, Minus, MessageCircleQuestion } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Como funciona a Consultoria de Transformação Digital?",
      a: "Nós atuamos como seu braço direito tecnológico. Primeiro, fazemos um diagnóstico gratuito para identificar onde sua empresa perde tempo e dinheiro. Depois, desenhamos a melhor rota: pode ser a implantação de uma IA no WhatsApp, a integração de ferramentas que você já usa ou a criação de um sistema único. O foco é sempre aumentar seus lucros e presença digital."
    },
    {
      q: "Vou ter que pagar mensalidade para sempre?",
      a: "Não. Na R&B Digital, acreditamos em ativos próprios. Se construirmos um software para você, o código é seu. Diferente de plataformas prontas onde você paga 'aluguel' eterno, aqui você investe na sua própria tecnologia. Você só mantém uma mensalidade se optar pelo nosso suporte contínuo para evoluir o sistema."
    },
    {
      q: "Minha equipe é pequena. Vale a pena automatizar agora?",
      a: "É o momento ideal. Pequenos negócios que usam tecnologia crescem até 3x mais rápido porque conseguem atender 10x mais clientes sem precisar contratar mais gente. A automação libera sua equipe para focar no que realmente traz dinheiro: vendas e estratégia."
    },
    {
      q: "A IA no WhatsApp realmente substitui um atendente?",
      a: "Ela atua como um 'filtro de elite'. A IA atende em segundos, tira dúvidas frequentes e qualifica o lead. Se o cliente estiver pronto para comprar ou precisar de algo complexo, ela passa para o seu time humano já com o histórico pronto. Isso elimina o tempo perdido com curiosos."
    },
    {
      q: "Qual o prazo médio para ver os primeiros resultados?",
      a: "Depende da solução escolhida, mas integrações de IA e automações de processos costumam entrar no ar em menos de 15 dias. Nosso objetivo é que a solução se pague (ROI) nos primeiros meses de operação através da economia de tempo e aumento de vendas."
    },
    {
      q: "E se eu precisar de suporte ou o sistema precisar de mudanças?",
      a: "Estamos juntos nessa. Oferecemos garantia total após a entrega e temos planos de suporte e evolução. Como somos seus consultores, acompanhamos o crescimento da sua empresa para garantir que a tecnologia nunca fique obsoleta."
    }
  ];

  return (
    <section className="py-24 bg-white" id="faq">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-blue-700 uppercase bg-blue-50 rounded-full border border-blue-100"
          >
            <MessageCircleQuestion size={16} />
            Transparência Total
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="text-slate-600 text-lg font-medium">
            Tudo o que você precisa saber para levar sua empresa ao próximo nível.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                openIndex === idx 
                  ? 'border-blue-500 bg-white shadow-lg shadow-blue-900/5 ring-1 ring-blue-500/20' 
                  : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <span className={`font-bold text-lg pr-8 transition-colors ${
                  openIndex === idx ? 'text-blue-900' : 'text-slate-800'
                }`}>
                  {faq.q}
                </span>
                <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                  openIndex === idx ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'
                }`}>
                  {openIndex === idx ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-slate-600 leading-relaxed font-medium">
                      <div className="pt-4 border-t border-slate-100">
                        {faq.a}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-slate-500 mb-4 font-medium">Ainda tem dúvidas?</p>
          <a href="#inicio" className="inline-flex items-center justify-center font-bold text-blue-600 hover:text-blue-700 hover:underline transition-all">
            Inicie um diagnóstico com nossa IA Sofia no topo da página
          </a>
        </motion.div>
      </div>
    </section>
  );
}