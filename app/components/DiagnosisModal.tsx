"use client"
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Loader2, ArrowRight } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function DiagnosisModal({ isOpen, onClose }: Props) {
  const [step, setStep] = useState(1); // 1: Form, 2: Success
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    whatsapp: '',
    cargo: '',
    desafio: '',
    orcamento: ''
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch('/api/send', {
        method: 'POST',
        body: JSON.stringify(formData),
      });
      setStep(2); // Vai para tela de sucesso
    } catch (error) {
      alert("Erro ao enviar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  // Redirecionar para WhatsApp após cadastro (Opcional, mas recomendado para manter o lead quente)
  const handleWhatsAppRedirect = () => {
    const text = `Olá, acabei de preencher o diagnóstico da ${formData.empresa}. Podemos conversar?`;
    window.open(`https://wa.me/551136200327?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Escuro */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            {/* Modal */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden relative"
            >
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X size={20} />
              </button>

              {step === 1 ? (
                <div className="p-8">
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-slate-900">Diagnóstico Gratuito</h2>
                    <p className="text-slate-500 text-sm mt-1">
                      Preencha para analisarmos a viabilidade do seu projeto.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-bold text-slate-700 uppercase">Nome</label>
                        <input required name="nome" onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-slate-800" placeholder="Seu nome" />
                      </div>
                      <div>
                        <label className="text-xs font-bold text-slate-700 uppercase">WhatsApp</label>
                        <input required name="whatsapp" onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-slate-800" placeholder="(11) 99999..." />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-bold text-slate-700 uppercase">Empresa</label>
                        <input required name="empresa" onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-slate-800" placeholder="Nome da empresa" />
                      </div>
                      <div>
                        <label className="text-xs font-bold text-slate-700 uppercase">Cargo</label>
                        <select required name="cargo" onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-slate-800">
                          <option value="">Selecione...</option>
                          <option value="Socio/Dono">Sócio / Dono</option>
                          <option value="Gerente">Gerente / Diretor</option>
                          <option value="Outro">Outro</option>
                        </select>
                      </div>
                    </div>

                    {/* O Qualificador de Preço (IMPORTANTE) */}
                    <div>
                      <label className="text-xs font-bold text-slate-700 uppercase">Investimento Previsto</label>
                      <select required name="orcamento" onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-slate-800">
                        <option value="">Selecione uma faixa...</option>
                        <option value="Investimento Baixo (< 5k)">Até R$ 5.000 (MVP Simples)</option>
                        <option value="Medio (5k-15k)">Entre R$ 5k e R$ 15k</option>
                        <option value="Ideal (15k-40k)">Entre R$ 15k e R$ 40k (Sistema Completo)</option>
                        <option value="Enterprise (40k+)">Acima de R$ 40k</option>
                        <option value="Nao sei">Não tenho orçamento definido</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 uppercase">Descreva seu desafio principal</label>
                      <textarea required name="desafio" rows={3} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-slate-800" placeholder="Ex: Gasto muito com taxas do iFood / Minhas planilhas travam..." />
                    </div>

                    <button 
                      type="submit" 
                      disabled={loading}
                      className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2"
                    >
                      {loading ? <Loader2 className="animate-spin" /> : 'Solicitar Diagnóstico'}
                    </button>
                  </form>
                </div>
              ) : (
                /* Passo 2: Sucesso */
                <div className="p-12 text-center">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={40} />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Recebemos seu pedido!</h2>
                  <p className="text-slate-600 mb-8">
                    A R&B Labs vai analisar seu perfil e entrar em contato em breve.
                  </p>
                  
                  <button 
                    onClick={handleWhatsAppRedirect}
                    className="w-full py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-green-500/30"
                  >
                    Chamar no WhatsApp Agora
                    <ArrowRight size={20} />
                  </button>
                  
                  <button onClick={onClose} className="mt-4 text-sm text-slate-400 hover:text-slate-600 underline">
                    Fechar e voltar ao site
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}