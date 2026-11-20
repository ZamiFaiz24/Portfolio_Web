import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import PageLayout from "@/components/PageLayout";
import ProjectCard from "@/components/sections/ProjectCard";
import { projects } from "@/data/projects";
import { useTranslation } from "@/locales";

const FILTERS = [
  { labelKey: "projectsPage.filters.all", value: null },
  { labelKey: "projectsPage.filters.backend", value: "Backend" },
  { labelKey: "projectsPage.filters.fullStack", value: "Full Stack" },
] as const;

export default function Projects() {
  const { t } = useTranslation();
  const [category, setCategory] = useState<string | null>(null);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${t("projectsPage.heading")} | Faiz Zamzami`;

    return () => {
      document.title = previousTitle;
    };
  }, [t]);

  const filteredProjects =
    category === null
      ? projects
      : projects.filter((project) => project.category === category);

  return (
    <PageLayout>
      <section className="w-full bg-page px-6 pb-16 pt-24">
        <div className="mx-auto max-w-5xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
          >
            <FaArrowLeft /> {t("common.backHome")}
          </Link>

          <div className="mb-10 mt-6 text-center">
            <h1 className="inline-block border-b-4 border-accent pb-1 text-3xl font-extrabold text-accent md:text-4xl">
              {t("projectsPage.heading")}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-ink/70">
              {t("projectsPage.subtitle")}
            </p>
          </div>

          <div
            role="group"
            aria-label={t("projectsPage.filterLabel")}
            className="mb-10 flex flex-wrap items-center justify-center gap-3"
          >
            {FILTERS.map((filter) => {
              const isActive = category === filter.value;

              return (
                <button
                  key={filter.labelKey}
                  type="button"
                  onClick={() => setCategory(filter.value)}
                  aria-pressed={isActive}
                  className={`rounded-full border px-5 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 ${
                    isActive
                      ? "border-accent bg-accent text-white"
                      : "border-ink/15 bg-surface text-ink/70 hover:border-accent hover:text-accent"
                  }`}
                >
                  {t(filter.labelKey)}
                </button>
              );
            })}
          </div>

          {filteredProjects.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <p className="text-center text-ink/70">
              {t("projectsPage.empty")}
            </p>
          )}
        </div>
      </section>
    </PageLayout>
  );
}
