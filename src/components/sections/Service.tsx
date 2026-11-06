// src/components/sections/Service.tsx

import React from "react";
import { FaDatabase, FaLock, FaPlug, FaCode, FaBolt } from "react-icons/fa";
import { SiLaravel, SiPostman, SiMysql } from "react-icons/si";
import { motion } from "framer-motion";

type ServicesProps = React.HTMLAttributes<HTMLElement>;

type Service = {
  icon: React.ReactNode;
  title: string;
  desc: string;
  tech: { name: string; icon: React.ReactNode | null }[];
};

const services: Service[] = [
  {
    icon: <FaCode />,
    title: "REST API Development",
    desc: "I build robust APIs using Laravel, focusing on clean code, security with Sanctum, and clear Postman documentation.",
    tech: [
      { name: "Laravel", icon: <SiLaravel /> },
      { name: "Sanctum", icon: <FaLock /> },
      { name: "Postman", icon: <SiPostman /> },
    ],
  },
  {
    icon: <FaDatabase />,
    title: "Database Design",
    desc: "Designing optimized and scalable database schemas, focusing on normalization and indexing for high-performance queries.",
    tech: [
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Normalization", icon: null },
      { name: "Indexing", icon: null },
    ],
  },
  {
    icon: <FaLock />,
    title: "Authentication",
    desc: "Implementing secure authentication and authorization systems using modern standards like JWT or OAuth.",
    tech: [
      { name: "Laravel", icon: <SiLaravel /> },
      { name: "JWT", icon: null },
      { name: "OAuth", icon: null },
    ],
  },
  {
    icon: <FaPlug />,
    title: "System Integration",
    desc: "Seamlessly connecting different systems and third-party services via APIs, Webhooks, and Cron Jobs.",
    tech: [
      { name: "Webhooks", icon: <FaBolt /> },
      { name: "API Clients", icon: null },
      { name: "Cron Jobs", icon: null },
    ],
  },
];

const Services: React.FC<ServicesProps> = (props) => {
  const { className, ...rest } = props;

  return (
    <section
      id="service"
      className={`scroll-mt-16 w-full bg-gradient-to-br from-blue-100 via-blue-50 to-white dark:from-gray-900 dark:via-black dark:to-gray-900 py-16 px-6 transition-colors duration-500 ${className ?? ""}`}
      {...rest}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-blue-700 dark:text-cyan-400 border-b-4 border-blue-400 dark:border-cyan-500 inline-block w-fit">
          What I Can Do
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          How I can contribute to your team as a backend-focused full-stack developer.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {services.map((service) => (
          <motion.div
            key={service.title}
            className="flex h-full flex-col rounded-2xl border border-blue-100 bg-white p-7 shadow-lg transition-shadow duration-300 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800"
            whileHover={{ y: -4 }}
          >
            <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl text-blue-600 dark:bg-gray-700 dark:text-cyan-400">
              {service.icon}
            </span>

            <h3 className="text-xl font-bold text-gray-800 dark:text-white">
              {service.title}
            </h3>

            <p className="mt-3 flex-1 text-base leading-relaxed text-gray-600 dark:text-gray-300">
              {service.desc}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {service.tech.map((tech) => (
                <span
                  key={tech.name}
                  className="flex items-center gap-1.5 rounded-full bg-blue-100 px-2.5 py-1 text-xs font-medium text-blue-800 dark:bg-gray-700 dark:text-cyan-300"
                >
                  {tech.icon} {tech.name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
