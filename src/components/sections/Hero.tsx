import { FaArrowDown, FaDownload } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { scrollToSection } from "@/utils/scrollToSection";

export default function Hero() {
  const scrollToProjects = () => {
    scrollToSection("projects");
  };

  return (
    <section
      id="home"
      className="scroll-mt-16 min-h-[100svh] flex flex-col justify-center items-center text-center px-6 pt-24 pb-20 w-full transition-colors duration-500 bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-black dark:to-gray-900"
    >
      <div className="relative z-10 text-center max-w-4xl">
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-700 dark:border-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          Fresh Graduate · Open to full-time
        </span>

        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Hi, I am{" "}
          <span className="text-blue-700 dark:text-cyan-400">Faiz Zamzami</span>
        </h1>

        <h2 className="text-xl md:text-2xl mt-4 font-semibold text-slate-700 dark:text-gray-200">
          <Typewriter
            words={[
              "Junior Full Stack Developer",
              "Laravel & React Developer",
              "Backend-Focused Full Stack",
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
          I build end-to-end web applications with a backend focus — Laravel
          REST APIs, MySQL, and React/TypeScript frontends.
        </p>

        <p className="mt-3 text-sm font-medium text-gray-500 dark:text-gray-400">
          Open to backend or full-stack roles.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/files/FAIZ_ZAMZAMI_Full_New.pdf"
            download="Faiz_Zamzami_CV.pdf"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
          >
            <FaDownload /> Download CV
          </a>

          <button
            type="button"
            onClick={scrollToProjects}
            className="px-8 py-3 rounded-lg font-semibold bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-blue-600 dark:text-cyan-400 border-2 border-blue-600 dark:border-cyan-400 shadow-md hover:shadow-lg hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
          >
            View Projects
          </button>

          <a
            href="#contact"
            onClick={(event) => {
              event.preventDefault();
              scrollToSection("contact");
            }}
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg font-semibold text-gray-700 dark:text-gray-200 hover:text-blue-700 dark:hover:text-cyan-400 hover:bg-white/70 dark:hover:bg-gray-800/70 transition-all duration-300"
          >
            Contact Me
          </a>
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
          aria-label="Scroll to About section"
        >
          <span className="text-sm font-semibold mb-1">Scroll Down</span>
          <FaArrowDown className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}
