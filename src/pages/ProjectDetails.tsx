import React from "react";
import { FaCogs, FaCheckCircle, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useParams, Link, useNavigate  } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projectDetails = [
  {
    id: "sistem-pakar-sapi",
    title: "Cattle Expert System",
    subinfo: "Academic Project · Web App",
    screenshots: [
      "/src/images/potrfolio02.png",
      "/src/images/porto-sapi-1.png",
      "/src/images/porto-sapi-2.png",
    ],
    description: `
A web-based expert system designed to assist farmers in diagnosing cattle 
diseases quickly and accurately using the Certainty Factor method.`,
    features: [
      "Symptom-based diagnosis",
      "Disease management & recommendations",
      "Confidence level for diagnosis",
      "Simple dashboard for monitoring results",
    ],
    tech: ["Laravel", "MySQL", "Bootstrap"],
    github: "https://github.com/username/cattle-expert-system",
    demo: "",
  },
  {
    id: "todo-list-laravel",
    title: "Todo List App (Laravel)",
    subinfo: "Personal Project · Productivity Tool",
    screenshots: [
      "/src/images/Portfolio01.png",
      "/src/images/porto-todo-1.png",
    ],
    description: `
A simple task management application built with Laravel, designed to help 
users organize their daily activities.`,
    features: [
      "CRUD operations for tasks",
      "Authentication & user roles",
      "Progress tracking dashboard",
    ],
    tech: ["Laravel", "MySQL", "TailwindCSS"],
    github: "https://github.com/username/todo-list-laravel",
    demo: "",
  },
  {
    id: "iot-dummy-api",
    title: "IoT Dummy API",
    subinfo: "Backend API · Simulation",
    screenshots: ["/src/images/porto-iot.png"],
    description: `
A RESTful API created for simulating IoT device behavior.`,
    features: [
      "Device ON/OFF state management",
      "Activity logs for testing",
      "Secure auth with Laravel Sanctum",
    ],
    tech: ["Laravel", "REST API", "Sanctum"],
    github: "https://github.com/username/iot-dummy-api",
    demo: "",
  },
];

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projectDetails.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Project not found.</p>
      </div>
    );
  }

  const handleBack = () => {
  navigate("/"); // balik ke home
  setTimeout(() => {
    const section = document.getElementById("projects");
    section?.scrollIntoView({ behavior: "smooth" });
  }, 100);
};

  return (
    <section className="w-full bg-gradient-to-br from-white via-blue-50 to-blue-100 py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left - Deskripsi */}
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-2 border-b-4 border-cyan-400 inline-block pb-1">
            {project.title}
          </h1>
          {/* Subinfo */}
          <p className="text-gray-500 text-sm mb-6">{project.subinfo}</p>

          {/* Description */}
          <p className="bg-white/80 p-6 rounded-xl shadow leading-relaxed whitespace-pre-line text-gray-700 mb-6">
            {project.description}
          </p>

          {/* Features */}
          {project.features && (
            <div className="mb-6">
              <h3 className="text-lg font-bold text-blue-600 mb-3">Key Features</h3>
              <ul className="space-y-2">
                {project.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-700">
                    <FaCheckCircle className="text-cyan-500" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-blue-600 mb-3 flex items-center gap-2">
              <FaCogs className="text-blue-500 text-xl" />
              Technologies Used
            </h3>
            <div className="flex gap-2 flex-wrap">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 bg-gradient-to-r from-blue-100 to-cyan-100 
                             text-blue-700 font-medium rounded-full text-sm shadow 
                             border border-blue-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex gap-4 mb-6">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 text-white text-sm hover:bg-gray-900 transition shadow"
              >
                <FaGithub /> GitHub
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500 text-white text-sm hover:bg-green-600 transition shadow"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            )}
          </div>

          <button
            onClick={handleBack}
            className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
          >
            ← Back to Projects
          </button>
        </div>

        {/* Right - Carousel */}
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            className="rounded-xl"
          >
            {project.screenshots.map((src, i) => (
              <SwiperSlide key={i}>
                <img
                  src={src}
                  alt={`${project.title} screenshot ${i + 1}`}
                  className="w-full h-[280px] md:h-[380px] object-cover rounded-xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Custom style untuk arrow Swiper */}
      <style>
        {`
          .swiper-button-prev,
          .swiper-button-next {
            color: #0ea5e9; /* cyan-500 */
            width: 28px;
            height: 28px;
          }
          .swiper-button-prev::after,
          .swiper-button-next::after {
            font-size: 16px;
            font-weight: bold;
          }
        `}
      </style>
    </section>
  );
}
