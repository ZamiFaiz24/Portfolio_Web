import {
  FaBriefcase,
  FaCalendarAlt,
  FaCheckCircle,
  FaGraduationCap,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const experiencePoints = [
  "Built a Laravel REST API for SiLawet.",
  "Integrated BPS Web API data into MySQL.",
  "Developed an admin dashboard for data management.",
];

const educationPoints = [
  "Thesis: SapiDoc — cattle disease expert system using Forward Chaining and Certainty Factor.",
  "Capstone: STECI IoT monitoring dashboard.",
];

export default function ExperienceEducation() {
  return (
    <section
      id="experience"
      className="scroll-mt-16 w-full bg-gradient-to-br from-white via-blue-50 to-blue-100 py-16 px-6 transition-colors duration-500 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-blue-700 dark:text-cyan-400 border-b-4 border-blue-400 dark:border-cyan-500 inline-block w-fit">
          Experience &amp; Education
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          Internship experience and academic background.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="flex h-full flex-col rounded-2xl border border-blue-100 bg-white p-7 shadow-lg transition-shadow duration-300 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800"
        >
          <div className="mb-5 flex items-start justify-between gap-4">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl text-blue-600 dark:bg-gray-700 dark:text-cyan-400">
              <FaBriefcase />
            </span>
            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-cyan-900/40 dark:text-cyan-300">
              Internship
            </span>
          </div>

          <h3 className="text-xl font-bold text-gray-800 dark:text-white">
            Backend Developer Intern
          </h3>
          <p className="mt-1 font-semibold text-blue-700 dark:text-cyan-400">
            BPS Kabupaten Kebumen
          </p>

          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="inline-flex items-center gap-2">
              <FaCalendarAlt className="text-xs" /> Sep 2025 – Jan 2026
            </span>
            <span className="inline-flex items-center gap-2">
              <FaMapMarkerAlt className="text-xs" /> Kebumen, Central Java
            </span>
          </div>

          <ul className="mt-5 flex-1 space-y-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            {experiencePoints.map((point) => (
              <li key={point} className="flex items-start gap-2.5">
                <FaCheckCircle className="mt-0.5 flex-shrink-0 text-cyan-500" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-2">
            {["Laravel", "MySQL", "REST API"].map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-blue-100 px-2.5 py-1 text-xs font-medium text-blue-800 dark:bg-gray-700 dark:text-cyan-300"
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
          className="flex h-full flex-col rounded-2xl border border-blue-100 bg-white p-7 shadow-lg transition-shadow duration-300 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800"
        >
          <div className="mb-5 flex items-start justify-between gap-4">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl text-blue-600 dark:bg-gray-700 dark:text-cyan-400">
              <FaGraduationCap />
            </span>
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
              Fresh Graduate
            </span>
          </div>

          <h3 className="text-xl font-bold text-gray-800 dark:text-white">
            S1 Sains Data
          </h3>
          <p className="mt-1 font-semibold text-blue-700 dark:text-cyan-400">
            Universitas Putra Bangsa Kebumen
          </p>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Fakultas Sains dan Teknologi
          </p>

          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="inline-flex items-center gap-2">
              <FaCalendarAlt className="text-xs" /> 2022 – 2026
            </span>
            <span className="inline-flex items-center gap-2">
              <FaMapMarkerAlt className="text-xs" /> Kebumen, Central Java
            </span>
          </div>

          <ul className="mt-5 flex-1 space-y-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            {educationPoints.map((point) => (
              <li key={point} className="flex items-start gap-2.5">
                <FaCheckCircle className="mt-0.5 flex-shrink-0 text-cyan-500" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </motion.article>
      </div>
    </section>
  );
}
