import { FaArrowDown, FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { scrollToSection } from "@/utils/scrollToSection";
import { useTranslation } from "@/locales";

export default function Hero() {
  const { t } = useTranslation();
  const scrollToProjects = () => {
    scrollToSection("projects");
  };

  return (
    <section
      id="home"
      className="scroll-mt-16 min-h-[100svh] flex flex-col justify-center items-center text-center px-6 pt-24 pb-20 w-full transition-colors duration-500 bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900"
    >
      <div className="relative z-10 text-center max-w-4xl">
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-700 dark:border-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          {t("hero.badge")}
        </span>

        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          {t("hero.titlePrefix")}{" "}
          <span className="text-blue-700 dark:text-cyan-400">{t("hero.name")}</span>
        </h1>

        <h2 className="text-xl md:text-2xl mt-4 font-semibold text-slate-700 dark:text-gray-200">
          <Typewriter
            words={[
              t("hero.subtitle"),
              t("hero.subtitleAltLaravel"),
              t("hero.subtitleAltBackend"),
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={60}
            delaySpeed={1500}
          />
        </h2>

        <p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {t("hero.description")}
        </p>

        <p className="mt-3 text-sm font-medium text-gray-500 dark:text-gray-400">
          {t("hero.availabilityNote")}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/files/FAIZ_ZAMZAMI_Full_New.pdf"
            download="Faiz_Zamzami_CV.pdf"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
          >
            <FaDownload /> {t("hero.buttons.downloadCv")}
          </a>

          <button
            type="button"
            onClick={scrollToProjects}
            className="px-8 py-3 rounded-lg font-semibold bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-blue-600 dark:text-cyan-400 border-2 border-blue-600 dark:border-cyan-400 shadow-md hover:shadow-lg hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
          >
            {t("hero.buttons.viewProjects")}
          </button>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg font-semibold text-gray-700 dark:text-gray-200 hover:text-blue-700 dark:hover:text-cyan-400 hover:bg-white/70 dark:hover:bg-gray-800/70 transition-all duration-300"
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
          className="flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400 transition group cursor-pointer"
          aria-label={t("hero.scrollToAboutAria")}
        >
          <span className="text-sm font-semibold mb-1">
            {t("hero.buttons.scrollDown")}
          </span>
          <FaArrowDown className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}
