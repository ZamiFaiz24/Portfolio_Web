import type { Locale } from "@/locales";

export type ProjectStatus = "live" | "confidential" | "private" | "completed";

export type ProjectContent = {
  title: string;
  desc: string;
  subinfo: string;
  description: string;
  features: string[];
  repoNote?: string;
};

export type Project = {
  id: string;
  img: string;
  category: "Backend" | "Full Stack";
  featured: boolean;
  tech: string[];
  period?: string;
  screenshots: string[];
  github?: string;
  demo?: string;
  status?: ProjectStatus;
  content: Record<Locale, ProjectContent>;
};

export const projects: Project[] = [
  {
    id: "bps-data-management",
    img: "/images/project/bps/Data%20Manajement.png",
    category: "Backend",
    featured: true,
    tech: ["Laravel", "MySQL", "REST API"],
    period: "Sep 2025 – Jan 2026",
    screenshots: [
      "/images/project/bps/2.png",
      "/images/project/bps/3.png",
    ],
    status: "confidential",
    content: {
      en: {
        title: "Data Management System (BPS)",
        desc: "A Laravel backend built during a BPS internship, including a REST API for SiLawet and BPS Web API integration into MySQL.",
        subinfo: "Internship Project · Backend System",
        description: `A backend system developed during an internship at BPS Kabupaten Kebumen.
The work included a Laravel REST API for SiLawet, integration of BPS Web API data into MySQL, and an admin dashboard for managing the data.`,
        features: [
          "Laravel REST API for SiLawet",
          "BPS Web API integration into MySQL",
          "Admin dashboard for data management",
          "Data validation and error handling",
          "Structured API responses for frontend integration",
        ],
        repoNote: "Code is confidential because this was an internship project.",
      },
      id: {
        title: "Sistem Manajemen Data (BPS)",
        desc: "Backend Laravel yang dibangun selama magang di BPS, mencakup REST API untuk SiLawet dan integrasi data BPS Web API ke MySQL.",
        subinfo: "Proyek Magang · Sistem Backend",
        description: `Sistem backend yang dikembangkan selama magang di BPS Kabupaten Kebumen.
Pekerjaan mencakup REST API Laravel untuk SiLawet, integrasi data BPS Web API ke MySQL, dan dashboard admin untuk mengelola data.`,
        features: [
          "REST API Laravel untuk SiLawet",
          "Integrasi BPS Web API ke MySQL",
          "Dashboard admin untuk pengelolaan data",
          "Validasi data dan penanganan error",
          "Struktur respons API untuk integrasi frontend",
        ],
        repoNote: "Kode bersifat rahasia karena ini proyek magang.",
      },
    },
  },
  {
    id: "sapidoc-expert-system",
    img: "/images/project/SapiDoc/SapiDoc.png",
    category: "Full Stack",
    featured: true,
    tech: ["Laravel", "React", "TypeScript", "MySQL", "Tailwind CSS"],
    period: "Apr – Jul 2026",
    screenshots: [
      "/images/project/SapiDoc/1.png",
      "/images/project/SapiDoc/2.png",
      "/images/project/SapiDoc/4.png",
    ],
    github: "https://github.com/ZamiFaiz24/SapiDoc-Expert-System",
    demo: "https://sapidoc-expert-system.ethiodeploy.app/",
    status: "live",
    content: {
      en: {
        title: "SapiDoc - Cattle Disease Expert System",
        desc: "A thesis project: a web-based expert system for diagnosing cattle diseases using Forward Chaining and Certainty Factor methods.",
        subinfo: "Thesis Project · Full Stack Expert System",
        description: `A thesis project: a web-based expert system designed to help farmers identify potential cattle diseases based on observed symptoms.
The system applies Forward Chaining and Certainty Factor methods to produce a diagnosis with a confidence value.`,
        features: [
          "Cattle disease diagnosis based on selected symptoms",
          "Forward Chaining inference method",
          "Certainty Factor calculation for diagnosis confidence",
          "Disease and symptom data management",
          "Responsive interface for desktop and mobile",
        ],
      },
      id: {
        title: "SapiDoc - Sistem Pakar Penyakit Sapi",
        desc: "Proyek skripsi: sistem pakar berbasis web untuk mendiagnosis penyakit sapi menggunakan metode Forward Chaining dan Certainty Factor.",
        subinfo: "Proyek Skripsi · Sistem Pakar Full Stack",
        description: `Proyek skripsi berupa sistem pakar berbasis web yang dirancang untuk membantu peternak mengidentifikasi kemungkinan penyakit sapi berdasarkan gejala yang diamati.
Sistem menerapkan metode Forward Chaining dan Certainty Factor untuk menghasilkan diagnosis beserta nilai keyakinan.`,
        features: [
          "Diagnosis penyakit sapi berdasarkan gejala yang dipilih",
          "Metode inferensi Forward Chaining",
          "Perhitungan Certainty Factor untuk tingkat keyakinan diagnosis",
          "Pengelolaan data penyakit dan gejala",
          "Antarmuka responsif untuk desktop dan mobile",
        ],
      },
    },
  },
  {
    id: "iot-dashboard",
    img: "/images/project/steci/IoT%20Monitoring.png",
    category: "Full Stack",
    featured: true,
    tech: ["Laravel", "Vue", "MySQL", "REST API"],
    period: "Apr – Jul 2025",
    screenshots: [
      "/images/project/steci/4.png",
      "/images/project/steci/7.png",
    ],
    status: "private",
    content: {
      en: {
        title: "STECI IoT Monitoring Dashboard",
        desc: "A web dashboard for monitoring STECI IoT measurement results as part of a capstone project.",
        subinfo: "Capstone Project · IoT Dashboard",
        description: `A web dashboard developed for the STECI capstone project to monitor IoT measurement results from the egg-clustering process.
The dashboard presents sensor data and results in a readable interface so users can review the monitoring output.`,
        features: [
          "Dashboard for monitoring STECI IoT measurement results",
          "Data visualization using charts and metrics",
          "Interface for reviewing sensor and measurement data",
          "API integration to supply data from the IoT pipeline",
          "Responsive layout for desktop and mobile",
        ],
        repoNote: "Repository is private — available upon request.",
      },
      id: {
        title: "Dashboard Pemantauan IoT STECI",
        desc: "Dashboard web untuk memantau hasil pengukuran IoT STECI sebagai bagian dari proyek capstone.",
        subinfo: "Proyek Capstone · Dashboard IoT",
        description: `Dashboard web yang dikembangkan untuk proyek capstone STECI guna memantau hasil pengukuran IoT dari proses pengelompokan telur.
Dashboard menampilkan data sensor dan hasil pengukuran dalam antarmuka yang mudah dibaca sehingga pengguna dapat meninjau output pemantauan.`,
        features: [
          "Dashboard untuk memantau hasil pengukuran IoT STECI",
          "Visualisasi data menggunakan grafik dan metrik",
          "Antarmuka untuk meninjau data sensor dan hasil pengukuran",
          "Integrasi API untuk menyuplai data dari pipeline IoT",
          "Layout responsif untuk desktop dan mobile",
        ],
        repoNote: "Repositori bersifat privat — tersedia berdasarkan permintaan.",
      },
    },
  },
  {
    id: "task-management-system",
    img: "/images/project/My_ToDo/Task%20Manajement.png",
    category: "Full Stack",
    featured: false,
    tech: ["Laravel", "React", "Tailwind CSS"],
    screenshots: [
      "/images/project/My_ToDo/1.png",
      "/images/project/My_ToDo/2.png",
      "/images/project/My_ToDo/SS01.png",
      "/images/project/My_ToDo/SS02.png",
    ],
    status: "private",
    content: {
      en: {
        title: "Task Management System",
        desc: "A personal full-stack project for organizing and tracking daily activities.",
        subinfo: "Personal Project · Full Stack Application",
        description: `A personal task management project built to practice full-stack development.
It helps users organize and track daily activities through a clean interface and essential task-management features.`,
        features: [
          "Create, update, and delete tasks (CRUD functionality)",
          "Task status management (pending, in progress, completed)",
          "Dashboard overview with task summaries",
          "User authentication system",
          "Responsive interface for desktop and mobile",
        ],
        repoNote: "Repository is private — available upon request.",
      },
      id: {
        title: "Sistem Manajemen Tugas",
        desc: "Proyek full-stack pribadi untuk mengatur dan melacak aktivitas harian.",
        subinfo: "Proyek Pribadi · Aplikasi Full Stack",
        description: `Proyek manajemen tugas pribadi yang dibangun untuk melatih pengembangan full-stack.
Aplikasi membantu pengguna mengatur dan melacak aktivitas harian melalui antarmuka yang bersih dan fitur manajemen tugas yang esensial.`,
        features: [
          "Membuat, memperbarui, dan menghapus tugas (CRUD)",
          "Manajemen status tugas (tertunda, sedang dikerjakan, selesai)",
          "Ringkasan tugas di dashboard",
          "Sistem autentikasi pengguna",
          "Antarmuka responsif untuk desktop dan mobile",
        ],
        repoNote: "Repositori bersifat privat — tersedia berdasarkan permintaan.",
      },
    },
  },
];

export function getProjectContent(
  project: Project,
  locale: Locale
): ProjectContent {
  return project.content[locale] ?? project.content.en;
}

export const projectStatusLabelKeys: Record<ProjectStatus, string> = {
  live: "projectDetails.statusLive",
  confidential: "projectDetails.confidential",
  private: "projectDetails.private",
  completed: "projectDetails.statusCompleted",
};
