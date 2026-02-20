"use client"
import { MessageCircle, CalendarClock, TrendingUp, ArrowRight, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CaseStudies() {
  const cases = [
    {
      niche: "Delivery / Alimentação",
      title: "O Fim do Caos na Sexta-feira à Noite",
      icon: <MessageCircle size={24} className="text-green-600" />,
      before: "A equipe demorava 40 minutos para responder os clientes no WhatsApp em dias de pico. O cliente desistia, pedia no concorrente e a empresa perdia milhares de reais em vendas ignoradas.",
      after: "Implementamos um Agente de IA no WhatsApp. Agora, o robô atende vários clientes ao mesmo tempo, tira dúvidas do cardápio e manda o pedido formatado para a cozinha.",
      result: "+35% de aumento nas vendas (recuperação de clientes perdidos por demora).",
      color: "bg-green-50 border-green-200"
    },
    {
      niche: "Clínica de Estética",
      title: "Agenda Lotada e Sem Furos",
      icon: <CalendarClock size={24} className="text-purple-600" />,
      before: "A recepcionista passava o dia todo respondendo 'Qual o valor do procedimento?' no WhatsApp. A agenda era no papel e a taxa de clientes que faltavam (no-show) passava de 20%.",
      after: "Criamos um sistema próprio de agendamento online integrado ao WhatsApp. O cliente agenda sozinho e recebe lembretes automáticos 24h antes da consulta.",
      result: "Taxa de faltas caiu para quase zero e a recepcionista virou uma vendedora.",
      color: "bg-purple-50 border-purple-200"
    },
    {
      niche: "Prestação de Serviços",
      title: "Aposentando as 15 Planilhas",
      icon: <TrendingUp size={24} className="text-blue-600" />,
      before: "O dono da empresa passava o fim de semana inteiro cruzando dados de planilhas diferentes para tentar entender se a empresa deu lucro ou prejuízo no mês.",
      after: "Desenvolvemos um Painel de Gestão (Dashboard) único e sob medida. Todos os dados da operação, do financeiro ao estoque, atualizados em tempo real na tela do celular.",
      result: "O dono recuperou seus finais de semana e agora toma decisões baseadas em dados reais.",
      color: "bg-blue-50 border-blue-200"
    }
  ];

  return (
    <section className="py-24 bg-[#F5F7FB]" id="cases">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-blue-700 uppercase bg-blue-100/50 rounded-full border border-blue-200"
          >
            Histórias Reais
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Tirando empresas do caos <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              e preparando para escalar
            </span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto font-medium">
            Veja como transformamos negócios locais comuns em operações inteligentes, rápidas e lucrativas através de tecnologia acessível.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col"
            >
              {/* Header do Card */}
              <div className={`${item.color} px-6 py-4 flex items-center justify-between border-b`}>
                <span className="text-xs font-black uppercase tracking-widest text-slate-700">
                  {item.niche}
                </span>
                <div className="bg-white p-2 rounded-lg shadow-sm">
                  {item.icon}
                </div>
              </div>

              {/* Corpo do Card */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-6 leading-tight">
                  {item.title}
                </h3>
                
                <div className="relative pl-4 mb-6">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-400 rounded-full"></div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">O Problema</p>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium">
                    {item.before}
                  </p>
                </div>

                <div className="relative pl-4 mb-8">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 rounded-full"></div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">A Solução R&B</p>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium">
                    {item.after}
                  </p>
                </div>

                {/* Resultado Destacado */}
                <div className="mt-auto bg-slate-50 p-4 rounded-xl border border-slate-100 flex gap-3 items-start">
                  <Quote size={24} className="text-slate-300 shrink-0 rotate-180" />
                  <p className="text-sm font-bold text-slate-800 leading-snug">
                    {item.result}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a href="#contato" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors">
            Quero esse mesmo resultado na minha empresa
            <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}