import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  FaArrowRight,
  FaExternalLinkAlt,
  FaGithub,
  FaLock,
} from "react-icons/fa";
import { projects } from "@/data/projects";
import { useTranslation } from "@/locales";

const featuredProjects = projects
  .filter((project) => project.featured)
  .slice(0, 3);

export default function FeaturedProjects() {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="projects" className="scroll-mt-16 w-full bg-page px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="inline-block border-b-4 border-accent pb-1 text-3xl font-extrabold text-accent">
            {t("projects.heading")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-ink/70">
            {t("projects.subtitle")}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <motion.article
              key={project.id}
              whileHover={shouldReduceMotion ? undefined : { y: -4 }}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-surface shadow-lg transition-shadow duration-300 hover:shadow-2xl"
            >
              <Link
                to={`/projects/${project.id}`}
                aria-label={`${t("projects.viewDetails")}: ${project.title}`}
                className="relative block aspect-[3/2] overflow-hidden bg-ink/5"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </Link>

              <div className="flex flex-1 flex-col p-5">
                <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
                  <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                    {project.category} · {project.subinfo.split(" · ")[0]}
                  </p>
                  {project.period && (
                    <span className="text-xs font-medium text-ink/60">
                      {project.period}
                    </span>
                  )}
                </div>

                <h3 className="mt-2 text-lg font-bold text-ink transition-colors group-hover:text-accent">
                  {project.title}
                </h3>

                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/70 line-clamp-2">
                  {project.desc}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded border border-accent/20 bg-accent/10 px-2 py-1 text-xs font-semibold text-accent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-ink/10 pt-4">
                  <Link
                    to={`/projects/${project.id}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent/80"
                  >
                    {t("projects.viewDetails")}{" "}
                    <FaArrowRight className="text-xs" />
                  </Link>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-ink/70 hover:text-accent"
                    >
                      <FaExternalLinkAlt className="text-xs" />{" "}
                      {t("projects.liveDemo")}
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-ink/70 hover:text-accent"
                    >
                      <FaGithub /> {t("projects.github")}
                    </a>
                  )}

                  {project.repoNote && (
                    <span
                      title={project.repoNote}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-ink/60"
                    >
                      <FaLock className="text-xs" />{" "}
                      {project.repoLabel ?? t("projects.private")}
                    </span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-lg border border-accent px-6 py-3 font-semibold text-accent transition-colors hover:bg-accent hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
          >
            {t("projects.viewAll")} <FaArrowRight className="text-sm" />
          </Link>
        </div>
      </div>
    </section>
  );
}
