// src/components/NotificationModal.tsx

import React, { useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

type PopupState = {
  type: "success" | "error";
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
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
  exit: { scale: 0.5, opacity: 0 },
};

const NotificationModal: React.FC<NotificationModalProps> = ({
  popup,
  onClose,
}) => {
  useEffect(() => {
    if (!popup) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [popup, onClose]);

  const isSuccess = popup?.type === "success";

  return (
    <AnimatePresence>
      {popup && (
        <motion.div
          key="notification-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50 p-4"
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="notification-title"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border border-gray-300 dark:border-gray-700 shadow-2xl rounded-2xl px-6 py-8 max-w-sm w-full text-center"
          >
            <motion.div
              key={popup.type}
              variants={iconVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="mb-4"
            >
              {isSuccess ? (
                <FaCheckCircle className="text-6xl text-blue-600 dark:text-cyan-400 mx-auto" />
              ) : (
                <FaTimesCircle className="text-6xl text-red-500 dark:text-red-400 mx-auto" />
              )}
            </motion.div>

            <p
              id="notification-title"
              className="font-semibold text-lg text-gray-800 dark:text-gray-100 mb-1"
            >
              {isSuccess ? "Success!" : "Oops!"}
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {popup.message}
            </p>

            <button
              type="button"
              onClick={onClose}
              className={`w-full px-4 py-2 font-semibold text-white rounded-lg transition-all duration-300 hover:scale-[1.02] active:scale-95
                ${
                  isSuccess
                    ? "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl"
                    : "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 shadow-lg hover:shadow-xl"
                }`}
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NotificationModal;
