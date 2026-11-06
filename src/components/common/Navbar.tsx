import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaDownload, FaTimes } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";
import { scrollToSection } from "@/utils/scrollToSection";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "service", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "sertifikat", label: "Certificates" },
  { id: "contact", label: "Contact" },
] as const;

const SECTION_IDS = NAV_ITEMS.map((item) => item.id);

function useScrollSpy(sectionIds: readonly string[]) {
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
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
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
  const location = useLocation();
  const navigate = useNavigate();
  const activeId = useScrollSpy(SECTION_IDS);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleNavigation = (id: string) => {
    setIsOpen(false);

    if (location.pathname === "/") {
      scrollToSection(id);
      return;
    }

    navigate("/", { state: { scrollTo: id } });
  };

  const desktopLink = (id: string, label: string) => (
    <a
      key={id}
      href={`#${id}`}
      onClick={(event) => {
        event.preventDefault();
        handleNavigation(id);
      }}
      aria-current={activeId === id ? "page" : undefined}
      className={`relative group px-2 py-1 transition duration-300
        ${
          activeId === id
            ? "text-blue-600 dark:text-cyan-400 font-semibold"
            : "text-gray-800 hover:text-blue-600 dark:text-gray-300 dark:hover:text-cyan-400"
        }`}
    >
      {label}
      <span
        className={`absolute left-0 -bottom-1 h-0.5 bg-blue-600 dark:bg-cyan-400 transition-all duration-300
          ${activeId === id ? "w-full" : "w-0 group-hover:w-full"}`}
      />
    </a>
  );

  return (
    <nav
      aria-label="Main navigation"
      className="fixed top-0 left-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md dark:shadow-gray-800 z-50 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="text-2xl font-bold text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
          >
            Faiz Zamzami
          </Link>

          <div className="flex items-center gap-2 sm:gap-4">
            <div className="hidden lg:flex items-center gap-6">
              {NAV_ITEMS.map((item) => desktopLink(item.id, item.label))}
            </div>

            <ThemeToggle />

            <button
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-cyan-400 transition-colors"
            >
              {isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden absolute left-0 right-0 top-full flex h-[calc(100dvh-4rem)] flex-col overflow-y-auto bg-white dark:bg-gray-900 px-4 py-4 shadow-lg animate-fade-in-down"
        >
          <div className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(event) => {
                  event.preventDefault();
                  handleNavigation(item.id);
                }}
                aria-current={activeId === item.id ? "page" : undefined}
                className={`rounded-lg px-3 py-3 text-base transition-colors
                  ${
                    activeId === item.id
                      ? "bg-blue-50 text-blue-700 font-semibold dark:bg-gray-800 dark:text-cyan-400"
                      : "text-gray-700 hover:bg-gray-50 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-cyan-400"
                  }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="mt-auto pt-6">
            <a
              href="/files/FAIZ_ZAMZAMI_Full_New.pdf"
              download="Faiz_Zamzami_CV.pdf"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-700 transition-colors"
            >
              <FaDownload /> Download CV
            </a>
            <p className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
              Fresh Graduate · Open to full-time
            </p>
          </div>
        </div>
      )}
    </nav>
  );
}
