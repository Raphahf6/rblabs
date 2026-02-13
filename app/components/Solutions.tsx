"use client"
import { Database, Bot, LayoutDashboard, Smartphone, Users, DollarSign, TrendingUp, Bell, Search, Menu } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Solutions() {
  const solutions = [
    {
      title: "Sistemas ERP & CRM Customizados",
      desc: "Centralize clientes, vendas e processos em um painel único. Relatórios sob medida para decisões estratégicas.",
      icon: <LayoutDashboard size={24} />
    },
    {
      title: "Automação & IA",
      desc: "Robôs que leem dados, atendem clientes e eliminam tarefas manuais.",
      icon: <Bot size={24} />
    },
    {
      title: "Aplicativos Corporativos",
      desc: "Ferramentas mobile para sua equipe de campo ou para seus clientes finais.",
      icon: <Smartphone size={24} />
    },
    {
      title: "Integração de APIs",
      desc: "Fazemos seu sistema financeiro conversar com seu site e seu WhatsApp automaticamente.",
      icon: <Database size={24} />
    }
  ];

  // Dados fictícios para o Mock do Dashboard
  const mockActivity = [
    { type: "Venda", text: "Novo pedido #8291 - R$ 1.250", time: "2 min", color: "bg-green-100 text-green-700" },
    { type: "Lead", text: "Novo Lead: Clínica Santa Clara", time: "5 min", color: "bg-blue-100 text-blue-700" },
    { type: "Alerta", text: "Estoque baixo: Item #402", time: "12 min", color: "bg-orange-100 text-orange-700" },
    { type: "Bot", text: "IA agendou 3 reuniões", time: "30 min", color: "bg-purple-100 text-purple-700" },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden" id="solucoes">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row gap-16 items-center">
        
        {/* LADO ESQUERDO: TEXTO DE VENDAS */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            O que construímos no <br/><span className="text-blue-600">R&B Labs</span>
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Nossa especialidade é resolver problemas complexos com código limpo e performático. Não usamos templates prontos; desenhamos a arquitetura ideal para sua necessidade.
          </p>
          <div className="grid grid-cols-1 gap-4">
            {solutions.map((sol, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 border border-transparent hover:border-blue-100 hover:bg-blue-50/30 rounded-lg transition-colors cursor-default group">
                <div className="text-blue-600 mt-1 p-2 bg-blue-100 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">{sol.icon}</div>
                <div>
                  <h4 className="font-bold text-slate-900">{sol.title}</h4>
                  <p className="text-sm text-slate-500">{sol.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* LADO DIREITO: MOCK DO SISTEMA (VISUAL) */}
        <div className="md:w-1/2 w-full perspective-1000">
          <motion.div 
            initial={{ rotateY: 10, rotateX: 5, opacity: 0 }}
            whileInView={{ rotateY: 0, rotateX: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden relative"
          >
            {/* 1. Header do Sistema Mockado */}
            <div className="bg-slate-50 border-b border-slate-200 p-4 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="hidden sm:flex bg-white border border-slate-200 rounded-md px-3 py-1 text-xs text-slate-400 items-center gap-2 w-48">
                <Search size={12} /> Buscar no sistema...
              </div>
              <div className="flex gap-3 text-slate-400">
                <Bell size={16} />
                <div className="w-4 h-4 rounded-full bg-blue-600"></div>
              </div>
            </div>

            <div className="flex h-[400px]">
              {/* 2. Sidebar Mockada */}
              <div className="w-16 bg-slate-900 py-6 flex flex-col items-center gap-6">
                <div className="text-blue-500"><LayoutDashboard size={20} /></div>
                <div className="text-slate-500 hover:text-white transition-colors"><Users size={20} /></div>
                <div className="text-slate-500 hover:text-white transition-colors"><Bot size={20} /></div>
                <div className="text-slate-500 hover:text-white transition-colors"><DollarSign size={20} /></div>
                <div className="mt-auto text-slate-500"><Menu size={20} /></div>
              </div>

              {/* 3. Conteúdo Principal Mockado */}
              <div className="flex-1 bg-slate-50/50 p-6 overflow-hidden">
                
                {/* Cards de KPI */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white p-4 rounded-xl shadow-sm border border-slate-100"
                  >
                    <p className="text-xs text-slate-500 uppercase font-bold">Receita Mensal</p>
                    <div className="flex items-end gap-2 mt-1">
                      <span className="text-xl font-bold text-slate-900">R$ 45.200</span>
                      <span className="text-xs text-green-600 flex items-center bg-green-50 px-1 rounded font-bold mb-1">
                        +12% <TrendingUp size={10} className="ml-1"/>
                      </span>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white p-4 rounded-xl shadow-sm border border-slate-100"
                  >
                    <p className="text-xs text-slate-500 uppercase font-bold">Leads Ativos</p>
                    <div className="flex items-end gap-2 mt-1">
                      <span className="text-xl font-bold text-slate-900">142</span>
                      <span className="text-xs text-blue-600 bg-blue-50 px-1 rounded font-bold mb-1">Novo Recorde</span>
                    </div>
                  </motion.div>
                </div>

                {/* Lista de Atividades (Feed) */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-4">
                  <h4 className="text-sm font-bold text-slate-700 mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Tempo Real
                  </h4>
                  
                  <div className="space-y-3">
                    {mockActivity.map((item, i) => (
                      <motion.div 
                        key={i}
                        initial={{ x: 20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4 + (i * 0.1) }}
                        className="flex items-center justify-between p-2 hover:bg-slate-50 rounded-lg transition-colors border-b border-slate-50 last:border-0"
                      >
                        <div className="flex items-center gap-3">
                          <span className={`text-[10px] font-bold px-2 py-1 rounded ${item.color}`}>
                            {item.type}
                          </span>
                          <span className="text-sm text-slate-700 font-medium">{item.text}</span>
                        </div>
                        <span className="text-xs text-slate-400">{item.time}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* Efeito de Reflexo/Glass (Decorativo) */}
            <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-white/20 to-transparent pointer-events-none"></div>
          </motion.div>
          
          {/* Sombra Decorativa no Chão */}
          <div className="w-[90%] mx-auto h-4 bg-black/20 blur-xl rounded-[100%] mt-4"></div>
        </div>

      </div>
    </section>
  );
}