import { useEffect, useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

function useScrollSpy(sectionIds: string[]) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const sectionIds = ["home", "about", "services", "projects", "sertifikat", "contact"];
  const activeId = useScrollSpy(sectionIds);

  const navLink = (id: string, label: string) => (
    <a
      href={`#${id}`}
      // Gaya link diubah untuk mendukung dark mode
      className={`relative group px-2 py-1 transition duration-300 
        ${activeId === id 
          ? "text-blue-600 dark:text-cyan-400 font-semibold" 
          : "text-gray-800 hover:text-blue-600 dark:text-gray-300 dark:hover:text-cyan-400"
        }`}
    >
      {label}
      <span
        // Garis bawah juga diubah warnanya
        className={`absolute left-0 -bottom-1 h-0.5 bg-blue-600 dark:bg-cyan-400 transition-all duration-300 
          ${activeId === id ? "w-full" : "w-0 group-hover:w-full"}`}
      ></span>
    </a>
  );

  return (
    // Latar navbar diubah untuk mendukung dark mode + efek blur
    <nav className="fixed top-0 left-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md dark:shadow-gray-800 z-50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-800 dark:text-white">
            ZamiFaiz
          </div>

          <div className="flex items-center space-x-6">
            {/* Menu Desktop */}
            <div className="hidden md:flex space-x-6">
              {navLink("home", "Home")}
              {navLink("about", "About")}
              {navLink("service", "Services")}
              {navLink("projects", "Projects")}
              {navLink("sertifikat", "Certificates")}
              {navLink("contact", "Contact")}
            </div>

            {/* 4. Tombol Toggle Tema */}
           <ThemeToggle />
          </div>

          {/* Burger Button (Mobile) - Tidak perlu diubah, karena menu mobile sudah di-handle di bawah */}
        </div>
      </div>
      {/* Mobile Menu - Gayanya perlu disesuaikan juga */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 px-4 py-2 space-y-2">
          {sectionIds.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setIsOpen(false)}
              className={`block transition duration-300 
                ${activeId === id 
                  ? "text-blue-600 dark:text-cyan-400 font-semibold" 
                  : "text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-cyan-400"
                }`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}