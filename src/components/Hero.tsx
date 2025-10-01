import React from "react";
import { FaArrowDown } from "react-icons/fa";
import InteractiveBackground from "./InteractiveBackground";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center px-6
                w-full transition-colors duration-500
                animated-gradient
                bg-gradient-to-br from-blue-400 via-white to-blue-400
                dark:from-blue-800 dark:via-black dark:to-blue-800"
    >
      <InteractiveBackground />

      {/* Konten */}
      <div className="relative z-10 text-center max-w-4xl">
        {/* 1. Judul Utama disesuaikan warnanya */}
        <h1 className="text-5xl md:text-6xl font-extrabold mb-3 tracking-tight text-slate-800 dark:text-white">
          Hi, I am <span className="text-blue-600 dark:text-cyan-400">Faiz Zamzami</span>
        </h1>

        {/* 2. Subtitle disesuaikan warnanya */}
        <h2
          className="text-2xl md:text-3xl mt-2 font-bold
                    bg-gradient-to-r from-blue-700 via-slate-700 to-blue-500
                    dark:from-cyan-400 dark:via-white dark:to-cyan-500
                    bg-clip-text text-transparent drop-shadow-lg"
        >
          <Typewriter
            words={[
              "Junior Backend Developer",
              "Laravel Enthusiast",
              "API Builder",
            ]}
            loop={true}
            cursor
            cursorStyle="▋"
            typeSpeed={100}
            deleteSpeed={60}
            delaySpeed={1500}
          />
    </h2>

        {/* 3. Paragraf deskripsi disesuaikan warnanya */}
        <p className="mt-6 text-gray-600 dark:text-gray-300 text-xl leading-relaxed max-w-2xl mx-auto">
          Building the future of the web, one line of code at a time.
        </p>

        {/* 4. Tombol Aksi disesuaikan warnanya */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={scrollToProjects}
            className="px-8 py-3 rounded-full font-semibold text-white
                       bg-blue-600 dark:bg-cyan-500
                       hover:scale-105 shadow-lg hover:shadow-xl
                       transition-all transform duration-300"
          >
            View My Projects
          </button>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full font-semibold
                       bg-white/70 dark:bg-gray-800/70 backdrop-blur-md
                       text-gray-800 dark:text-gray-200
                       border border-gray-200 dark:border-gray-700
                       hover:scale-105 shadow-lg hover:shadow-xl
                       transition-all transform duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* 5. Indikator Scroll Down disesuaikan warnanya */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-20">
        <a
          href="#about"
          className="flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400 transition group"
          aria-label="Scroll to About section"
        >
          <span className="text-sm font-semibold mb-1">Scroll Down</span>
          <FaArrowDown className="animate-bounce" />
        </a>
      </div>

      {/* Tetap butuh keyframes untuk 'shine' */}
      <style>
        {`
          @keyframes shine {
            0% { background-position: 200% center; }
            100% { background-position: -200% center; }
          }
        `}
      </style>
    </section>
  );
}