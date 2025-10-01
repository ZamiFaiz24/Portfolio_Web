import React, { useEffect } from "react";
import { FaCogs, FaCheckCircle, FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import { useParams, Link, useNavigate } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projectDetails = [
  {
    id: "sistem-pakar-sapi",
    title: "Cattle Expert System",
    subinfo: "Academic Project · Web App",
    screenshots: [
      "/images/potrfolio02.png",
      "/images/porto-sapi-1.png",
      "/images/porto-sapi-2.png",
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
      "/images/My_ToDo/Poster Web.png",
      "/images/My_ToDo/SS01.png",
      "/images/My_ToDo/SS02.png"

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

  // Scroll ke atas halaman saat komponen dimuat
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <PageLayout>
        <div className="min-h-screen flex items-center justify-center text-center px-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Project Not Found</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2">The project you are looking for does not exist.</p>
            <Link to="/" className="mt-6 inline-block px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
              Back to Home
            </Link>
          </div>
        </div>
      </PageLayout>
    );
  }
  
  // Fungsi kembali ke halaman utama dan scroll ke section projects
  const handleBack = () => {
    navigate("/");
    setTimeout(() => {
      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    // 1. Bungkus semua dengan PageLayout
    <PageLayout>
      {/* 2. Latar belakang section diubah untuk dark mode */}
      <section className="w-full bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:from-gray-900 dark:via-black dark:to-gray-900 pt-24 pb-16 px-6 transition-colors duration-500">
        <div className="max-w-6xl mx-auto">
          {/* Tombol Back di atas */}
          <button
            onClick={handleBack}
            className="flex items-center gap-2 mb-8 text-blue-600 dark:text-cyan-400 font-semibold hover:underline"
          >
            <FaArrowLeft />
            Back to All Projects
          </button>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Kiri - Carousel */}
            <div className="rounded-2xl overflow-hidden shadow-2xl sticky top-24">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                className="project-swiper"
              >
                {project.screenshots.map((src, i) => (
                  <SwiperSlide key={i}>
                    <img
                      src={src}
                      alt={`${project.title} screenshot ${i + 1}`}
                      className="w-full h-auto aspect-video object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Kanan - Deskripsi */}
            <div>
              {/* 3. Semua warna teks diubah untuk dark mode */}
              <h1 className="text-3xl md:text-4xl font-extrabold text-blue-700 dark:text-cyan-400 mb-2">
                {project.title}
              </h1>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">{project.subinfo}</p>

              {/* 4. Description box diubah */}
              <p className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md dark:border dark:border-gray-700 p-6 rounded-xl shadow leading-relaxed whitespace-pre-line text-gray-700 dark:text-gray-300 mb-8">
                {project.description.trim()}
              </p>

              {/* Features */}
              {project.features && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-blue-600 dark:text-cyan-500 mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {project.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                        <FaCheckCircle className="text-cyan-500 mt-1 flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-blue-600 dark:text-cyan-500 mb-3 flex items-center gap-2">
                  <FaCogs /> Technologies Used
                </h3>
                <div className="flex gap-2 flex-wrap">
                  {/* 5. Tech tags diubah */}
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-100 dark:bg-gray-700 text-blue-800 dark:text-cyan-300 font-medium rounded-full text-sm">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="flex gap-4">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 text-white text-sm hover:bg-black transition shadow-lg">
                    <FaGithub /> View on GitHub
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500 text-white text-sm hover:bg-green-600 transition shadow-lg">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Gaya Swiper diubah agar responsif terhadap tema */}
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
            background: #0ea5e9; /* cyan-500 */
            opacity: 1;
          }
        `}
      </style>
    </PageLayout>
  );
}