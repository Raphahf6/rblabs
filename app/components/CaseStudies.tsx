import { ArrowRight, TrendingUp, Clock, DollarSign, Calendar, ShoppingBag,Clapperboard } from 'lucide-react';

export default function CaseStudies() {
  const cases = [
    {
      category: "Food Service & Delivery",
      title: "Hamburgueria Artesanal : Do App de Entrega ao PWA Próprio",
      icon: <ShoppingBag size={24} className="text-orange-500" />,
      scenario: "Uma hamburgueria artesanal de alto volume dependia 100% de apps de entrega. O resultado? Taxas de 27% comendo todo o lucro e zero acesso aos dados dos clientes.",
      solution: "Desenvolvemos um Web App de Pedidos Próprio (PWA), integrado diretamente à impressora da cozinha e com disparo automático de WhatsApp para status do pedido.",
      results: [
        "Economia de R$ 4.500/mês em taxas de aplicativos.",
        "Aumento de 20% na recompra usando campanhas de CRM próprio.",
        "Tempo de despacho reduzido em 5 minutos por pedido."
      ]
    },
    {
      category: "Saúde & Estética",
      title: "Clínica BellaVitta: O Fim do 'Bolo' na Agenda",
      icon: <Calendar size={24} className="text-pink-500" />,
      scenario: "A clínica tinha 3 recepcionistas, mas o telefone não parava. Mesmo assim, 30% dos pacientes faltavam sem avisar (no-show), gerando um prejuízo de R$ 15k/mês em horas ociosas.",
      solution: "Criamos um Sistema de Agendamento Inteligente que cobra sinal antecipado via Pix e envia confirmações automáticas com IA via WhatsApp.",
      results: [
        "Redução drástica de no-show: de 30% para 2%.",
        "Uma recepcionista realocada para o time de vendas.",
        "Agenda 100% preenchida com fila de espera automatizada."
      ]
    },
    {
      category: "Logística & Estoque",
      title: "Distribuidora Ágil: Adeus Planilhas Travadas",
      icon: <TrendingUp size={24} className="text-blue-500" />,
      scenario: "O controle de estoque era feito em um Excel gigante de 50mb que travava todo dia. Vendedores vendiam produtos sem estoque e o faturamento levava dias para fechar.",
      solution: "Desenvolvimento de um ERP Customizado em Nuvem, com painéis em tempo real para vendedores e baixa automática de estoque via leitura de QR Code.",
      results: [
        "Zero vendas canceladas por falta de produto.",
        "Faturamento fechado em tempo real (antes demorava 3 dias).",
        "Eliminação total do Excel na operação central."
      ]
    },

    {
      category: "Media & Creator Economy",
      title: "Agência ViralScale: Escala Industrial de Conteúdo",
      icon: <Clapperboard size={24} className="text-purple-500" />,
      scenario: "Uma agência de cortes para TikTok/Reels tinha 5 editores sobrecarregados. 70% do tempo era gasto em tarefas repetitivas: cortar silêncios (jumpcuts) e criar legendas manuais.",
      solution: "Desenvolvemos um Pipeline de Vídeo Automatizado (Python + FFmpeg + OpenAI Whisper). O sistema ingere o vídeo bruto, remove silêncios, gera legendas sincronizadas e exporta prévias em 3 formatos.",
      results: [
        "Capacidade de produção aumentou de 10 para 45 vídeos/dia.",
        "Redução de custo: O trabalho de 3 editores júnior agora é feito pelo bot.",
        "Padronização total da identidade visual nos cortes."
      ]
    }
  ];

  return (
    <section className="py-24 bg-slate-50" id="cases">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Histórias de Transformação</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Não vendemos apenas código. Vendemos eficiência operacional e lucro. 
            Veja como resolvemos problemas reais de negócios como o seu.
          </p>
        </div>

        <div className="space-y-12">
          {cases.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col md:flex-row">
                
                {/* Lado Esquerdo: O Contexto Visual/Categoria */}
                <div className="md:w-1/3 bg-slate-900 p-8 flex flex-col justify-between relative overflow-hidden">
                  <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 bg-white/10 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-sm border border-white/10">
                      {item.icon}
                      {item.category}
                    </div>
                    <h3 className="text-2xl font-bold text-white leading-tight">
                      {item.title}
                    </h3>
                  </div>
                  
                  {/* Decoração de fundo */}
                  <div className="absolute bottom-0 right-0 opacity-10 transform translate-x-1/4 translate-y-1/4">
                    <div className="w-48 h-48 bg-blue-500 rounded-full blur-3xl"></div>
                  </div>
                </div>

                {/* Lado Direito: A História (Storytelling) */}
                <div className="md:w-2/3 p-8 md:p-12">
                  <div className="mb-8">
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">O Desafio</h4>
                    <p className="text-slate-600 text-lg leading-relaxed">
                      "{item.scenario}"
                    </p>
                  </div>

                  <div className="mb-8 p-6 bg-blue-50/50 rounded-xl border border-blue-100">
                    <h4 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2 flex items-center gap-2">
                      <Code2 size={16} /> A Solução R&B Labs
                    </h4>
                    <p className="text-slate-700 font-medium">
                      {item.solution}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-green-600 uppercase tracking-wider mb-4 flex items-center gap-2">
                      <TrendingUp size={16} /> Resultados Reais
                    </h4>
                    <ul className="grid sm:grid-cols-2 gap-4">
                      {item.results.map((res, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-3 text-slate-600 text-sm">
                          <div className="mt-1 min-w-[6px] h-[6px] rounded-full bg-green-500"></div>
                          {res}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#contato" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-800 transition-colors">
            Quero escrever a próxima história de sucesso da minha empresa
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}

// Import necessário para o ícone Code2 que usei dentro do componente
import { Code2 } from 'lucide-react';