import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "@/locales";
import { scrollToSection } from "@/utils/scrollToSection";

const SECTION_IDS = ["home", "about", "experience", "projects"] as const;

type SectionId = (typeof SECTION_IDS)[number];

export default function DotNavigation() {
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const isHome = pathname === "/";
  const [activeId, setActiveId] = useState<SectionId>("home");
  const ratiosRef = useRef<Map<SectionId, number>>(new Map());

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
      className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-3 rounded-full border border-ink/10 bg-surface/80 p-2 shadow-lg backdrop-blur md:flex"
    >
      {SECTION_IDS.map((id) => {
        const isActive = activeId === id;

        return (
          <a
            key={id}
            href={`#${id}`}
            aria-label={t(`dotNav.${id}`)}
            aria-current={isActive ? "location" : undefined}
            onClick={(event) => {
              event.preventDefault();
              scrollToSection(id);
            }}
            className="group relative flex h-6 w-6 items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
          >
            <span
              className={`h-2.5 w-2.5 rounded-full transition-all duration-200 ${
                isActive
                  ? "scale-125 bg-accent"
                  : "bg-ink/30 group-hover:bg-accent/60"
              }`}
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-md border border-ink/10 bg-surface px-2.5 py-1 text-xs font-medium text-ink opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
            >
              {t(`dotNav.${id}`)}
            </span>
          </a>
        );
      })}
    </nav>
  );
}
