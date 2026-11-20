import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  FaArrowRight,
  FaExternalLinkAlt,
  FaGithub,
  FaLock,
} from "react-icons/fa";
import type { Project } from "@/data/projects";
import { useTranslation } from "@/locales";

type ProjectCardProps = {
  project: Project;
  className?: string;
};

export default function ProjectCard({
  project,
  className,
}: ProjectCardProps) {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      whileHover={shouldReduceMotion ? undefined : { y: -4 }}
      className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-surface shadow-lg transition-shadow duration-300 hover:shadow-2xl ${className ?? ""}`}
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
            {t("projects.viewDetails")} <FaArrowRight className="text-xs" />
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
  );
}
