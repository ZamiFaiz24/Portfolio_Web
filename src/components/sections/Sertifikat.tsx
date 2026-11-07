// src/components/sections/Sertifikat.tsx

import React from "react";
import { FaAward } from "react-icons/fa";
import { motion } from "framer-motion";

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
    link: "https://www.dicoding.com/certificates/EB8NWQWE",
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
      className={`scroll-mt-16 w-full bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 py-16 px-6 transition-colors duration-500 ${className ?? ""}`}
      {...rest}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-blue-700 dark:text-cyan-400 border-b-4 border-blue-400 dark:border-cyan-500 inline-block">
          Certificates
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg">
          Proof of my learning journey and achievements in technology.
        </p>
      </div>

      <motion.div
        variants={listContainerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-8"
      >
        {certificates.map((cert) => (
          <motion.div
            key={cert.title}
            variants={listItemVariant}
            className="flex h-full flex-col items-center rounded-xl border border-blue-100 bg-white px-6 py-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:shadow-cyan-500/10 group"
          >
            <FaAward className="text-blue-500 dark:text-cyan-400 text-6xl mb-4 group-hover:text-cyan-500 dark:group-hover:text-cyan-300 group-hover:scale-110 transition-all duration-300" />

            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2 text-center flex-grow">
              {cert.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              {cert.issuer}
            </p>

            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 px-6 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95"
            >
              View Certificate →
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
