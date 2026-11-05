// src/components/sections/Porto.tsx

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

type ProjectsProps = React.HTMLAttributes<HTMLElement>;

const projects = [
  {
    id: "task-management-system",
    title: "Task Management System",
    desc: "A clean task management system for organizing and tracking daily activities.",
    img: "/images/project/My_ToDo/Task Manajement.png",
    category: "Fullstack",
    tech: ["Laravel", "React", "Tailwind"],
  },
  {
    id: "bps-data-management",
    title: "Data Management System (BPS)",
    desc: "A backend system developed during internship to manage and process statistical data efficiently.",
    img: "/images/project/bps/Data Manajement.png",
    category: "Backend",
    tech: ["Laravel", "MySQL", "RESTful API"],
  },
  {
    id: "iot-dashboard",
    title: "IoT Monitoring & Control Dashboard",
    desc: "An IoT-based dashboard for monitoring and controlling devices in egg clustering processes.",
    img: "/images/project/steci/IoT Monitoring.png",
    category: "Fullstack",
    tech: ["Laravel", "Vue", "MySQL", "REST API"],
  },

  {
    id: "sapidoc-expert-system",
    title: "SapiDoc - Cattle Disease Expert System",
    desc: "A web-based expert system for diagnosing cattle diseases using Forward Chaining and Certainty Factor methods, helping farmers identify potential diseases based on observed symptoms.",
    img: "/images/project/SapiDoc/SapiDoc.png",
    category: "Fullstack",
    tech: ["Laravel", "React", "TypeScript", "MySQL", "Tailwind CSS"],
  },
];

const Projects: React.FC<ProjectsProps> = (props) => {
  const { className, ...rest } = props;

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

      {/* Grid Proyek - Tech Stack Focus */}
      <motion.div
        className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-2 gap-8"
      >
        {projects.map((project) => (
          <motion.div
            layout
            key={project.id}
            className="group rounded-2xl overflow-hidden shadow-lg bg-white/70 dark:bg-gray-800/70 backdrop-blur-md dark:border dark:border-gray-700 
                       transition-all duration-300 transform hover:shadow-2xl dark:hover:shadow-cyan-500/30 hover:scale-102 relative flex flex-col"
          >
            {/* Image Container */}
            <div className="relative h-80 overflow-hidden bg-gray-200 dark:bg-gray-700">
              <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
              
              {/* Overlay - Faster fade */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end px-4 pb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Link
                  to={`/projects/${project.id}`}
                  className="px-4 py-2 text-white font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 shadow-lg transition-all duration-300 text-center text-sm"
                >
                  View Project
                </Link>
              </div>
            </div>
            
            {/* Content Section - Tech Stack Focus */}
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors mb-2">
                {project.title}
              </h3>
              
              {/* Short description visible on all devices */}
              <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-3 flex-1">
                {project.desc}
              </p>
              
              {/* Tech Stack Tags - Main Focus */}
              <div className="pt-3 border-t border-gray-200 dark:border-gray-600">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-2 py-1 rounded text-xs font-semibold text-blue-700 dark:text-cyan-300 bg-blue-100 dark:bg-cyan-900/40 border border-blue-200 dark:border-cyan-700">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;