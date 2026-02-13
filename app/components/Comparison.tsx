import { Check, X } from 'lucide-react';

export default function Comparison() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Por que ter seu próprio software?</h2>
          <p className="text-slate-500 mt-4">A diferença entre gastar e investir.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Coluna SaaS (Ruim) */}
          <div className="p-8 border border-red-100 bg-red-50/30 rounded-2xl">
            <h3 className="text-xl font-bold text-slate-700 mb-6 flex items-center gap-2">
              <span className="p-2 bg-red-100 rounded text-red-600"><X size={20}/></span>
              Software de Prateleira (SaaS)
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-slate-600">
                <X className="text-red-400 shrink-0" size={20} />
                <span>Mensalidade eterna que aumenta todo ano.</span>
              </li>
              <li className="flex gap-3 text-slate-600">
                <X className="text-red-400 shrink-0" size={20} />
                <span>Você paga por 100% das funções, mas usa só 10%.</span>
              </li>
              <li className="flex gap-3 text-slate-600">
                <X className="text-red-400 shrink-0" size={20} />
                <span>Se parar de pagar, perde todo o histórico.</span>
              </li>
              <li className="flex gap-3 text-slate-600">
                <X className="text-red-400 shrink-0" size={20} />
                <span>Processos engessados: sua empresa tem que se adaptar ao sistema.</span>
              </li>
            </ul>
          </div>

          {/* Coluna R&B (Bom) */}
          <div className="p-8 border border-blue-200 bg-blue-50/50 rounded-2xl shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">RECOMENDADO</div>
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="p-2 bg-blue-100 rounded text-blue-600"><Check size={20}/></span>
              Software Sob Medida R&B Labs
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-slate-700 font-medium">
                <Check className="text-blue-500 shrink-0" size={20} />
                <span>Ativo da Empresa: O código e os dados são seus.</span>
              </li>
              <li className="flex gap-3 text-slate-700 font-medium">
                <Check className="text-blue-500 shrink-0" size={20} />
                <span>Custo Único de desenvolvimento (Investimento, não despesa).</span>
              </li>
              <li className="flex gap-3 text-slate-700 font-medium">
                <Check className="text-blue-500 shrink-0" size={20} />
                <span>Feito 100% para o seu fluxo de trabalho atual.</span>
              </li>
              <li className="flex gap-3 text-slate-700 font-medium">
                <Check className="text-blue-500 shrink-0" size={20} />
                <span>Escalável: O sistema cresce junto com a empresa.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}