import React from "react";
import { FaAward } from "react-icons/fa";

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

export default function Certificates(props: CertificatesProps) {
  const { className, ...rest } = props;
  return (
    <section
      id="certificates"
      className={`scroll-mt-16 w-full bg-gradient-to-br from-white via-blue-50 to-blue-100 py-16 px-6 ${className ?? ""}`}
      {...rest}
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-blue-700 border-b-4 border-blue-400 inline-block">
          Certificates
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          Proof of my learning journey & achievements in technology.
        </p>
      </div>

      {/* Grid Certificates */}
      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
        {certificates.map((cert, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center bg-white rounded-xl shadow-md px-6 py-8 hover:shadow-lg transition group"
          >
            {/* Icon */}
            <FaAward className="text-blue-500 text-6xl mb-4 group-hover:text-cyan-500 group-hover:scale-120 transition-transform duration-500" />

            {/* Title */}
            <h3 className="text-md font-bold text-gray-800 mb-2">
              {cert.title}
            </h3>

            {/* Issuer */}
            <p className="text-sm text-gray-600 mb-4">{cert.issuer}</p>

            {/* Link */}
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 px-6 py-2 rounded-lg 
                      bg-gradient-to-r from-blue-500 to-cyan-500 !text-white
                      hover:from-blue-600 hover:to-cyan-600 font-semibold shadow-lg 
                      hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              View Certificate →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
