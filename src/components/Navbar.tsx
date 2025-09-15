import { useEffect, useState } from "react";

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
      { threshold: 0.6 } // 60% terlihat baru dianggap aktif
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

  const sectionIds = ["home", "about", "services", "portfolio", "sertifikat", "contact"];
  const activeId = useScrollSpy(sectionIds);

  const navLink = (id: string, label: string) => (
    <a
      href={`#${id}`}
      className={`relative group px-2 py-1 transition duration-300 
        ${activeId === id ? "text-blue-700 font-semibold" : "text-gray-300 hover:text-blue-500"}`}
    >
      {label}
      <span
        className={`absolute left-0 -bottom-1 h-0.5 bg-blue-700 transition-all duration-300 
          ${activeId === id ? "w-full" : "w-0 group-hover:w-full"}`}
      ></span>
    </a>
  );

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-bold">ZamiFaiz</div>

          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-6">
            {navLink("home", "Home")}
            {navLink("about", "About")}
            {navLink("service", "Services")}
            {navLink("projects", "Projects")}
            {navLink("sertifikat", "Certificates")}
            {navLink("contact", "Contact")}
          </div>

          {/* Burger Button (Mobile) */}
          <button
            className="md:hidden text-gray-200 hover:text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-4 py-2 space-y-2">
          {sectionIds.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setIsOpen(false)}
              className={`block transition duration-300 
                ${activeId === id ? "text-blue-700 font-semibold" : "text-gray-300 hover:text-blue-500"}`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}