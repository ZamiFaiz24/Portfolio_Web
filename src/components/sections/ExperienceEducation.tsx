import {
  FaBriefcase,
  FaCalendarAlt,
  FaCheckCircle,
  FaGraduationCap,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslation } from "@/locales";

const experiencePointsKeys = ["p1", "p2", "p3"] as const;

const educationPointsKeys = ["p1", "p2"] as const;

export default function ExperienceEducation() {
  const { t } = useTranslation();
  const experiencePoints = experiencePointsKeys.map((key) =>
    t(`experience.points.${key}`)
  );
  const educationPoints = educationPointsKeys.map((key) =>
    t(`education.points.${key}`)
  );

  return (
    <section
      id="experience"
      className="scroll-mt-16 w-full bg-page py-16 px-6 transition-colors duration-500"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-accent border-b-4 border-accent inline-block w-fit">
          {t("experience.heading")}
        </h2>
        <p className="mt-4 text-ink/70 text-lg max-w-2xl mx-auto">
          {t("experience.subtitle")}
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="flex h-full flex-col rounded-2xl border border-ink/10 bg-surface p-7 shadow-sm"
        >
          <div className="mb-5 flex items-start justify-between gap-4">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-2xl text-accent">
              <FaBriefcase />
            </span>
            <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
              {t("experience.internshipBadge")}
            </span>
          </div>

          <h3 className="text-xl font-bold text-ink">
            {t("experience.internshipTitle")}
          </h3>
          <p className="mt-1 font-semibold text-accent">
            {t("experience.internshipCompany")}
          </p>

          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-ink/60">
            <span className="inline-flex items-center gap-2">
              <FaCalendarAlt className="text-xs" /> {t(
                "experience.internshipPeriod"
              )}
            </span>
            <span className="inline-flex items-center gap-2">
              <FaMapMarkerAlt className="text-xs" /> {t(
                "experience.internshipLocation"
              )}
            </span>
          </div>

          <ul className="mt-5 flex-1 space-y-2 text-sm leading-relaxed text-ink/80">
            {experiencePoints.map((point) => (
              <li key={point} className="flex items-start gap-2.5">
                <FaCheckCircle className="mt-0.5 flex-shrink-0 text-accent" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-2">
            {["Laravel", "MySQL", "REST API"].map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
          className="flex h-full flex-col rounded-2xl border border-ink/10 bg-surface p-7 shadow-sm"
        >
          <div className="mb-5 flex items-start justify-between gap-4">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-2xl text-accent">
              <FaGraduationCap />
            </span>
            <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
              {t("experience.educationBadge")}
            </span>
          </div>

          <h3 className="text-xl font-bold text-ink">
            {t("experience.educationDegree")}
          </h3>
          <p className="mt-1 font-semibold text-accent">
            {t("experience.educationUniversity")}
          </p>
          <p className="mt-1 text-sm text-ink/60">
            {t("experience.educationFaculty")}
          </p>

          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-ink/60">
            <span className="inline-flex items-center gap-2">
              <FaCalendarAlt className="text-xs" /> {t(
                "experience.educationPeriod"
              )}
            </span>
            <span className="inline-flex items-center gap-2">
              <FaMapMarkerAlt className="text-xs" /> {t(
                "experience.educationLocation"
              )}
            </span>
          </div>

          <ul className="mt-5 flex-1 space-y-2 text-sm leading-relaxed text-ink/80">
            {educationPoints.map((point) => (
              <li key={point} className="flex items-start gap-2.5">
                <FaCheckCircle className="mt-0.5 flex-shrink-0 text-accent" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </motion.article>
      </div>
    </section>
  );
}
