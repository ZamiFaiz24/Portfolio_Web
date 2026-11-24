import { useEffect } from "react";
import {
  FaCogs,
  FaCheckCircle,
  FaGithub,
  FaExternalLinkAlt,
  FaArrowLeft,
  FaLock,
} from "react-icons/fa";
import { useParams, Link } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { getProjectContent, projects } from "../data/projects";
import { useTranslation } from "@/locales";

const DEFAULT_TITLE = "Faiz Zamzami - Junior Full Stack Developer Portfolio";

export default function ProjectDetails() {
  const { id } = useParams();
  const { t, locale } = useTranslation();
  const project = projects.find((item) => item.id === id);

  // Scroll to the top when a project detail page is opened.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    document.title = project
      ? `${getProjectContent(project, locale).title} | Faiz Zamzami`
      : `${t("projectDetails.notFoundTitle")} | Faiz Zamzami`;

    return () => {
      document.title = DEFAULT_TITLE;
    };
  }, [project, locale, t]);

  if (!project) {
    return (
      <PageLayout>
        <div className="flex min-h-[70vh] items-center justify-center px-6 pt-24 text-center">
          <div>
            <h2 className="text-2xl font-bold text-ink">
              {t("projectDetails.notFoundTitle")}
            </h2>
            <p className="mt-2 text-ink/60">
              {t("projectDetails.notFoundDescription")}
            </p>
            <Link
              to="/"
              className="mt-6 inline-block rounded-lg bg-accent px-6 py-2 font-semibold text-slate-950 transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
            >
              {t("projectDetails.backToHome")}
            </Link>
          </div>
        </div>
      </PageLayout>
    );
  }

  const content = getProjectContent(project, locale);

  return (
    <PageLayout>
      <section className="w-full bg-page px-6 pb-16 pt-24 transition-colors duration-500">
        <div className="mx-auto max-w-6xl">
          <Link
            to="/projects"
            className="mb-8 flex items-center gap-2 font-semibold text-accent hover:text-accent/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
            aria-label={t("projectDetails.backToAllProjects")}
          >
            <FaArrowLeft />
            {t("projectDetails.backToAllProjects")}
          </Link>

          <div className="grid items-start gap-8 md:grid-cols-2 md:gap-x-12 md:gap-y-6">
            <div className="min-w-0 md:col-start-2 md:row-start-1">
              <h1 className="mb-2 text-3xl font-extrabold text-accent md:text-4xl">
                {content.title}
              </h1>
              <p className="text-sm text-ink/60">
                {content.subinfo}
                {project.period ? ` · ${project.period}` : ""}
              </p>
            </div>

            <div className="min-w-0 md:col-start-1 md:row-span-2 md:row-start-1 md:sticky md:top-24">
              <div className="w-full overflow-hidden rounded-2xl border border-ink/10 bg-surface shadow-xl">
                <Swiper
                  key={project.id}
                  modules={[Navigation, Pagination]}
                  navigation={project.screenshots.length > 1}
                  pagination={
                    project.screenshots.length > 1 ? { clickable: true } : false
                  }
                  loop={project.screenshots.length > 1}
                  autoHeight={true}
                  className="project-swiper w-full"
                >
                  {project.screenshots.map((src, index) => (
                    <SwiperSlide key={src}>
                      <img
                        src={src}
                        alt={`${content.title} screenshot ${index + 1}`}
                        loading={index === 0 ? "eager" : "lazy"}
                        decoding="async"
                        className="h-auto w-full bg-ink/5 object-contain"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>

            <div className="min-w-0 md:col-start-2 md:row-start-2">
              <p className="mb-8 whitespace-pre-line rounded-xl border border-ink/10 bg-surface p-6 leading-relaxed text-ink/80 shadow-sm">
                {content.description.trim()}
              </p>

              <div className="mb-8">
                <h3 className="mb-3 text-xl font-bold text-accent">
                  {t("projectDetails.keyFeatures")}
                </h3>
                <ul className="space-y-2">
                  {content.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-ink/80"
                    >
                      <FaCheckCircle className="mt-1 flex-shrink-0 text-accent" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="mb-3 flex items-center gap-2 text-xl font-bold text-accent">
                  <FaCogs /> {t("projectDetails.technologiesUsed")}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-sm font-medium text-accent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {content.repoNote && (
                <p className="mb-6 inline-flex items-center gap-2 rounded-lg border border-ink/10 bg-ink/5 px-4 py-2 text-sm text-ink/70">
                  <FaLock className="flex-shrink-0" />
                  {content.repoNote}
                </p>
              )}

              {(project.github || project.demo) && (
                <div className="flex flex-wrap gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-ink/15 bg-surface px-4 py-2 text-sm font-semibold text-ink shadow-sm transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
                    >
                      <FaGithub /> {t("projectDetails.viewOnGithub")}
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-slate-950 shadow-sm transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
                    >
                      <FaExternalLinkAlt /> {t("projectDetails.liveDemo")}
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <style>
        {`
          .project-swiper .swiper-button-prev,
          .project-swiper .swiper-button-next {
            color: white;
            background-color: rgba(0, 0, 0, 0.3);
            width: 36px;
            height: 36px;
            border-radius: 100%;
            transition: background-color 0.3s;
          }
          .project-swiper .swiper-button-prev:hover,
          .project-swiper .swiper-button-next:hover {
            background-color: rgba(0, 0, 0, 0.5);
          }
          .project-swiper .swiper-button-prev::after,
          .project-swiper .swiper-button-next::after {
            font-size: 16px;
            font-weight: bold;
          }
          .project-swiper .swiper-pagination-bullet {
            background: white;
            opacity: 0.6;
          }
          .project-swiper .swiper-pagination-bullet-active {
            background: var(--app-accent);
            opacity: 1;
          }
        `}
      </style>
    </PageLayout>
  );
}
