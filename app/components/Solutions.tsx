"use client"
import { useState } from 'react';
import { Database, Bot, LayoutDashboard, Smartphone, Users, DollarSign, TrendingUp, Bell, Search, Menu, Zap, MessageSquare, Activity } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Solutions() {
  // Estado para controlar qual item está selecionado
  const [activeTab, setActiveTab] = useState(0);

  // Array consolidado com os produtos e seus respectivos dados mockados
  const solutions = [
    {
      title: "Sistemas ERP & CRM Customizados",
      desc: "Centralize clientes, vendas e processos em um painel único. Relatórios sob medida para decisões estratégicas.",
      icon: <LayoutDashboard size={24} />,
      mock: {
        kpi1: { label: "Receita Mensal", value: "R$ 45.200", badge: "+12%", badgeColor: "text-green-600 bg-green-50" },
        kpi2: { label: "Leads Ativos", value: "142", badge: "Novo Recorde", badgeColor: "text-blue-600 bg-blue-50" },
        feedTitle: "Vendas em Tempo Real",
        feedIcon: <TrendingUp size={16} className="text-blue-500" />,
        feed: [
          { type: "Venda", text: "Novo pedido #8291", time: "2 min", color: "bg-green-100 text-green-700" },
          { type: "Lead", text: "Novo Lead: Clínica Santa Clara", time: "5 min", color: "bg-blue-100 text-blue-700" },
          { type: "Alerta", text: "Estoque baixo: Item #402", time: "12 min", color: "bg-orange-100 text-orange-700" },
        ]
      }
    },
    {
      title: "Agentes de IA & Chatbots",
      desc: "Assistentes virtuais inteligentes que atendem, qualificam leads e agendam reuniões via WhatsApp 24 horas por dia.",
      icon: <Bot size={24} />,
      mock: {
        kpi1: { label: "Conversas (IA)", value: "1.284", badge: "Hoje", badgeColor: "text-purple-600 bg-purple-50" },
        kpi2: { label: "Tempo de Resposta", value: "1.2s", badge: "Ultrarrápido", badgeColor: "text-emerald-600 bg-emerald-50" },
        feedTitle: "Interações da IA",
        feedIcon: <MessageSquare size={16} className="text-purple-500" />,
        feed: [
          { type: "Chat", text: "IA agendou reunião c/ Marcos", time: "Agora", color: "bg-purple-100 text-purple-700" },
          { type: "Dúvida", text: "IA respondeu sobre preços", time: "1 min", color: "bg-blue-100 text-blue-700" },
          { type: "Lead", text: "Contato qualificado (Score: 9/10)", time: "8 min", color: "bg-green-100 text-green-700" },
        ]
      }
    },
    {
      title: "Aplicativos & SaaS",
      desc: "Ferramentas mobile e web escaláveis para sua equipe de campo, franqueados ou para seus clientes finais.",
      icon: <Smartphone size={24} />,
      mock: {
        kpi1: { label: "Usuários Ativos", value: "8.402", badge: "+340 Hoje", badgeColor: "text-blue-600 bg-blue-50" },
        kpi2: { label: "Uptime (Servidor)", value: "99.9%", badge: "Estável", badgeColor: "text-green-600 bg-green-50" },
        feedTitle: "Log do Sistema",
        feedIcon: <Activity size={16} className="text-orange-500" />,
        feed: [
          { type: "Login", text: "Novo acesso via Apple ID", time: "1 min", color: "bg-slate-100 text-slate-700" },
          { type: "Sync", text: "Sincronização offline concluída", time: "3 min", color: "bg-blue-100 text-blue-700" },
          { type: "Deploy", text: "Atualização v2.1 aplicada", time: "1h", color: "bg-orange-100 text-orange-700" },
        ]
      }
    },
    {
      title: "Automação & APIs",
      desc: "Fazemos seus sistemas conversarem. Elimine o trabalho de copiar dados entre o financeiro, CRM e WhatsApp.",
      icon: <Database size={24} />,
      mock: {
        kpi1: { label: "Tarefas Automatizadas", value: "15k", badge: "Neste mês", badgeColor: "text-emerald-600 bg-emerald-50" },
        kpi2: { label: "Horas Economizadas", value: "120h", badge: "Equipe Comercial", badgeColor: "text-blue-600 bg-blue-50" },
        feedTitle: "Webhooks & Gatilhos",
        feedIcon: <Zap size={16} className="text-yellow-500" />,
        feed: [
          { type: "API", text: "Pagamento Stripe recebido", time: "Segundos", color: "bg-green-100 text-green-700" },
          { type: "Sync", text: "Nota Fiscal emitida no ERP", time: "4 min", color: "bg-blue-100 text-blue-700" },
          { type: "Trigger", text: "Mensagem de Boas-vindas enviada", time: "15 min", color: "bg-yellow-100 text-yellow-700" },
        ]
      }
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden" id="solucoes">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row gap-16 items-center">
        
        {/* LADO ESQUERDO: TEXTO E ABAS */}
        <div className="md:w-1/2">
          <div className="inline-flex items-center gap-2 text-blue-600 font-bold mb-4 uppercase tracking-wider text-sm">
            <Zap size={16} />
            Nosso Portfólio
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            O que construímos na <br/><span className="text-blue-600">R&B Labs</span>
          </h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Nossa especialidade é resolver problemas complexos com código limpo e IA. Não usamos templates prontos; desenhamos a arquitetura ideal para sua necessidade.
          </p>
          
          {/* Lista de Soluções (Funciona como Menu) */}
          <div className="grid grid-cols-1 gap-3">
            {solutions.map((sol, idx) => (
              <div 
                key={idx} 
                onMouseEnter={() => setActiveTab(idx)}
                onClick={() => setActiveTab(idx)}
                className={`flex items-start gap-4 p-4 rounded-xl transition-all cursor-pointer border ${
                  activeTab === idx 
                    ? 'border-blue-200 bg-blue-50 shadow-md transform scale-[1.02]' 
                    : 'border-transparent hover:border-slate-200 hover:bg-slate-50'
                }`}
              >
                <div className={`mt-1 p-2 rounded-lg transition-colors ${
                  activeTab === idx ? 'bg-blue-600 text-white shadow-md' : 'bg-blue-100 text-blue-600'
                }`}>
                  {sol.icon}
                </div>
                <div>
                  <h4 className={`font-bold transition-colors ${activeTab === idx ? 'text-blue-900' : 'text-slate-900'}`}>
                    {sol.title}
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed mt-1">{sol.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* LADO DIREITO: MOCK DO SISTEMA DINÂMICO */}
        <div className="md:w-1/2 w-full perspective-1000">
          <motion.div 
            initial={{ rotateY: 10, rotateX: 5, opacity: 0 }}
            whileInView={{ rotateY: 0, rotateX: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden relative"
          >
            {/* 1. Header Fixo do Sistema */}
            <div className="bg-slate-50 border-b border-slate-200 p-4 flex items-center justify-between z-10 relative">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="hidden sm:flex bg-white border border-slate-200 rounded-md px-3 py-1.5 text-xs text-slate-400 items-center gap-2 w-48 shadow-sm">
                <Search size={12} /> Buscar no sistema...
              </div>
              <div className="flex gap-4 text-slate-400 items-center">
                <Bell size={16} className="hover:text-slate-600 cursor-pointer transition-colors" />
                <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 shadow-sm border border-white"></div>
              </div>
            </div>

            <div className="flex h-[400px] relative">
              {/* 2. Sidebar Fixa */}
              <div className="w-16 bg-slate-900 py-6 flex flex-col items-center gap-6 z-10">
                <div className={`transition-colors ${activeTab === 0 ? 'text-blue-400' : 'text-slate-500'}`}><LayoutDashboard size={20} /></div>
                <div className={`transition-colors ${activeTab === 1 ? 'text-purple-400' : 'text-slate-500'}`}><Bot size={20} /></div>
                <div className={`transition-colors ${activeTab === 2 ? 'text-orange-400' : 'text-slate-500'}`}><Smartphone size={20} /></div>
                <div className={`transition-colors ${activeTab === 3 ? 'text-emerald-400' : 'text-slate-500'}`}><Database size={20} /></div>
                <div className="mt-auto text-slate-600 hover:text-white transition-colors"><Menu size={20} /></div>
              </div>

              {/* 3. Conteúdo Principal Dinâmico (AnimatePresence para transição suave) */}
              <div className="flex-1 bg-slate-50/80 p-6 overflow-hidden relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab} // A chave muda quando a aba muda, forçando a re-renderização animada
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="h-full"
                  >
                    {/* Cards de KPI Dinâmicos */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {/* KPI 1 */}
                      <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                        <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mb-1">
                          {solutions[activeTab].mock.kpi1.label}
                        </p>
                        <div className="flex flex-col gap-1">
                          <span className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight">
                            {solutions[activeTab].mock.kpi1.value}
                          </span>
                          <span className={`text-[10px] w-fit px-1.5 py-0.5 rounded font-bold ${solutions[activeTab].mock.kpi1.badgeColor}`}>
                            {solutions[activeTab].mock.kpi1.badge}
                          </span>
                        </div>
                      </div>
                      
                      {/* KPI 2 */}
                      <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                        <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mb-1">
                          {solutions[activeTab].mock.kpi2.label}
                        </p>
                        <div className="flex flex-col gap-1">
                          <span className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight">
                            {solutions[activeTab].mock.kpi2.value}
                          </span>
                          <span className={`text-[10px] w-fit px-1.5 py-0.5 rounded font-bold ${solutions[activeTab].mock.kpi2.badgeColor}`}>
                            {solutions[activeTab].mock.kpi2.badge}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Feed de Atividades Dinâmico */}
                    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-4 h-[190px]">
                      <h4 className="text-xs font-bold text-slate-800 mb-4 flex items-center gap-2 uppercase tracking-wide border-b border-slate-50 pb-2">
                        {solutions[activeTab].mock.feedIcon}
                        {solutions[activeTab].mock.feedTitle}
                      </h4>
                      
                      <div className="space-y-3">
                        {solutions[activeTab].mock.feed.map((item, i) => (
                          <div key={i} className="flex items-center justify-between group">
                            <div className="flex items-center gap-3">
                              <span className={`text-[9px] uppercase tracking-wider font-bold px-2 py-1 rounded w-16 text-center shrink-0 ${item.color}`}>
                                {item.type}
                              </span>
                              <span className="text-sm text-slate-600 font-medium truncate max-w-[130px] sm:max-w-[200px]">
                                {item.text}
                              </span>
                            </div>
                            <span className="text-[10px] text-slate-400 font-medium shrink-0">
                              {item.time}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Efeito Glass Decorativo sobre o Mock */}
            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white/40 to-transparent pointer-events-none z-20"></div>
          </motion.div>
          
          {/* Sombra Decorativa no Chão */}
          <div className="w-[85%] mx-auto h-5 bg-slate-900/10 blur-xl rounded-[100%] mt-4"></div>
        </div>

      </div>
    </section>
  );
}