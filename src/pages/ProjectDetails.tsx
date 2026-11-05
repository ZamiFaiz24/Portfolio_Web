import React, { useEffect } from "react";
import { FaCogs, FaCheckCircle, FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import { useParams, Link, useNavigate } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const projectDetails = [
  {
    id: "task-management-system",
    title: "Task Management System",
    subinfo: "Personal Project · Fullstack Application",
    screenshots: [
      "/images/project/My_ToDo/Task Manajement.png",
      "/images/project/My_ToDo/1.png",
      "/images/project/My_ToDo/2.png",
      "/images/project/My_ToDo/3.png",
      "/images/project/My_ToDo/4.png",
      "/images/project/My_ToDo/5.png",
    ],
    description: `
A task management system designed to help users organize and track daily activities efficiently. 
This application provides a clean interface and essential features for managing tasks in a structured and productive way.`,
    features: [
      "Create, update, and delete tasks (CRUD functionality)",
      "Task status management (pending, in progress, completed)",
      "Dashboard overview with task summaries",
      "User authentication system",
      "Responsive interface for desktop and mobile",
    ],
    tech: ["Laravel", "React", "Tailwind CSS", "MySQL"],
    github: "https://github.com/ZamiFaiz24/task-management-system",
    demo: "",
  },
  {
    id: "bps-data-management",
    title: "Data Management System (BPS)",
    subinfo: "Internship Project · Backend System",
    screenshots: [
      "/images/project/bps/Data Manajement.png",
      "/images/project/bps/1.png",
      "/images/project/bps/2.png",
      "/images/project/bps/3.png",
    ],
    description: `
A backend system developed during an internship at BPS to manage and process regional statistical data. 
The system focuses on efficient data handling, structured workflows, and reliable API services for data operations.`,
    features: [
      "Statistical data management and processing",
      "Data filtering and structured data retrieval",
      "RESTful API for data access and integration",
      "Data validation and error handling",
      "Optimized database queries for performance",
      "Basic activity logging for data operations",
    ],
    tech: ["Laravel", "MySQL", "RESTful API", "PHP"],
    github: "https://github.com/ZamiFaiz24/bps-data-management",
    demo: "",
  },
  {
    id: "iot-dashboard",
    title: "IoT Monitoring & Control Dashboard",
    subinfo: "Capstone Project · Fullstack IoT System",
    screenshots: [
      "/images/project/steci/IoT Monitoring.png",
      "/images/project/steci/1.png",
      "/images/project/steci/2.png",
      "/images/project/steci/3.png",
      "/images/project/steci/4.png",
      "/images/project/steci/5.png",
    ],
    description: `
An IoT-based dashboard system developed for monitoring and controlling devices in egg clustering processes. 
The system provides real-time visualization and control features to simulate device interaction and data monitoring.`,
    features: [
      "Device monitoring dashboard with real-time data simulation",
      "Control system for device status (ON/OFF)",
      "Data visualization using charts and metrics",
      "Activity logs for monitoring device actions",
      "User interface for managing multiple devices",
      "Structured API integration for device communication",
    ],
    tech: ["Laravel", "Vue.js", "MySQL", "REST API"],
    github: "https://github.com/ZamiFaiz24/iot-dashboard",
    demo: "",
  },
  {
    id: "sapidoc-expert-system",
    title: "SapiDoc - Cattle Disease Expert System",
    subinfo: "Personal Project · Fullstack Expert System",
    screenshots: [
      "/images/project/SapiDoc/SapiDoc.png",
      "/images/project/SapiDoc/1.png",
      "/images/project/SapiDoc/2.png",
      "/images/project/SapiDoc/3.png",
      "/images/project/SapiDoc/4.png",
    ],
    description: `
A web-based expert system designed to help farmers identify potential cattle diseases based on observed symptoms.
The system applies Forward Chaining and Certainty Factor methods to produce a diagnosis with a confidence value.`,
    features: [
      "Cattle disease diagnosis based on selected symptoms",
      "Forward Chaining inference method",
      "Certainty Factor calculation for diagnosis confidence",
      "Disease and symptom data management",
      "Responsive interface for desktop and mobile",
    ],
    tech: ["Laravel", "React", "TypeScript", "MySQL", "Tailwind CSS"],
    github: "",
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
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                className="project-swiper"
              >
                {project.screenshots.map((src, i) => (
                  <SwiperSlide key={i}>
                    <img
                      src={src}
                      alt={`${project.title} screenshot ${i + 1}`}
                      className="w-full h-auto object-contain bg-gray-100 dark:bg-gray-800"
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