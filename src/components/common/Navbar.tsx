import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaDownload, FaTimes } from "react-icons/fa";
import LangSwitcher from "@/components/layout/LangSwitcher";
import { useTranslation } from "@/locales";
import { scrollToSection } from "@/utils/scrollToSection";

const NAV_ITEMS = [
  { id: "home", labelKey: "navbar.home", to: "/" },
  { id: "projects", labelKey: "navbar.projects", to: "/projects" },
  { id: "certificates", labelKey: "navbar.certificates", to: "/certificates" },
  { id: "contact", labelKey: "navbar.contact", to: "/contact" },
] as const;

type NavItem = (typeof NAV_ITEMS)[number];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

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

  const isItemActive = (item: NavItem) => {
    if (item.to === "/") {
      return location.pathname === "/";
    }

    return (
      location.pathname === item.to ||
      location.pathname.startsWith(`${item.to}/`)
    );
  };

  const desktopLink = (item: NavItem) => {
    const isActive = isItemActive(item);
    const className = `relative group rounded-md px-2 py-1 transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 ${
      isActive
        ? "text-accent font-semibold"
        : "text-ink/70 hover:text-accent"
    }`;
    const indicator = (
      <span
        className={`absolute left-0 -bottom-1 h-0.5 bg-accent transition-all duration-300 ${
          isActive ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    );

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
  };

  const mobileLink = (item: NavItem) => {
    const isActive = isItemActive(item);
    const className = `rounded-lg px-3 py-3 text-base transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 ${
      isActive
        ? "bg-accent/10 text-accent font-semibold"
        : "text-ink/70 hover:bg-ink/5 hover:text-accent"
    }`;

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
  };

  return (
    <nav
      aria-label={t("navbar.mainNavigation")}
      className="fixed top-0 left-0 w-full bg-surface/90 backdrop-blur-md border-b border-ink/10 shadow-sm z-50 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="text-2xl font-bold text-ink hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
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
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg text-ink/70 hover:bg-ink/5 hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
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
          className="lg:hidden absolute left-0 right-0 top-full flex h-[calc(100dvh-4rem)] flex-col overflow-y-auto bg-surface px-4 py-4 shadow-lg animate-fade-in-down"
        >
          <div className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => mobileLink(item))}
          </div>

          <div className="mt-auto pt-6">
            <a
              href="/files/FAIZ_ZAMZAMI_Full_New.pdf"
              download="Faiz_Zamzami_CV.pdf"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-4 py-3 font-semibold text-page hover:bg-accent/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
            >
              <FaDownload /> {t("navbar.downloadCv")}
            </a>
            <p className="mt-4 text-center text-sm text-ink/60">
              {t("navbar.availability")}
            </p>
          </div>
        </div>
      )}
    </nav>
  );
}
