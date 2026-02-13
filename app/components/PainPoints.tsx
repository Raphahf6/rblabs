import { AlertTriangle, TrendingUp, Lock } from 'lucide-react';

export default function PainPoints() {
  const pains = [
    {
      icon: <AlertTriangle className="text-orange-500" size={32} />,
      title: "O Caos das Planilhas",
      desc: "Sua operação roda em Excel? Erros de fórmula, dados duplicados e falta de segurança estão custando dinheiro à sua empresa."
    },
    {
      icon: <TrendingUp className="text-red-500" size={32} />,
      title: "Mensalidades Infinitas",
      desc: "Por que pagar R$ 2.000/mês para sempre por um SaaS que você não é dono? Invista em um ativo que pertence ao seu CNPJ."
    },
    {
      icon: <Lock className="text-blue-500" size={32} />,
      title: "Processos Travados",
      desc: "Softwares de prateleira te obrigam a trabalhar do jeito DELES. Nós criamos o software que trabalha do SEU jeito."
    }
  ];

  return (
    <section className="bg-slate-50 py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Sua empresa atingiu o teto operacional?</h2>
          <p className="text-slate-600 mt-4">Se você enfrenta esses problemas, é hora de ter seu próprio sistema.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {pains.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all border border-slate-100">
              <div className="mb-6 p-4 bg-slate-50 rounded-lg inline-block">{item.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}