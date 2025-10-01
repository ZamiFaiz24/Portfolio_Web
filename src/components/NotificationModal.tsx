// src/components/NotificationModal.tsx

import React from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

type PopupState = {
  type: 'success' | 'error';
  message: string;
};

type NotificationModalProps = {
  popup: PopupState | null;
  onClose: () => void;
};

const iconVariants: Variants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { 
      type: 'spring', 
      stiffness: 300, 
      damping: 20 
    }
  },
  exit: { scale: 0.5, opacity: 0 }
};

const NotificationModal: React.FC<NotificationModalProps> = ({ popup, onClose }) => {
  if (!popup) return null;

  const isSuccess = popup.type === 'success';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50 p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-300 dark:border-gray-700 shadow-2xl rounded-2xl px-6 py-8 max-w-sm w-full text-center"
        >
          {/* Ikon Animasi */}
          <motion.div
            key={popup.type}
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="mb-4"
          >
            {isSuccess ? (
              // 1. Warna ikon sukses diubah
              <FaCheckCircle className="text-6xl text-blue-600 dark:text-cyan-400 mx-auto" />
            ) : (
              <FaTimesCircle className="text-6xl text-red-500 dark:text-red-400 mx-auto" />
            )}
          </motion.div>
          
          {/* Pesan Notifikasi */}
          <p className="font-semibold text-lg text-gray-800 dark:text-gray-100 mb-1">
            {isSuccess ? 'Success!' : 'Oops!'}
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            {popup.message}
          </p>
          
          {/* Tombol Close */}
          <button
            onClick={onClose}
            className={`w-full px-4 py-2 font-semibold text-white rounded-lg transition-transform transform hover:scale-105
              ${isSuccess 
                // 2. Warna tombol sukses diubah
                ? 'bg-blue-600 hover:bg-blue-700 dark:bg-cyan-500 dark:hover:bg-cyan-600' 
                : 'bg-red-600 hover:bg-red-700'
              }`}
          >
            Close
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default NotificationModal;