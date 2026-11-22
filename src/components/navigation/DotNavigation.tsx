import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "@/locales";
import { scrollToSection } from "@/utils/scrollToSection";

const SECTION_IDS = ["about", "experience", "projects"] as const;

type SectionId = (typeof SECTION_IDS)[number];

export default function DotNavigation() {
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const isHome = pathname === "/";
  const [activeId, setActiveId] = useState<SectionId>("about");
  const [isVisible, setIsVisible] = useState(false);
  const ratiosRef = useRef<Map<SectionId, number>>(new Map());

  useEffect(() => {
    if (!isHome) return;

    const hero = document.getElementById("home");

    if (!hero) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(!entry.isIntersecting),
      { threshold: 0.15 }
    );

    observer.observe(hero);

    return () => observer.disconnect();
  }, [isHome]);

  useEffect(() => {
    if (!isHome) return;

    const elements = SECTION_IDS.map((id) =>
      document.getElementById(id)
    ).filter((element): element is HTMLElement => element !== null);

    if (elements.length === 0) return;

    ratiosRef.current.clear();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (SECTION_IDS.includes(entry.target.id as SectionId)) {
            ratiosRef.current.set(
              entry.target.id as SectionId,
              entry.intersectionRatio
            );
          }
        });

        let bestId: SectionId | null = null;
        let bestRatio = 0;

        ratiosRef.current.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        });

        if (bestId) setActiveId(bestId);
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [isHome]);

  if (!isHome) return null;

  return (
    <nav
      aria-label={t("dotNav.label")}
      aria-hidden={!isVisible}
      className={`fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-4 transition-all duration-300 motion-reduce:transition-none xl:flex ${
        isVisible
          ? "translate-x-0 opacity-100"
          : "pointer-events-none translate-x-2 opacity-0"
      }`}
    >
      {SECTION_IDS.map((id) => {
        const isActive = activeId === id;

        return (
          <a
            key={id}
            href={`#${id}`}
            aria-label={t(`dotNav.${id}`)}
            aria-current={isActive ? "location" : undefined}
            tabIndex={isVisible ? 0 : -1}
            onClick={(event) => {
              event.preventDefault();
              scrollToSection(id);
            }}
            className="group relative flex h-6 w-6 items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
          >
            <span
              className={`rounded-full transition-all duration-200 ${
                isActive
                  ? "h-5 w-1.5 bg-accent"
                  : "h-2 w-2 bg-ink/30 group-hover:bg-accent/60"
              }`}
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-md border border-ink/10 bg-surface px-2.5 py-1 text-xs font-medium text-ink opacity-0 shadow-sm transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
            >
              {t(`dotNav.${id}`)}
            </span>
          </a>
        );
      })}
    </nav>
  );
}
