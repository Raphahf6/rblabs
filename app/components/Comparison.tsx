"use client"
import { Check, X, AlertTriangle, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Comparison() {
  return (
    <section className="py-24 bg-white" id="comparacao">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-blue-700 uppercase bg-blue-100/50 rounded-full border border-blue-200"
          >
            A Escolha é Sua
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Por que investir em tecnologia <br className="hidden md:block"/>
            <span className="text-blue-600">hoje?</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto font-medium">
            A diferença entre uma empresa que vive apagando incêndios e uma operação desenhada para crescer em piloto automático.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* Coluna Antiga (Manual - Ruim) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-10 border border-slate-200 bg-slate-50/50 rounded-3xl relative"
          >
            <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3">
              <span className="p-2.5 bg-slate-200 rounded-xl text-slate-600"><AlertTriangle size={24}/></span>
              A Operação Tradicional
            </h3>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <div className="mt-1 bg-red-100 p-1 rounded-full shrink-0">
                  <X className="text-red-500" size={16} />
                </div>
                <div>
                  <p className="font-bold text-slate-800 mb-1">Gargalo no Atendimento</p>
                  <p className="text-sm text-slate-600 leading-relaxed">Sua equipe demora horas para responder orçamentos no WhatsApp. Clientes desistem.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="mt-1 bg-red-100 p-1 rounded-full shrink-0">
                  <X className="text-red-500" size={16} />
                </div>
                <div>
                  <p className="font-bold text-slate-800 mb-1">Decisões no "Eu Acho"</p>
                  <p className="text-sm text-slate-600 leading-relaxed">Dados espalhados em cadernos e planilhas confusas. Fechar o caixa do mês é um pesadelo.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="mt-1 bg-red-100 p-1 rounded-full shrink-0">
                  <X className="text-red-500" size={16} />
                </div>
                <div>
                  <p className="font-bold text-slate-800 mb-1">Folha de Pagamento Inchada</p>
                  <p className="text-sm text-slate-600 leading-relaxed">Para a empresa crescer, você é obrigado a contratar mais pessoas para fazer trabalho braçal.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="mt-1 bg-red-100 p-1 rounded-full shrink-0">
                  <X className="text-red-500" size={16} />
                </div>
                <div>
                  <p className="font-bold text-slate-800 mb-1">Dono Escravo do Negócio</p>
                  <p className="text-sm text-slate-600 leading-relaxed">A empresa não roda sem você. Se o dono tirar férias, a operação inteira para.</p>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Coluna R&B (Inteligente - Bom) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-10 border-2 border-blue-500 bg-gradient-to-br from-blue-50 to-white rounded-3xl shadow-xl relative overflow-hidden"
          >
            {/* Tag de Recomendado */}
            <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-black px-4 py-2 rounded-bl-2xl tracking-widest uppercase">
              O Futuro do seu negócio
            </div>
            
            <h3 className="text-2xl font-black text-blue-900 mb-8 flex items-center gap-3">
              <span className="p-2.5 bg-blue-600 shadow-md rounded-xl text-white"><Zap size={24}/></span>
              A Operação Inteligente
            </h3>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <div className="mt-1 bg-green-100 p-1 rounded-full shrink-0 shadow-sm">
                  <Check className="text-green-600" size={16} />
                </div>
                <div>
                  <p className="font-bold text-blue-950 mb-1">Atendimento Instantâneo com IA</p>
                  <p className="text-sm text-slate-700 leading-relaxed">O robô atende, tira dúvidas e agenda reuniões no WhatsApp em segundos, 24 horas por dia.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="mt-1 bg-green-100 p-1 rounded-full shrink-0 shadow-sm">
                  <Check className="text-green-600" size={16} />
                </div>
                <div>
                  <p className="font-bold text-blue-950 mb-1">Visão 360º em Tempo Real</p>
                  <p className="text-sm text-slate-700 leading-relaxed">Um painel único no seu celular mostra o faturamento, as metas e o estoque atualizado na hora.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="mt-1 bg-green-100 p-1 rounded-full shrink-0 shadow-sm">
                  <Check className="text-green-600" size={16} />
                </div>
                <div>
                  <p className="font-bold text-blue-950 mb-1">Crescimento Escalável</p>
                  <p className="text-sm text-slate-700 leading-relaxed">Você atende 10 ou 1000 clientes com a mesma infraestrutura, sem precisar aumentar a equipe administrativa.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="mt-1 bg-green-100 p-1 rounded-full shrink-0 shadow-sm">
                  <Check className="text-green-600" size={16} />
                </div>
                <div>
                  <p className="font-bold text-blue-950 mb-1">Liberdade para o Dono</p>
                  <p className="text-sm text-slate-700 leading-relaxed">Com a automação trabalhando nos bastidores, você tem tempo para pensar na estratégia, não no trabalho braçal.</p>
                </div>
              </li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}