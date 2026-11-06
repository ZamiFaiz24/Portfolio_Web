// src/components/sections/Porto.tsx

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaExternalLinkAlt,
  FaGithub,
  FaLock,
} from "react-icons/fa";
import { projects } from "../../data/projects";

type ProjectsProps = React.HTMLAttributes<HTMLElement>;

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
        <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          Selected projects — from backend APIs to full-stack applications.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <motion.article
            key={project.id}
            whileHover={{ y: -4 }}
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-lg transition-shadow duration-300 hover:shadow-2xl dark:border-gray-700 dark:bg-gray-800"
          >
            <Link
              to={`/projects/${project.id}`}
              aria-label={`View details for ${project.title}`}
              className="relative block aspect-[3/2] overflow-hidden bg-gray-100 dark:bg-gray-700"
            >
              <img
                src={project.img}
                alt={`${project.title} project cover`}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </Link>

            <div className="flex flex-1 flex-col p-5">
              <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
                <p className="text-xs font-semibold uppercase tracking-wide text-blue-600 dark:text-cyan-400">
                  {project.category} · {project.subinfo.split(" · ")[0]}
                </p>
                {project.period && (
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                    {project.period}
                  </span>
                )}
              </div>
              <h3 className="mt-2 text-lg font-bold text-gray-800 transition-colors group-hover:text-blue-600 dark:text-gray-100 dark:group-hover:text-cyan-400">
                {project.title}
              </h3>

              <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600 line-clamp-2 dark:text-gray-400">
                {project.desc}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded border border-blue-200 bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-700 dark:border-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-gray-200 pt-4 dark:border-gray-700">
                <Link
                  to={`/projects/${project.id}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-cyan-400 dark:hover:text-cyan-300"
                >
                  View details <FaArrowRight className="text-xs" />
                </Link>

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-cyan-400"
                  >
                    <FaExternalLinkAlt className="text-xs" /> Live demo
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-cyan-400"
                  >
                    <FaGithub /> GitHub
                  </a>
                )}

                {project.repoNote && (
                  <span
                    title={project.repoNote}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 dark:text-gray-400"
                  >
                    <FaLock className="text-xs" />{" "}
                    {project.repoLabel ?? "Private"}
                  </span>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
