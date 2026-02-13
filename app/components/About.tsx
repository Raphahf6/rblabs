"use client"
import { ShieldCheck, Target, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          {/* Lado Esquerdo: Imagem/Visual */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2 relative"
          >
            <div className="absolute inset-0 bg-blue-600 rounded-2xl transform rotate-3 opacity-10"></div>
            <div className="relative bg-slate-900 p-8 rounded-2xl text-white overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-20">
                <ShieldCheck size={120} />
              </div>
              <h3 className="text-2xl font-bold mb-4 z-10 relative">DNA de Alta Performance</h3>
              <p className="text-slate-300 leading-relaxed z-10 relative">
                "Não acreditamos em software descartável. Nossa cultura foi forjada na criação de sistemas críticos para todos setores da industria e comercial, onde um erro pode custar milhões. Trazemos esse mesmo rigor para o seu negócio."
              </p>
              <div className="mt-8 pt-8 border-t border-slate-700">
                <p className="font-bold text-lg">Raphael</p>
                <p className="text-blue-400 text-sm">Head de Engenharia & Fundador</p>
              </div>
            </div>
          </motion.div>

          {/* Lado Direito: Texto Institucional */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Mais que código. <br />
              <span className="text-blue-600">Engenharia de Negócios.</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              A R&B Labs nasceu de uma frustração: ver empresas promissoras reféns de planilhas manuais ou gastando fortunas em softwares que não resolvem o problema real.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="p-3 bg-blue-50 rounded-lg text-blue-600 h-fit">
                  <Target size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Foco no ROI</h4>
                  <p className="text-sm text-slate-500">Cada linha de código deve gerar retorno financeiro ou economia de tempo. Se não gera, não construímos.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="p-3 bg-blue-50 rounded-lg text-blue-600 h-fit">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Parceria de Longo Prazo</h4>
                  <p className="text-sm text-slate-500">Não entregamos e sumimos. Atuamos como o braço tecnológico da sua empresa, evoluindo o sistema conforme você cresce.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}