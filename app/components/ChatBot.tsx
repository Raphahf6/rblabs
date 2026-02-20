"use client"
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Code2, ArrowRight, X, RotateCcw, MessageCircle } from 'lucide-react';

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
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const hasInitialized = useRef(false);

  const [formData, setFormData] = useState({
    desafio: '',
    tamanho: '',
    objetivo: '',
    nome: '',
    whatsapp: ''
  });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, isInputVisible]);

  // Função de Início do Chat
  const startChat = async () => {
    setIsInputVisible(false);
    await botTypeAndSend("Olá! Sou a Sofia, assistente de IA da R&B Digital. 👋");
    await botTypeAndSend("Vi que você quer acelerar o crescimento da sua empresa. Para eu preparar o melhor diagnóstico para o nosso especialista, preciso te fazer 3 perguntas rápidas. Vamos lá?");
    await botTypeAndSend("Hoje, qual é o maior ladrão de tempo na sua operação ou o seu foco principal?");
    setIsInputVisible(true);
  };

  useEffect(() => {
    if (hasInitialized.current) return;
    hasInitialized.current = true;
    startChat();
  }, []);

  const handleRestart = () => {
    setMessages([]);
    setStep(0);
    setFormData({ desafio: '', tamanho: '', objetivo: '', nome: '', whatsapp: '' });
    setIsInputVisible(false);
    setInputValue("");
    setTimeout(() => {
      startChat();
    }, 100);
  };

  const botTypeAndSend = (text: string, delay = 1000): Promise<void> => {
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
      case 0: // Desafio -> Tamanho
        setFormData(prev => ({ ...prev, desafio: lastAnswer }));
        setStep(1);
        
        // RESPOSTAS INTELIGENTES BASEADAS NA ESCOLHA DO CLIENTE
        if (lastAnswer.includes("WhatsApp")) {
          await botTypeAndSend("Entendi. Agilizar o atendimento é o primeiro passo para não deixar mais nenhuma venda na mesa.");
        } else if (lastAnswer.includes("planilha")) {
          await botTypeAndSend("Perfeito. Tirar sua equipe do trabalho braçal vai multiplicar a produtividade da sua operação.");
        } else if (lastAnswer.includes("Sistemas")) {
          await botTypeAndSend("Entendi. Integrar suas ferramentas vai eliminar o retrabalho e blindar sua empresa contra erros manuais.");
        } else if (lastAnswer.includes("Consultoria")) {
          await botTypeAndSend("Ótimo! A nossa consultoria estratégica foi desenhada exatamente para desbloquear o próximo nível do seu negócio. 🚀");
        } else {
          await botTypeAndSend("Entendi. Isso é muito comum e nós resolvemos isso direto por aqui.");
        }

        await botTypeAndSend("Para termos uma ideia do volume que vamos organizar, qual o tamanho da sua equipe hoje?");
        setIsInputVisible(true);
        break;

      case 1: // Tamanho -> Objetivo
        setFormData(prev => ({ ...prev, tamanho: lastAnswer }));
        setStep(2);
        await botTypeAndSend("Perfeito.");
        await botTypeAndSend("E se pudéssemos resolver isso hoje com a nossa tecnologia, qual seria o seu maior objetivo prático?");
        setIsInputVisible(true);
        break;

      case 2: // Objetivo -> Nome
        setFormData(prev => ({ ...prev, objetivo: lastAnswer }));
        setStep(3);
        await botTypeAndSend("Excelente! Com base nisso, já consigo ver exatamente como a R&B pode te ajudar a escalar.");
        await botTypeAndSend("Como posso te chamar?");
        setIsInputVisible(true);
        break;

      case 3: // Nome -> Whats
        setFormData(prev => ({ ...prev, nome: lastAnswer }));
        setStep(4);
        await botTypeAndSend(`Prazer, ${lastAnswer.split(' ')[0]}!`);
        await botTypeAndSend("Por último, qual o seu melhor WhatsApp (com DDD)?");
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
          await botTypeAndSend("O Raphael (nosso Consultor de Tecnologia) já recebeu seu perfil e vai te chamar no WhatsApp para agendar o seu Diagnóstico Gratuito.");
          setIsInputVisible(true); 
        } catch (error) {
          await botTypeAndSend("Ops, tive um errinho de conexão, mas anotei seus dados mesmo assim!");
          setIsInputVisible(true);
        } finally {
          setLoading(false);
        }
        break;
    }
  };

  const renderInputArea = () => {
    // Passo 0: Desafio / Foco
    if (step === 0) {
      const options = [
        "Atendimento lento no WhatsApp", 
        "Muita planilha e trabalho manual", 
        "Sistemas que não se conversam", 
        "Consultoria de Transformação Digital para aumentar presença e lucros"
      ];
      return (
        <div className="flex flex-col gap-2 p-4 w-full max-w-md ml-auto bg-slate-50/80">
          {options.map((opt, i) => (
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              key={opt}
            >
              <button 
                onClick={() => handleSend(opt)} 
                className={`w-full text-left px-5 py-3.5 bg-white border rounded-xl text-sm font-medium transition-all ${
                  opt.includes("Consultoria") 
                    ? "border-blue-300 text-blue-700 shadow-[0_0_15px_rgba(37,99,235,0.1)] hover:bg-blue-50" 
                    : "border-slate-200 text-slate-700 hover:border-blue-500 hover:shadow-md hover:text-blue-700"
                }`}
              >
                {opt}
              </button>
            </motion.div>
          ))}
        </div>
      );
    }

    // Passo 1: Tamanho da Equipe
    if (step === 1) {
      const options = [
        "Sou só eu (Autônomo)", 
        "2 a 5 pessoas", 
        "6 a 15 pessoas", 
        "Mais de 15 pessoas"
      ];
      return (
        <div className="flex flex-wrap gap-2 justify-end p-4 bg-slate-50/80">
          {options.map((opt, i) => (
            <motion.button 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.05 }}
              key={opt} 
              onClick={() => handleSend(opt)} 
              className="px-5 py-2.5 bg-white border border-blue-100 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-600 hover:text-white transition-all shadow-sm"
            >
              {opt}
            </motion.button>
          ))}
        </div>
      );
    }

    // Passo 2: Objetivo
    if (step === 2) {
      const options = [
        "Aumentar minhas vendas urgentes", 
        "Organizar a bagunça interna", 
        "Ter mais tempo livre na operação",
        "Preparar a empresa para crescer"
      ];
      return (
        <div className="flex flex-col gap-2 p-4 w-full max-w-md ml-auto bg-slate-50/80">
          {options.map((opt, i) => (
            <motion.button 
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              key={opt} 
              onClick={() => handleSend(opt)} 
              className="w-full text-left px-5 py-3.5 bg-white border border-slate-200 rounded-xl text-slate-700 text-sm font-medium hover:border-blue-500 hover:shadow-md hover:text-blue-700 transition-all flex justify-between items-center group"
            >
              {opt}
              <ArrowRight size={16} className="text-slate-300 group-hover:text-blue-500 transition-colors shrink-0 ml-2" />
            </motion.button>
          ))}
        </div>
      );
    }

    // Passo 5: Fim (Botão do WhatsApp)
    if (step === 5 && !loading) {
      const waNumber = "5511936200327"; // << COLOQUE SEU WHATSAPP AQUI
      const waMessage = encodeURIComponent(`Olá Raphael! Acabei de falar com a Sofia no site e preenchi o diagnóstico. Meu nome é ${formData.nome}, podemos falar sobre a operação da minha empresa?`);
      
      return (
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="p-6 bg-white border-t border-slate-100 flex flex-col items-center gap-3 text-center"
        >
          <p className="text-sm text-slate-500 font-medium">Não quer esperar? Fale diretamente com ele agora:</p>
          <a 
            href={`https://wa.me/${waNumber}?text=${waMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose} 
            className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white px-6 py-4 rounded-xl font-bold hover:bg-[#128C7E] transition-all shadow-lg shadow-green-500/20"
          >
            <MessageCircle size={20} />
            Chamar no WhatsApp
          </a>
        </motion.div>
      );
    }

    // Input de Texto Livre (Passo 3 e 4)
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
            placeholder={step === 4 ? "Ex: (11) 99999-9999" : "Digite sua resposta..."}
            className="flex-1 bg-slate-100 border-0 rounded-full px-5 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-slate-400"
            disabled={loading}
          />
          <button 
            type="submit" 
            disabled={!inputValue.trim() || loading}
            className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md transform active:scale-95"
          >
            <Send size={20} />
          </button>
        </form>
      </div>
    );
  };

  return (
    <div className="flex flex-col h-full bg-[#F5F7FB] relative font-sans">
      
      {/* HEADER */}
      <div className="bg-white px-4 py-3 shadow-sm border-b border-slate-100 flex justify-between items-center z-20 shrink-0">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-md">
              <Code2 size={20} className="text-white" />
            </div>
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold text-slate-800 text-sm leading-tight">R&B Assistant</h3>
            <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wide">Online</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <button 
            onClick={handleRestart}
            title="Recomeçar conversa"
            className="p-2 hover:bg-slate-100 rounded-full text-slate-400 hover:text-blue-600 transition-colors"
          >
            <RotateCcw size={20} />
          </button>
          <button 
            onClick={onClose}
            title="Fechar chat"
            className="p-2 hover:bg-red-50 rounded-full text-slate-400 hover:text-red-500 transition-colors"
          >
            <X size={24} />
          </button>
        </div>
      </div>

      {/* ÁREA DE MENSAGENS */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6 pb-8" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
        {messages.map((msg) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className={`flex w-full ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`flex items-end gap-2 max-w-[85%] md:max-w-[80%] ${msg.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              
              {msg.type === 'bot' && (
                <div className="w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 mb-1 shadow-sm">
                  <Code2 size={12} className="text-blue-600" />
                </div>
              )}

              <div className={`px-5 py-3 text-[15px] leading-relaxed shadow-sm relative ${
                msg.type === 'user' 
                  ? 'bg-blue-600 text-white rounded-2xl rounded-tr-none' 
                  : 'bg-white text-slate-800 border border-slate-100 rounded-2xl rounded-tl-none'
              }`}>
                {msg.content}
              </div>
            </div>
          </motion.div>
        ))}

        {isTyping && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 ml-8">
            <div className="bg-white px-4 py-3 rounded-2xl rounded-tl-none border border-slate-100 shadow-sm flex gap-1.5">
              <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
              <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-100"></span>
              <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-200"></span>
            </div>
          </motion.div>
        )}
        
        <div ref={messagesEndRef} className="h-4" />
      </div>

      {/* ÁREA DE INPUT / BOTÕES */}
      <AnimatePresence mode="wait">
        {isInputVisible && (
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            className="w-full bg-white/90 backdrop-blur-md border-t border-slate-200 sticky bottom-0 z-20 shrink-0 shadow-[0_-10px_20px_rgba(0,0,0,0.02)]"
          >
            {renderInputArea()}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}