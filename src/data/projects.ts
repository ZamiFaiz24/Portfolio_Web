export type Project = {
  id: string;
  title: string;
  desc: string;
  img: string;
  category: string;
  tech: string[];
  subinfo: string;
  period?: string;
  screenshots: string[];
  description: string;
  features: string[];
  github?: string;
  demo?: string;
  repoNote?: string;
  repoLabel?: string;
};

export const projects: Project[] = [
  {
    id: "bps-data-management",
    title: "Data Management System (BPS)",
    desc: "A Laravel backend built during a BPS internship, including a REST API for SiLawet and BPS Web API integration into MySQL.",
    img: "/images/project/bps/Data%20Manajement.png",
    category: "Backend",
    tech: ["Laravel", "MySQL", "REST API"],
    subinfo: "Internship Project · Backend System",
    period: "Sep 2025 – Jan 2026",
    screenshots: [
      "/images/project/bps/2.png",
      "/images/project/bps/3.png",
    ],
    description: `
A backend system developed during an internship at BPS Kabupaten Kebumen.
The work included a Laravel REST API for SiLawet, integration of BPS Web API data into MySQL, and an admin dashboard for managing the data.`,
    features: [
      "Laravel REST API for SiLawet",
      "BPS Web API integration into MySQL",
      "Admin dashboard for data management",
      "Data validation and error handling",
      "Structured API responses for frontend integration",
    ],
    repoNote: "Code is confidential because this was an internship project.",
    repoLabel: "Confidential",
  },
  {
    id: "sapidoc-expert-system",
    title: "SapiDoc - Cattle Disease Expert System",
    desc: "A thesis project: a web-based expert system for diagnosing cattle diseases using Forward Chaining and Certainty Factor methods.",
    img: "/images/project/SapiDoc/SapiDoc.png",
    category: "Full Stack",
    tech: ["Laravel", "React", "TypeScript", "MySQL", "Tailwind CSS"],
    subinfo: "Thesis Project · Full Stack Expert System",
    period: "Apr – Jul 2026",
    screenshots: [
      "/images/project/SapiDoc/1.png",
      "/images/project/SapiDoc/2.png",
      "/images/project/SapiDoc/4.png",
    ],
    description: `
A thesis project: a web-based expert system designed to help farmers identify potential cattle diseases based on observed symptoms.
The system applies Forward Chaining and Certainty Factor methods to produce a diagnosis with a confidence value.`,
    features: [
      "Cattle disease diagnosis based on selected symptoms",
      "Forward Chaining inference method",
      "Certainty Factor calculation for diagnosis confidence",
      "Disease and symptom data management",
      "Responsive interface for desktop and mobile",
    ],
    github: "https://github.com/ZamiFaiz24/SapiDoc-Expert-System",
    demo: "https://sapidoc-expert-system.ethiodeploy.app/",
  },
  {
    id: "iot-dashboard",
    title: "STECI IoT Monitoring Dashboard",
    desc: "A web dashboard for monitoring STECI IoT measurement results as part of a capstone project.",
    img: "/images/project/steci/IoT%20Monitoring.png",
    category: "Full Stack",
    tech: ["Laravel", "Vue", "MySQL", "REST API"],
    subinfo: "Capstone Project · IoT Dashboard",
    period: "Apr – Jul 2025",
    screenshots: [
      "/images/project/steci/4.png",
      "/images/project/steci/7.png",
    ],
    description: `
A web dashboard developed for the STECI capstone project to monitor IoT measurement results from the egg-clustering process.
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
  {
    id: "task-management-system",
    title: "Task Management System",
    desc: "A personal full-stack project for organizing and tracking daily activities.",
    img: "/images/project/My_ToDo/Task%20Manajement.png",
    category: "Full Stack",
    tech: ["Laravel", "React", "Tailwind CSS"],
    subinfo: "Personal Project · Full Stack Application",
    screenshots: [
      "/images/project/My_ToDo/1.png",
      "/images/project/My_ToDo/2.png",
      "/images/project/My_ToDo/SS01.png",
      "/images/project/My_ToDo/SS02.png",
    ],
    description: `
A personal task management project built to practice full-stack development.
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
];
