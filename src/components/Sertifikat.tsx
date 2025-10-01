// src/components/Sertifikat.tsx

import React from "react";
import { FaAward } from "react-icons/fa";
import { motion } from "framer-motion"; // <-- Tetap gunakan Framer Motion untuk animasi

// Varian animasi untuk staggered effect
const listContainerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const listItemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const certificates = [
  {
    title: "Belajar Membuat Aplikasi Back-End untuk Pemula",
    issuer: "Dicoding Indonesia",
    link: "https://www.dicoding.com/certificates/XXXXXX",
  },
  {
    title: "Database Design & SQL",
    issuer: "Coursera",
    link: "https://coursera.org/certificates/XXXXXX",
  },
  {
    title: "Udemy PHP Laravel Build Real Estate Management System",
    issuer: "Udemy",
    link: "https://www.udemy.com/certificate/UC-25d41563-96bc-47e1-a9fc-ad3d3b482ad4/",
  },
];

type CertificatesProps = React.HTMLAttributes<HTMLElement>;

export default function Sertifikat(props: CertificatesProps) {
  const { className, ...rest } = props;
  return (
    <section
      id="sertifikat"
      className={`scroll-mt-16 w-full bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:from-gray-900 dark:via-black dark:to-gray-900 py-16 px-6 transition-colors duration-500 ${className ?? ""}`}
      {...rest}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-blue-700 dark:text-cyan-400 border-b-4 border-blue-400 dark:border-cyan-500 inline-block">
          Certificates
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg">
          Proof of my learning journey & achievements in technology.
        </p>
      </div>

      {/* Grid Certificates dengan animasi stagger */}
      <motion.div
        variants={listContainerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-5xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8"
      >
        {certificates.map((cert, idx) => (
          // Desain kartu kembali seperti sebelumnya, tapi dibungkus motion.div
          <motion.div
            key={idx}
            variants={listItemVariant}
            className="flex flex-col items-center bg-white/70 dark:bg-gray-800/70 backdrop-blur-md dark:border dark:border-gray-700 rounded-xl shadow-lg px-6 py-8 
                       hover:shadow-xl dark:hover:shadow-cyan-500/10 hover:scale-105 transition-all duration-300 group"
          >
            <FaAward className="text-blue-500 dark:text-cyan-400 text-6xl mb-4 
                              group-hover:text-cyan-500 dark:group-hover:text-cyan-300 group-hover:scale-110 
                              transition-all duration-300" />

            <h3 className="text-md font-bold text-gray-800 dark:text-gray-200 mb-2 text-center flex-grow">
              {cert.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{cert.issuer}</p>

            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 px-6 py-2 rounded-lg 
                         bg-gradient-to-r from-blue-500 to-cyan-500 text-white
                         hover:from-blue-600 hover:to-cyan-600 font-semibold shadow-lg 
                         hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              View Certificate →
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}