// src/components/Service.tsx

import React, { useState } from "react";
import { FaDatabase, FaLock, FaPlug, FaCode, FaBolt } from "react-icons/fa";
import { SiLaravel, SiPostman, SiMysql } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";

type ServicesProps = React.HTMLAttributes<HTMLElement>;

// 1. Data diperkaya dengan ikon untuk setiap teknologi
const services = [
  {
    icon: <FaCode />,
    title: "REST API Development",
    shortDesc: "Hover for details",
    desc: "I build robust APIs using Laravel, focusing on clean code, security with Sanctum, and clear Postman documentation.",
    tech: [
      { name: 'Laravel', icon: <SiLaravel/> }, 
      { name: 'Sanctum', icon: <FaLock/> }, 
      { name: 'Postman', icon: <SiPostman/> }
    ],
  },
  {
    icon: <FaDatabase />,
    title: "Database Design",
    shortDesc: "Hover for details",
    desc: "Designing optimized and scalable database schemas, focusing on normalization and indexing for high-performance queries.",
    tech: [
      { name: 'MySQL', icon: <SiMysql/> }, 
      { name: 'Normalization', icon: null }, 
      { name: 'Indexing', icon: null }
    ],
  },
  {
    icon: <FaLock />,
    title: "Authentication",
    shortDesc: "Hover for details",
    desc: "Implementing secure authentication and authorization systems using modern standards like JWT or OAuth.",
    tech: [
      { name: 'Laravel', icon: <SiLaravel/> }, 
      { name: 'JWT', icon: null }, 
      { name: 'OAuth', icon: null }
    ],
  },
  {
    icon: <FaPlug />,
    title: "System Integration",
    shortDesc: "Hover for details",
    desc: "Seamlessly connecting different systems and third-party services via APIs, Webhooks, and Cron Jobs.",
    tech: [
      { name: 'Webhooks', icon: <FaBolt/> }, 
      { name: 'API Clients', icon: null }, 
      { name: 'Cron Jobs', icon: null }
    ],
  },
];

const Services: React.FC<ServicesProps> = (props) => {
  // ... (bagian atas komponen Services tetap sama)
  const { className, ...rest } = props;
  return (
    <section
      id="service"
      className={`scroll-mt-16 w-full bg-gradient-to-br from-blue-100 via-blue-50 to-white dark:from-gray-900 dark:via-black dark:to-gray-900 py-16 px-6 transition-colors duration-500 ${className ?? ""}`}
      {...rest}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-blue-700 dark:text-cyan-400 border-b-4 border-blue-400 dark:border-cyan-500 inline-block w-fit">
          My Services
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          I offer professional services to build and optimize the backbone of your web applications.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </section>
  );
};

// Komponen ServiceCard yang disempurnakan
const ServiceCard = ({ service }: { service: typeof services[0] }) => {
  const [isHovered, setIsHovered] = useState(false);

  const titleVariants = {
    initial: { y: 0 },
    hover: { y: -60 }, // Jarak geser ke atas ditambah
  };

  const hintVariants = {
    initial: { opacity: 1 },
    hover: { opacity: 0 }, // Teks petunjuk menghilang saat di-hover
  }
  
  const detailsVariants = {
    initial: { opacity: 0, y: 30 },
    hover: { opacity: 1, y: 0, transition: { delay: 0.2 } },
  };

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative h-80 p-8 overflow-hidden
                 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md 
                 dark:border dark:border-gray-700 shadow-lg rounded-2xl
                 transition-shadow duration-300"
      // 2. Efek angkat dan glow lebih halus
      whileHover={{ scale: 1.03, y: -10, boxShadow: "0 10px 30px -5px rgba(34, 211, 238, 0.2)" }}
    >
      {/* 3. Posisi ikon & judul dibuat absolute agar animasi lebih presisi */}
      <motion.div
        className="absolute top-1/2 left-8 right-8 -translate-y-1/2 text-center"
        variants={titleVariants}
        animate={isHovered ? "hover" : "initial"}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <span className="inline-block text-5xl text-blue-500 dark:text-cyan-400 mb-4">{service.icon}</span>
        <h3 className="text-xl font-bold text-gray-800 dark:text-white">
          {service.title}
        </h3>
        {/* Teks petunjuk yang bisa menghilang */}
        <motion.p 
          variants={hintVariants}
          className="text-xs text-gray-500 dark:text-gray-400 mt-2"
        >
          {service.shortDesc}
        </motion.p>
      </motion.div>

      {/* Kontainer untuk Detail yang Muncul */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute bottom-8 left-6 right-6 text-center"
            variants={detailsVariants}
            initial="initial"
            animate="hover"
            exit="initial"
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              {service.desc}
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {service.tech.map(tech => (
                <span key={tech.name} className="flex items-center gap-1.5 text-xs px-2 py-1 bg-blue-100 dark:bg-gray-700 text-blue-800 dark:text-cyan-300 rounded-full">
                  {tech.icon} {tech.name}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Services;