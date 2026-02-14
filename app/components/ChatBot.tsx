"use client"
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, User, Code2, ArrowLeft, CheckCircle, ArrowRight, X } from 'lucide-react';

interface Message {
  id: number;
  type: 'bot' | 'user';
  content: string;
}

interface ChatBotProps {
  onClose: () => void;
}

export default function ChatBot({ onClose }: ChatBotProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [step, setStep] = useState(0); 
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  
  // Refs para controle
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const hasInitialized = useRef(false); // <--- CORREÇÃO DO BUG DE DUPLICAÇÃO

  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    desafio: '',
    orcamento: '',
    whatsapp: ''
  });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, isInputVisible]);

  // --- INICIALIZAÇÃO SEGURA ---
  useEffect(() => {
    if (hasInitialized.current) return; // Se já iniciou, para aqui.
    hasInitialized.current = true;

    const startChat = async () => {
      setIsInputVisible(false);
      await botTypeAndSend("Olá! Sou a Sofia, IA da R&B Labs. 👋");
      await botTypeAndSend("Vou te ajudar a descobrir se podemos transformar sua empresa com tecnologia.");
      await botTypeAndSend("Para começar, qual é o seu nome?");
      setIsInputVisible(true);
    };

    startChat();
  }, []);

  const botTypeAndSend = (text: string, delay = 1200): Promise<void> => {
    return new Promise((resolve) => {
      setIsTyping(true);
      scrollToBottom();
      
      setTimeout(() => {
        setIsTyping(false);
        setMessages(prev => [...prev, { id: Date.now(), type: 'bot', content: text }]);
        resolve();
      }, delay);
    });
  };

  const handleSend = async (text: string) => {
    if (!text.trim()) return;

    setMessages(prev => [...prev, { id: Date.now(), type: 'user', content: text }]);
    setInputValue("");
    setIsInputVisible(false);

    await processStep(text);
  };

  const processStep = async (lastAnswer: string) => {
    const currentStep = step;
    
    switch (currentStep) {
      case 0: // Nome -> Empresa
        setFormData(prev => ({ ...prev, nome: lastAnswer }));
        setStep(1);
        await botTypeAndSend(`Prazer, ${lastAnswer.split(' ')[0]}!`);
        await botTypeAndSend("Qual o nome da sua empresa?");
        setIsInputVisible(true);
        break;

      case 1: // Empresa -> Desafio
        setFormData(prev => ({ ...prev, empresa: lastAnswer }));
        setStep(2);
        await botTypeAndSend("Entendi.");
        await botTypeAndSend("E qual é o maior desafio operacional que você enfrenta hoje?");
        setIsInputVisible(true);
        break;

      case 2: // Desafio -> Orçamento
        setFormData(prev => ({ ...prev, desafio: lastAnswer }));
        setStep(3);
        await botTypeAndSend("Certo. Para eu sugerir a tecnologia adequada...");
        await botTypeAndSend("Qual sua faixa de investimento prevista para resolver isso?");
        setIsInputVisible(true);
        break;

      case 3: // Orçamento -> Whats
        setFormData(prev => ({ ...prev, orcamento: lastAnswer }));
        setStep(4);
        await botTypeAndSend("Perfeito. Estamos quase lá.");
        await botTypeAndSend("Por último, qual seu WhatsApp (com DDD) para enviarmos o diagnóstico?");
        setIsInputVisible(true);
        break;

      case 4: // Whats -> Fim
        const finalData = { ...formData, whatsapp: lastAnswer };
        setFormData(finalData);
        setStep(5);
        setLoading(true);

        try {
          await fetch('/api/send', {
            method: 'POST',
            body: JSON.stringify(finalData),
          });
          
          await botTypeAndSend("Recebido! ✅");
          await botTypeAndSend("O Raphael (nosso Engenheiro Chefe) já recebeu seu perfil e vai entrar em contato em breve.");
          
          // Fecha após 5 segundos
          setTimeout(onClose, 5000);
        } catch (error) {
          await botTypeAndSend("Ops, tive um erro de conexão. Mas anotei seus dados!");
        } finally {
          setLoading(false);
        }
        break;
    }
  };

  // --- RENDERIZADORES DE INPUT ---
  const renderInputArea = () => {
    // Passo 2: Botões de Desafio
    if (step === 2) {
      const options = ["Processos Manuais/Planilhas", "Taxas Altas (SaaS/iFood)", "Quero criar um App/SaaS", "Outro"];
      return (
        <div className="flex flex-wrap gap-2 justify-end p-4">
          {options.map(opt => (
            <motion.button 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              key={opt} 
              onClick={() => handleSend(opt)} 
              className="px-5 py-3 bg-white border border-blue-100 text-blue-600 rounded-2xl text-sm font-medium hover:bg-blue-600 hover:text-white transition-all shadow-sm"
            >
              {opt}
            </motion.button>
          ))}
        </div>
      );
    }

    // Passo 3: Botões de Orçamento
    if (step === 3) {
      const options = ["Até R$ 5k (MVP)", "R$ 15k - R$ 30k (Ideal)", "+ R$ 40k (Enterprise)"];
      return (
        <div className="flex flex-col gap-2 p-4 w-full max-w-md ml-auto">
          {options.map(opt => (
            <motion.button 
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              key={opt} 
              onClick={() => handleSend(opt)} 
              className="w-full text-left px-5 py-4 bg-white border border-slate-100 rounded-xl text-slate-700 text-sm font-medium hover:border-blue-500 hover:shadow-md hover:text-blue-700 transition-all flex justify-between items-center group"
            >
              {opt}
              <ArrowRight size={16} className="text-slate-300 group-hover:text-blue-500 transition-colors" />
            </motion.button>
          ))}
        </div>
      );
    }

    // Input de Texto
    return (
      <div className="p-4 bg-white border-t border-slate-100">
        <form 
          onSubmit={(e) => { e.preventDefault(); handleSend(inputValue); }}
          className="flex items-center gap-2 max-w-3xl mx-auto"
        >
          <input 
            autoFocus
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={step === 4 ? "Ex: (11) 99999-9999" : "Digite sua mensagem..."}
            className="flex-1 bg-slate-100 border-0 rounded-full px-5 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
            disabled={loading}
          />
          <button 
            type="submit" 
            disabled={!inputValue.trim()}
            className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md transform active:scale-95"
          >
            <Send size={20} />
          </button>
        </form>
      </div>
    );
  };

  return (
    <div className="flex flex-col h-full bg-[#F0F2F5] relative font-sans">
      {/* HEADER FIXO DO BOT */}
      <div className="bg-white px-4 py-3 shadow-sm border-b border-slate-100 flex justify-between items-center z-20">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center border border-blue-200">
              <Code2 size={20} className="text-blue-600" />
            </div>
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
          </div>
          <div>
            <h3 className="font-bold text-slate-800 text-sm">R&B Assistant</h3>
            <p className="text-xs text-slate-500">Responde instantaneamente</p>
          </div>
        </div>
        <button 
          onClick={onClose}
          className="p-2 hover:bg-slate-100 rounded-full text-slate-400 transition-colors"
        >
          <X size={24} />
        </button>
      </div>

      {/* ÁREA DE MENSAGENS */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
        {messages.map((msg) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className={`flex w-full ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`flex items-end gap-2 max-w-[85%] md:max-w-[60%] ${msg.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              
              {/* Avatar Pequeno na mensagem */}
              {msg.type === 'bot' && (
                <div className="w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 mb-1">
                  <Code2 size={12} className="text-blue-600" />
                </div>
              )}

              {/* Balão de Mensagem */}
              <div className={`px-5 py-3 text-[15px] leading-relaxed shadow-sm relative ${
                msg.type === 'user' 
                  ? 'bg-blue-600 text-white rounded-2xl rounded-tr-sm' 
                  : 'bg-white text-slate-800 border border-slate-100 rounded-2xl rounded-tl-sm'
              }`}>
                {msg.content}
              </div>
            </div>
          </motion.div>
        ))}

        {/* Loading Indicator (3 bolinhas) */}
        {isTyping && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 ml-8">
            <div className="bg-white px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm flex gap-1.5 border border-slate-100">
              <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
              <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-100"></span>
              <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-200"></span>
            </div>
          </motion.div>
        )}
        
        <div ref={messagesEndRef} className="h-4" />
      </div>

      {/* ÁREA DE INPUT (AnimatePresence) */}
      <AnimatePresence>
        {isInputVisible && step !== 5 && (
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            className="w-full bg-white/80 backdrop-blur-md border-t border-slate-200 sticky bottom-0 z-20"
          >
            {renderInputArea()}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}