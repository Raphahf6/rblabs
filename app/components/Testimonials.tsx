import { Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Quem já transformou sua operação</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Depoimento 1 */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
            <Quote className="text-blue-200 mb-4" size={40} />
            <p className="text-slate-600 italic mb-6 text-lg">
              "O que a R&B Labs fez foi nos devolver o controle da empresa. Antes éramos reféns de um sistema caro e engessado. Hoje temos nossa própria plataforma que vale dinheiro e roda exatamente como precisamos."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500">RM</div>
              <div>
                <h4 className="font-bold text-slate-900">Roberto Mendes</h4>
                <p className="text-sm text-slate-500">Diretor de Operações</p>
              </div>
            </div>
          </div>

          {/* Depoimento 2 */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
            <Quote className="text-blue-200 mb-4" size={40} />
            <p className="text-slate-600 italic mb-6 text-lg">
              "Eu achava que software sob medida era coisa de multinacional. A R&B Labs desenhou uma solução que se pagou em 6 meses só com a redução de erros operacionais e horas extras da equipe."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500">JP</div>
              <div>
                <h4 className="font-bold text-slate-900">Juliana Paiva</h4>
                <p className="text-sm text-slate-500">CEO, Rede de Clínicas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}