"use client"
import { Clock, TrendingDown, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PainPoints() {
  const pains = [
    {
      icon: <Users size={32} />,
      title: "Equipe cara fazendo trabalho de robô",
      desc: "Você paga salários para funcionários passarem o dia copiando dados do WhatsApp para planilhas ou sistemas engessados. É um desperdício de talento e de dinheiro.",
      color: "text-orange-500",
      bg: "bg-orange-50"
    },
    {
      icon: <Clock size={32} />,
      title: "Perdendo vendas por demora no WhatsApp",
      desc: "O cliente moderno não espera 2 horas por uma resposta. Se você não atende na hora, ele fecha com o concorrente. A falta de automação está matando suas vendas.",
      color: "text-red-500",
      bg: "bg-red-50"
    },
    {
      icon: <TrendingDown size={32} />,
      title: "Decisões no escuro e caos organizado",
      desc: "Você fatura, mas não sabe exatamente a margem de lucro porque a operação é um Frankenstein de planilhas e papéis. Escalar o negócio assim é impossível.",
      color: "text-slate-700",
      bg: "bg-slate-100"
    }
  ];

  return (
    <section className="py-24 bg-white" id="problemas">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">
            A dura realidade de quem <br className="hidden md:block" /> ainda ignora a tecnologia
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto font-medium">
            Se a sua empresa apresenta algum destes 3 sintomas, você está pagando o "imposto da ineficiência" todos os meses.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pains.map((pain, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow relative overflow-hidden group"
            >
              <div className={`w-14 h-14 ${pain.bg} ${pain.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {pain.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug">
                {pain.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {pain.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}