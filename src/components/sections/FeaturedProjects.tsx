import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { projects } from "@/data/projects";
import { useTranslation } from "@/locales";
import ProjectCard from "@/components/sections/ProjectCard";

const featuredProjects = projects
  .filter((project) => project.featured)
  .slice(0, 3);

export default function FeaturedProjects() {
  const { t } = useTranslation();

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
            <ProjectCard key={project.id} project={project} />
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
