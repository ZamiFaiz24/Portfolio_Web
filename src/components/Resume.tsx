import React from "react";
import { FaGraduationCap, FaBriefcase, FaUser } from "react-icons/fa";

type ResumeProps = React.HTMLAttributes<HTMLElement>;

const Resume: React.FC<ResumeProps> = (props) => {
  const { className, ...rest } = props;
  return (
    <section
      id="resume"
      className={`w-full bg-gradient-to-br from-white via-blue-50 to-blue-100 py-16 px-6 ${className ?? ""}`}
      {...rest}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-blue-700 border-b-4 border-blue-400 inline-block w-fit">
          Resume
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          Ringkasan pendidikan, pengalaman, dan proyek yang saya jalani.
        </p>
      </div>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Summary & Education */}
        <div className="bg-white shadow-xl rounded-2xl p-8 relative group flex flex-col items-start transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="flex items-center gap-2 mb-2 text-blue-600 font-semibold">
            <FaUser className="text-xl" />
            <span>Summary</span>
          </div>
          <p className="mb-4 text-gray-700">
            Saya fokus pada backend development dengan keahlian di Laravel, REST API, dan database.
          </p>
          <div className="flex items-center gap-2 mb-2 text-blue-600 font-semibold">
            <FaGraduationCap className="text-xl" />
            <span>Education</span>
          </div>
          <ul className="list-disc list-inside ml-4 text-gray-700">
            <li>
              S1 – Sains Data (Universitas XYZ){" "}
              <span className="text-gray-500">2021–Sekarang</span>
            </li>
          </ul>
          {/* Garis biru bawah menyatu */}
          <span className="absolute left-0 right-0 bottom-0 h-1 rounded-b-2xl bg-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
        </div>
        {/* Experience / Projects */}
        <div className="bg-white shadow-xl rounded-2xl p-8 relative group flex flex-col items-start transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="flex items-center gap-2 mb-2 text-blue-600 font-semibold">
            <FaBriefcase className="text-xl" />
            <span>Experience / Projects</span>
          </div>
          <ul className="list-disc list-inside ml-4 text-gray-700">
            <li>Membangun sistem pakar sapi dengan Laravel</li>
            <li>Membuat API perangkat IoT dummy</li>
            <li>Todo list Laravel</li>
          </ul>
          {/* Garis biru bawah menyatu */}
          <span className="absolute left-0 right-0 bottom-0 h-1 rounded-b-2xl bg-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
        </div>
      </div>
    </section>
  );
};

export default Resume;
