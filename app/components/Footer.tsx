"use client"
import { Code2, Instagram, Linkedin, MessageCircle, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900 relative overflow-hidden">
      {/* Detalhe visual de brilho no fundo */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Coluna 1: Marca e Posicionamento */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 text-white font-black text-2xl mb-6 tracking-tight">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
                <Code2 size={22} />
              </div>
              R&B Digital
            </div>
            <p className="text-base leading-relaxed max-w-sm mb-8 font-medium">
              Especialistas em <span className="text-white">Transformação Digital</span> para PMEs. 
              Aceleramos seu crescimento através de automações inteligentes, 
              Agentes de IA e sistemas focados em lucro.
            </p>
            <div className="flex gap-5">
             
              <a href="https://wa.me/5511936200327" className="p-2 bg-slate-900 rounded-lg hover:text-white hover:bg-green-600 transition-all">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Coluna 2: Navegação */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Aceleração</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><button onClick={() => scrollToSection('inicio')} className="hover:text-blue-500 transition-colors">Início</button></li>
              <li><button onClick={() => scrollToSection('metodologia')} className="hover:text-blue-600 transition-colors">Como Ajudamos</button></li>
              <li><button onClick={() => scrollToSection('solucoes')} className="hover:text-blue-600 transition-colors">Nossas Soluções</button></li>
              <li><button onClick={() => scrollToSection('faq')} className="hover:text-blue-600 transition-colors">Perguntas Frequentes</button></li>
            </ul>
          </div>

          {/* Coluna 3: Contato Direto */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Fale Conosco</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-blue-500 shrink-0" />
                <div className="flex flex-col">
                  <span className="text-slate-500 text-[10px] uppercase font-bold">E-mail</span>
                  <a href="mailto:contato@rebdigitalsolucoes.com.br" className="text-white hover:text-blue-500 transition-colors">contato@rebdigitalsolucoes.com.br</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle size={18} className="text-green-500 shrink-0" />
                <div className="flex flex-col">
                  <span className="text-slate-500 text-[10px] uppercase font-bold">WhatsApp Comercial</span>
                  <a href="https://wa.me/5511936200327" className="text-white hover:text-green-500 transition-colors">+55 (11) 93620-0327</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-purple-500 shrink-0" />
                <div className="flex flex-col">
                  <span className="text-slate-500 text-[10px] uppercase font-bold">Base de Operação</span>
                  <span className="text-white">São Paulo, SP</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Rodapé Inferior */}
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-center">
          <div className="text-xs font-medium">
            <p>&copy; {currentYear} R&B Digital • Estratégia e Tecnologia. Todos os direitos reservados.</p>
          </div>
          <div className="flex items-center gap-6 text-[10px] uppercase tracking-widest font-bold">
            <span className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
              Sistemas Online
            </span>
            <span className="text-slate-700">|</span>
            <span className="text-slate-500">Desenvolvido com Performance Labs</span>
          </div>
        </div>
      </div>
    </footer>
  );
}