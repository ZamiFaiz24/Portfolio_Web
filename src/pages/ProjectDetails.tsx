import { useEffect } from "react";
import {
  FaCogs,
  FaCheckCircle,
  FaGithub,
  FaExternalLinkAlt,
  FaArrowLeft,
  FaLock,
} from "react-icons/fa";
import { useParams, Link, useNavigate } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { projects } from "../data/projects";

const DEFAULT_TITLE = "Faiz Zamzami - Junior Full Stack Developer Portfolio";

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((item) => item.id === id);

  // Scroll to the top when a project detail page is opened.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    document.title = project ? `${project.title} | Faiz Zamzami` : `Project Not Found | Faiz Zamzami`;

    return () => {
      document.title = DEFAULT_TITLE;
    };
  }, [project]);

  if (!project) {
    return (
      <PageLayout>
        <div className="min-h-[70vh] flex items-center justify-center text-center px-6 pt-24">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Project Not Found</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2">
              The project you are looking for does not exist.
            </p>
            <Link
              to="/"
              className="mt-6 inline-block px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </PageLayout>
    );
  }

  const handleBack = () => {
    navigate("/", { state: { scrollTo: "projects" } });
  };

  return (
    <PageLayout>
      <section className="w-full bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 pt-24 pb-16 px-6 transition-colors duration-500">
        <div className="max-w-6xl mx-auto">
          <button
            type="button"
            onClick={handleBack}
            className="flex items-center gap-2 mb-8 text-blue-600 dark:text-cyan-400 font-semibold hover:underline"
            aria-label="Back to all projects"
          >
            <FaArrowLeft />
            Back to All Projects
          </button>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="rounded-2xl overflow-hidden shadow-2xl md:sticky md:top-24">
              <Swiper
                key={project.id}
                modules={[Navigation, Pagination]}
                navigation={project.screenshots.length > 1}
                pagination={
                  project.screenshots.length > 1 ? { clickable: true } : false
                }
                loop={project.screenshots.length > 1}
                autoHeight={true}
                className="project-swiper"
              >
                {project.screenshots.map((src, index) => (
                  <SwiperSlide key={src}>
                    <img
                      src={src}
                      alt={`${project.title} screenshot ${index + 1}`}
                      loading={index === 0 ? "eager" : "lazy"}
                      decoding="async"
                      className="w-full h-auto object-contain bg-gray-100 dark:bg-gray-800"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-blue-700 dark:text-cyan-400 mb-2">
                {project.title}
              </h1>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
                {project.subinfo}
                {project.period ? ` · ${project.period}` : ""}
              </p>

              <p className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md dark:border dark:border-gray-700 p-6 rounded-xl shadow leading-relaxed whitespace-pre-line text-gray-700 dark:text-gray-300 mb-8">
                {project.description.trim()}
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-blue-600 dark:text-cyan-500 mb-3">
                  Key Features
                </h3>
                <ul className="space-y-2">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                    >
                      <FaCheckCircle className="text-cyan-500 mt-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-blue-600 dark:text-cyan-500 mb-3 flex items-center gap-2">
                  <FaCogs /> Technologies Used
                </h3>
                <div className="flex gap-2 flex-wrap">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-gray-700 text-blue-800 dark:text-cyan-300 font-medium rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {project.repoNote && (
                <p className="mb-6 inline-flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-sm text-gray-600 dark:bg-gray-800 dark:text-gray-300">
                  <FaLock className="flex-shrink-0" />
                  {project.repoNote}
                </p>
              )}

              {(project.github || project.demo) && (
                <div className="flex flex-wrap gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 text-white text-sm hover:bg-black transition shadow-lg"
                    >
                      <FaGithub /> View on GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 text-white text-sm hover:bg-green-700 transition shadow-lg"
                    >
                      <FaExternalLinkAlt /> Live Demo
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
            background: #0ea5e9;
            opacity: 1;
          }
        `}
      </style>
    </PageLayout>
  );
}
