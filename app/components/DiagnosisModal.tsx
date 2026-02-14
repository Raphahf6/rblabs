"use client"
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ChatBot from './ChatBot';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function DiagnosisModal({ isOpen, onClose }: Props) {
  
  // Bloqueia o scroll do site principal quando o modal abre
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-end md:items-center justify-center">
          
          {/* Backdrop Escuro (Clica fora para fechar no Desktop) */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* A Janela do Chat */}
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full h-full md:w-[450px] md:h-[700px] md:max-h-[90vh] bg-white md:rounded-2xl overflow-hidden shadow-2xl flex flex-col"
          >
            <ChatBot onClose={onClose} />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}