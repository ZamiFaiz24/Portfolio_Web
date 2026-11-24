import { FaArrowDown, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { scrollToSection } from "@/utils/scrollToSection";
import { useTranslation } from "@/locales";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export default function Hero() {
  const { t } = useTranslation();
  const prefersReducedMotion = usePrefersReducedMotion();

  const scrollToProjects = () => {
    scrollToSection("projects");
  };

  const keywords = [
    t("hero.keywords.laravel"),
    t("hero.keywords.restApi"),
    t("hero.keywords.react"),
    t("hero.keywords.mysql"),
  ];
  const keywordLine = keywords.join(" · ");

  return (
    <section
      id="home"
      className="relative isolate scroll-mt-16 min-h-[100svh] flex flex-col justify-center items-center overflow-hidden text-center px-6 pt-24 pb-20 w-full transition-colors duration-500 bg-page"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="hero-grid absolute inset-0" />
        <div className="hero-glow absolute inset-0" />
        <div className="hero-vignette absolute inset-0" />
      </div>

      <div className="relative z-10 text-center max-w-4xl">
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-700 dark:border-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          {t("hero.badge")}
        </span>

        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-ink">
          {t("hero.titlePrefix")}{" "}
          <span className="text-accent">{t("hero.name")}</span>
        </h1>

        <h2 className="mt-4 text-xl md:text-2xl font-semibold text-ink/80">
          {t("hero.role")}
        </h2>

        <div className="mt-2 text-sm font-medium text-accent">
          {prefersReducedMotion ? (
            <span>{keywordLine}</span>
          ) : (
            <>
              <span aria-hidden="true">
                <Typewriter
                  words={keywords}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1400}
                />
              </span>
              <span className="sr-only">{keywordLine}</span>
            </>
          )}
        </div>

        <p className="mt-5 text-lg leading-relaxed text-ink/70 max-w-2xl mx-auto">
          {t("hero.description")}
        </p>

        <p className="mt-4 text-sm font-medium text-ink/60">
          {t("hero.proof")}
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            type="button"
            onClick={scrollToProjects}
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-semibold bg-accent text-slate-950 shadow-sm hover:bg-accent/90 transition-all duration-300 hover:-translate-y-0.5 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
          >
            {t("hero.buttons.viewProjects")}{" "}
            <FaArrowRight className="text-sm" aria-hidden="true" />
          </button>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg font-semibold border border-accent text-accent hover:bg-accent/10 transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
          >
            {t("hero.buttons.contactMe")}
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-20">
        <a
          href="#about"
          onClick={(event) => {
            event.preventDefault();
            scrollToSection("about");
          }}
          className="flex flex-col items-center text-ink/60 hover:text-accent transition group cursor-pointer"
          aria-label={t("hero.scrollToAboutAria")}
        >
          <span className="text-sm font-semibold mb-1">
            {t("hero.buttons.scrollDown")}
          </span>
          <FaArrowDown className="motion-safe:animate-bounce" />
        </a>
      </div>
    </section>
  );
}
