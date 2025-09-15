import { FaUser, FaEnvelope, FaPhone, FaCode, FaDownload } from "react-icons/fa";
import React from "react";

type AboutProps = React.HTMLAttributes<HTMLElement>;

export default function About(props: AboutProps) {
  return (
    <section
      id="about"
      className="scroll-mt-16 py-16 bg-gradient-to-br from-blue-100 via-blue-50 to-white"
      {...props}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">
        {/* Kiri: Foto + Info */}
        <div className="col-span-1 bg-white/70 backdrop-blur-md shadow-xl rounded-2xl p-6 flex flex-col items-center text-center">
          {/* Foto dengan border gradient */}
          <div className="relative group mb-4">
            <div className="p-1 bg-gradient-to-tr from-blue-500 to-cyan-500 rounded-xl">
              <img
                src="/public/images/Profil01.jpg"
                alt="Faiz Zamzami"
                className="w-44 h-44 object-cover rounded-xl shadow-lg 
                          transition-transform duration-300 group-hover:scale-105 object-[0_20%]"
              />
            </div>
          </div>

          {/* Nama & Profil */}
          <h3 className="text-2xl font-extrabold text-blue-700">Faiz Zamzami</h3>
          <p className="text-gray-600 text-sm mb-4">Junior Back End</p>

          {/* Info */}
          <div className="mt-2 space-y-2 text-sm text-gray-700 w-full text-left">
            <InfoItem icon={<FaUser />} label="Name" value="Faiz Zamzami" />
            <InfoItem icon={<FaCode />} label="Profile" value="Junior Back End" />
            <InfoItem icon={<FaEnvelope />} label="Email" value="faizzamzami10p@gmail.com" />
            <InfoItem icon={<FaPhone />} label="Phone" value="(+62) 838-6106-5430" />
          </div>

          {/* Download CV Button */}
          <a
            href="/public/files/Faiz_CV.pdf"
            download
            className="mt-6 inline-flex items-center gap-2 px-6 py-2 rounded-lg 
                      bg-gradient-to-r from-blue-500 to-cyan-500 !text-white
                      hover:from-blue-600 hover:to-cyan-600 font-semibold shadow-lg 
                      hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            <FaDownload className="text-lg" /> Download CV
          </a>
        </div>

        {/* Kanan: About Me */}
        <div className="col-span-2 bg-white/70 backdrop-blur-md shadow-xl rounded-2xl p-8 flex flex-col justify-top">
          <h2 className="text-3xl font-extrabold text-blue-700 border-b-4 border-blue-400 inline-block w-fit">
            About Me
          </h2>
          <div className="mt-5 space-y-5 text-gray-700 leading-relaxed text-lg">
            <p>
              Hi! I’m a student who really enjoys working on backend development, especially with Laravel, REST APIs, and MySQL. I love turning ideas into working applications that are not only functional but also secure and reliable.
            </p>
            <p>
              I like experimenting with new things — from building APIs, handling data, to exploring JavaScript for making backend and frontend work smoothly together.
            </p>
            <p>
              For me, the backend is like the brain of an application, and I’m always excited to learn, build, and contribute to projects where I can sharpen my skills and create something useful.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// InfoItem Component
function InfoItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-2 text-gray-700 text-base">
      <span className="text-blue-500 text-lg">{icon}</span>
      <span className="font-semibold">{label}:</span>
      <span>{value}</span>
    </div>
  );
}
