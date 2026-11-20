import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaDownload, FaTimes } from "react-icons/fa";
import LangSwitcher from "@/components/layout/LangSwitcher";
import { useTranslation } from "@/locales";
import { scrollToSection } from "@/utils/scrollToSection";

const NAV_ITEMS = [
  { id: "home", labelKey: "navbar.home", type: "route", to: "/" },
  { id: "about", labelKey: "navbar.about", type: "hash", hash: "about" },
  {
    id: "experience",
    labelKey: "navbar.experience",
    type: "hash",
    hash: "experience",
  },
  {
    id: "projects",
    labelKey: "navbar.projects",
    type: "route",
    to: "/projects",
  },
  {
    id: "certificates",
    labelKey: "navbar.certificates",
    type: "route",
    to: "/certificates",
  },
  { id: "contact", labelKey: "navbar.contact", type: "hash", hash: "contact" },
] as const;

type NavItem = (typeof NAV_ITEMS)[number];

const HASH_SECTION_IDS = NAV_ITEMS.filter((item) => item.type === "hash").map(
  (item) => item.hash
);

const SCROLL_SPY_IDS = ["home", ...HASH_SECTION_IDS];

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
  const { t } = useTranslation();
  const activeId = useScrollSpy(SCROLL_SPY_IDS);

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

  useEffect(() => {
    if (location.pathname !== "/" || !location.hash) return;

    const target = location.hash.replace(/^#/, "");
    if (!target) return;

    let frame = 0;
    let attempts = 0;
    let cancelled = false;

    const tryScroll = () => {
      if (cancelled) return;

      if (document.getElementById(target)) {
        scrollToSection(target);
        return;
      }

      attempts += 1;
      if (attempts < 30) {
        frame = window.requestAnimationFrame(tryScroll);
      }
    };

    frame = window.requestAnimationFrame(tryScroll);

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(frame);
    };
  }, [location.hash, location.key, location.pathname]);

  const handleHashNavigation = (hash: string) => {
    setIsOpen(false);

    if (location.pathname === "/") {
      scrollToSection(hash);
      return;
    }

    navigate({ pathname: "/", hash: `#${hash}` });
  };

  const isItemActive = (item: NavItem) => {
    if (item.type === "route") {
      if (item.to === "/") {
        return (
          location.pathname === "/" && (activeId === "" || activeId === "home")
        );
      }

      return (
        location.pathname === item.to ||
        location.pathname.startsWith(`${item.to}/`)
      );
    }

    return location.pathname === "/" && activeId === item.hash;
  };

  const desktopLink = (item: NavItem) => {
    const isActive = isItemActive(item);
    const className = `relative group px-2 py-1 transition duration-300
      ${
        isActive
          ? "text-blue-600 dark:text-cyan-400 font-semibold"
          : "text-gray-800 hover:text-blue-600 dark:text-gray-300 dark:hover:text-cyan-400"
      }`;
    const indicator = (
      <span
        className={`absolute left-0 -bottom-1 h-0.5 bg-blue-600 dark:bg-cyan-400 transition-all duration-300
          ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
      />
    );

    if (item.type === "route") {
      return (
        <Link
          key={item.id}
          to={item.to}
          onClick={() => setIsOpen(false)}
          aria-current={isActive ? "page" : undefined}
          className={className}
        >
          {t(item.labelKey)}
          {indicator}
        </Link>
      );
    }

    return (
      <a
        key={item.id}
        href={`#${item.hash}`}
        onClick={(event) => {
          event.preventDefault();
          handleHashNavigation(item.hash);
        }}
        aria-current={isActive ? "page" : undefined}
        className={className}
      >
        {t(item.labelKey)}
        {indicator}
      </a>
    );
  };

  const mobileLink = (item: NavItem) => {
    const isActive = isItemActive(item);
    const className = `rounded-lg px-3 py-3 text-base transition-colors
      ${
        isActive
          ? "bg-blue-50 text-blue-700 font-semibold dark:bg-gray-800 dark:text-cyan-400"
          : "text-gray-700 hover:bg-gray-50 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-cyan-400"
      }`;

    if (item.type === "route") {
      return (
        <Link
          key={item.id}
          to={item.to}
          onClick={() => setIsOpen(false)}
          aria-current={isActive ? "page" : undefined}
          className={className}
        >
          {t(item.labelKey)}
        </Link>
      );
    }

    return (
      <a
        key={item.id}
        href={`#${item.hash}`}
        onClick={(event) => {
          event.preventDefault();
          handleHashNavigation(item.hash);
        }}
        aria-current={isActive ? "page" : undefined}
        className={className}
      >
        {t(item.labelKey)}
      </a>
    );
  };

  return (
    <nav
      aria-label={t("navbar.mainNavigation")}
      className="fixed top-0 left-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md dark:shadow-gray-800 z-50 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="text-2xl font-bold text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
          >
            {t("navbar.brand")}
          </Link>

          <div className="flex items-center gap-2 sm:gap-4">
            <div className="hidden lg:flex items-center gap-6">
              {NAV_ITEMS.map((item) => desktopLink(item))}
            </div>

            <LangSwitcher />

            <button
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              aria-label={
                isOpen ? t("navbar.menuClose") : t("navbar.menuOpen")
              }
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-cyan-400 transition-colors"
            >
              {isOpen ? (
                <FaTimes className="text-xl" />
              ) : (
                <FaBars className="text-xl" />
              )}
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
            {NAV_ITEMS.map((item) => mobileLink(item))}
          </div>

          <div className="mt-auto pt-6">
            <a
              href="/files/FAIZ_ZAMZAMI_Full_New.pdf"
              download="Faiz_Zamzami_CV.pdf"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-700 transition-colors"
            >
              <FaDownload /> {t("navbar.downloadCv")}
            </a>
            <p className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
              {t("navbar.availability")}
            </p>
          </div>
        </div>
      )}
    </nav>
  );
}
