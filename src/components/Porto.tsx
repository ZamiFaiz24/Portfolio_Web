// src/components/Porto.tsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

type ProjectsProps = React.HTMLAttributes<HTMLElement>;

const projects = [
  { id: "sistem-pakar-sapi", 
    title: "Cattle Expert System", 
    desc: "A web application for diagnosing cattle diseases using Laravel.", 
    img: "/images/My_ToDo/Poster Web.png", 
    category: "Backend" },
  { id: "todo-list-laravel", 
    title: "Todo List Laravel", 
    desc: "A simple task management app built with Laravel and Tailwind CSS.", 
    img: "/images/My_ToDo/Poster Web.png", 
    category: "Fullstack" },
  { id: "iot-dummy-api", title: "IoT Dummy API", desc: "A RESTful API for simulating IoT devices using Laravel Sanctum.", img: "/images/porto-iot.png", category: "Backend" },
  { id: "portfolio-website", title: "Personal Portfolio", desc: "This personal portfolio website, built with React, Vite, and Framer Motion.", img: "/images/porto-web.png", category: "Frontend" },
];

const filterCategories = ["All", "Backend", "Frontend", "Fullstack"];

const Projects: React.FC<ProjectsProps> = (props) => {
  const { className, ...rest } = props;
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter((project) => project.category === activeFilter);

  return (
    <section
      id="projects"
      className={`scroll-mt-16 w-full bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:from-gray-900 dark:via-black dark:to-gray-900 py-16 px-6 transition-colors duration-500 ${className ?? ""}`}
      {...rest}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-blue-700 dark:text-cyan-400 border-b-4 border-blue-400 dark:border-cyan-500 inline-block w-fit">
          Projects
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg">
          Some of the projects I’ve worked on.
        </p>
      </div>

      <div className="flex justify-center items-center gap-2 md:gap-4 mb-8 flex-wrap">
        {filterCategories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-4 py-2 rounded-full text-sm md:text-base font-semibold transition-all duration-300
              ${activeFilter === category
                ? "bg-blue-600 dark:bg-cyan-500 text-white shadow-lg scale-105"
                : "bg-white/70 dark:bg-gray-800/70 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid Proyek - prop 'layout' DIHAPUS dari sini */}
      <motion.div
        className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredProjects.map((project) => (
          <motion.div
            layout // Pertahankan ini untuk animasi perpindahan posisi kartu
            key={project.id}
            className="group rounded-2xl overflow-hidden shadow-lg bg-white/70 dark:bg-gray-800/70 backdrop-blur-md dark:border dark:border-gray-700 
                       transition-all duration-300 transform hover:shadow-blue-300 dark:hover:shadow-cyan-500/20 hover:scale-105 relative"
          >
            {/* ... Konten kartu proyek (tidak berubah) ... */}
            <div className="relative">
              <img src={project.img} alt={project.title} className="w-full h-48 object-cover"/>
              <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-gray-200 text-sm mt-2">{project.desc}</p>
                <Link
                  to={`/projects/${project.id}`}
                  className="px-4 py-2 mt-5 text-white border border-white/50 rounded-lg bg-white/10 backdrop-blur-md shadow-md transition-all duration-300 text-sm hover:bg-white/20 hover:border-white"
                >
                  View Project
                </Link>
              </div>
            </div>
            <div className="p-4 text-center relative">
              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              <span className="absolute left-1/2 -translate-x-1/2 bottom-2 w-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-1/2 transition-all duration-500 rounded-full"></span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;