import { useTheme } from "@/context/ThemeContext";
import { FaDesktop } from "react-icons/fa";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { useState, useEffect, useRef, JSX } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ThemeOption = {
  value: "light" | "dark" | "system";
  icon: JSX.Element;
  label: string;
};

const options: ThemeOption[] = [
  { value: "light", icon: <BsSunFill />, label: "Light" },
  { value: "dark", icon: <BsMoonFill />, label: "Dark" },
  { value: "system", icon: <FaDesktop />, label: "System" },
];

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const activeOption = options.find((option) => option.value === theme);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="p-2 rounded-full bg-white/80 text-gray-700 hover:text-blue-600 dark:bg-gray-900/80 dark:hover:text-cyan-400 dark:text-gray-300 transition-colors duration-200 cursor-pointer"
        aria-label="Select color theme"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        title={`Theme: ${activeOption?.label ?? "System"}`}
      >
        {activeOption?.icon || <FaDesktop />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute top-full right-0 mt-2 w-44 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700"
          >
            <ul className="p-2" role="menu" aria-label="Color theme">
              {options.map((option) => (
                <li key={option.value}>
                  <button
                    type="button"
                    role="menuitemradio"
                    aria-checked={theme === option.value}
                    onClick={() => {
                      setTheme(option.value);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center justify-between gap-3 px-3 py-2 text-left text-sm rounded-md transition-colors cursor-pointer
                      ${
                        theme === option.value
                          ? "bg-blue-50 text-blue-600 dark:bg-gray-700 dark:text-cyan-400"
                          : "text-gray-700 hover:text-blue-600 dark:text-gray-300 hover:dark:text-cyan-400"
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-5">{option.icon}</span>
                      <span>{option.label}</span>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
