// src/components/sections/Porto.tsx

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
          Some of the projects I've worked on.
        </p>
      </div>

      <div className="flex justify-center items-center gap-2 md:gap-4 mb-8 flex-wrap">
        {filterCategories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-4 py-2 rounded-lg text-sm md:text-base font-semibold transition-all duration-300
              ${activeFilter === category
                ? "bg-gradient-to-r from-blue-600 to-blue-700 dark:from-cyan-500 dark:to-cyan-600 text-white shadow-lg"
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
            layout
            key={project.id}
            className="group rounded-2xl overflow-hidden shadow-lg bg-white/70 dark:bg-gray-800/70 backdrop-blur-md dark:border dark:border-gray-700 
                       transition-all duration-300 transform hover:shadow-2xl dark:hover:shadow-cyan-500/30 hover:scale-102 relative flex flex-col"
          >
            {/* Image Container */}
            <div className="relative h-64 overflow-hidden bg-gray-200 dark:bg-gray-700">
              <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
              
              {/* Category Badge */}
              <div className="absolute top-3 right-3 z-10">
                <span className="px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 shadow-md">
                  {project.category}
                </span>
              </div>
              
              {/* Overlay - Faster fade */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end px-4 pb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-gray-100 text-sm line-clamp-3 mb-3">{project.desc}</p>
                <Link
                  to={`/projects/${project.id}`}
                  className="px-4 py-2 text-white font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 shadow-lg transition-all duration-300 text-center text-sm"
                >
                  View Project
                </Link>
              </div>
            </div>
            
            {/* Content Section - Always Visible */}
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors mb-2">
                {project.title}
              </h3>
              
              {/* Short description visible on all devices */}
              <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-3 flex-1">
                {project.desc}
              </p>
              
              {/* Category visible on card for mobile */}
              <div className="flex items-center justify-between pt-3 border-t border-gray-200 dark:border-gray-600">
                <span className="inline-block px-2 py-1 rounded text-xs font-medium text-blue-600 dark:text-cyan-400 bg-blue-50 dark:bg-gray-700">
                  {project.category}
                </span>
                <span className="text-xs text-gray-400">Click to explore</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;