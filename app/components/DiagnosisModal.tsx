"use client"
import { motion, AnimatePresence } from 'framer-motion';
import ChatBot from './ChatBot';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function DiagnosisModal({ isOpen, onClose }: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed inset-0 z-[9999] bg-white flex flex-col h-screen w-screen"
        >
          {/* O Chatbot agora controla tudo, inclusive o botão de fechar */}
          <ChatBot onClose={onClose} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}