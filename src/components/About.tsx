import { FaUser, FaEnvelope, FaPhone, FaCode, FaDownload, FaLaravel, FaPhp, FaJs, FaReact, FaVuejs, FaGitAlt, FaDocker } from "react-icons/fa";
import { SiMysql, SiPostman } from "react-icons/si";
import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// --- Framer Motion Variants ---
const sectionVariant: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: 20, transition: { duration: 0.3, ease: "easeInOut" } },
};

const listContainerVariant: Variants = {
  hidden: {}, // Disederhanakan untuk menghilangkan konflik
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const listItemVariant: Variants = {
  hidden: { opacity: 0, y: -15, scale: 0.95 }, // Dihaluskan dengan jarak lebih pendek + scale
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } },
};

// --- Component Types & Data ---
type AboutProps = React.HTMLAttributes<HTMLElement>;
type ActiveTab = 'profile' | 'skills';

const skillsData = [
  // Backend & Database
  { name: 'Laravel', icon: <FaLaravel className="text-red-500" /> },
  { name: 'PHP', icon: <FaPhp className="text-indigo-500" /> },
  { name: 'MySQL', icon: <SiMysql className="text-blue-600" /> },
  { name: 'REST API', icon: <FaCode className="text-gray-600 dark:text-gray-400" /> },
  
  // Frontend
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
  { name: 'React', icon: <FaReact className="text-cyan-400" /> },
  { name: 'Vue.js', icon: <FaVuejs className="text-green-500" /> },
  
  // Tools & DevOps
  { name: 'Postman', icon: <SiPostman className="text-orange-500" /> },
  { name: 'Git', icon: <FaGitAlt className="text-red-600" /> },
];

export default function About(props: AboutProps) {
  const [activeTab, setActiveTab] = useState<ActiveTab>('profile');

  return (
    <section id="about" className="scroll-mt-16 py-16 bg-gradient-to-br from-blue-100 via-blue-50 to-white dark:from-gray-900 dark:via-black dark:to-gray-900 transition-colors duration-500" {...props}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">
        {/* Left Side: Profile Card */}
        <div className="col-span-1 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md dark:border dark:border-gray-700 shadow-xl rounded-2xl p-6 flex flex-col items-center text-center">
          {/* ... konten kartu kiri tetap sama ... */}
          <div className="relative group mb-4">
            <div className="p-1 bg-gradient-to-tr from-blue-500 to-cyan-500 rounded-xl">
              <img src="/images/Profile2.png" alt="Faiz Zamzami" className="w-44 h-44 object-cover rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105 object-[0_20%]" />
            </div>
          </div>
          <h3 className="text-2xl font-extrabold text-blue-700 dark:text-cyan-400">Faiz Zamzami</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">Junior Backend Developer</p>
          <div className="mt-2 space-y-2 text-sm text-gray-700 dark:text-gray-300 w-full text-left">
            <InfoItem icon={<FaUser />} label="Name" value="Faiz Zamzami" />
            <InfoItem icon={<FaCode />} label="Profile" value="Junior Backend Developer" />
            <InfoItem icon={<FaEnvelope />} label="Email" value="faizzamzami10p@gmail.com" />
            <InfoItem icon={<FaPhone />} label="Phone" value="(+62) 838-6106-5430" />
          </div>
          <a href="/files/Faiz_CV.pdf" download className="mt-6 inline-flex items-center gap-2 px-6 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
            <FaDownload className="text-lg" /> Download CV
          </a>
        </div>

        {/* Right Side: Tabbed Content */}
        <div className="col-span-2 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md dark:border dark:border-gray-700 shadow-xl rounded-2xl p-8">
          <h2 className="text-3xl font-extrabold text-blue-700 dark:text-cyan-400 border-b-4 border-blue-400 dark:border-cyan-500 inline-block pb-1 mb-6">
            About Me
          </h2>

          <div className="flex space-x-2 md:space-x-4 mb-6 border-b border-transparent">
            <TabButton label="Profile" activeTab={activeTab} onClick={() => setActiveTab('profile')} />
            <TabButton label="Skills" activeTab={activeTab} onClick={() => setActiveTab('skills')} />
          </div>

          <div className="mt-5 relative">
            <AnimatePresence mode="wait">
              {activeTab === 'profile' && (
                <motion.div key="profile" variants={sectionVariant} initial="hidden" animate="visible" exit="exit">
                  {/* ======================= PERUBAHAN TEKS DI SINI ======================= */}
                  <motion.div variants={listContainerVariant} initial="hidden" animate="visible" className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed text-sg">
                    <motion.p variants={listItemVariant}>As a passionate backend development student, I specialize in turning complex ideas into functional, secure, and reliable applications using Laravel, REST APIs, and MySQL.</motion.p>
                    <motion.p variants={listItemVariant}>My curiosity drives me to constantly experiment with new technologies, from designing robust APIs and managing data pipelines to leveraging JavaScript for seamless front-to-back integration.</motion.p>
                    <motion.p variants={listItemVariant}>I view the backend as the core engine of any application and I am always eager to learn, build, and contribute to challenging projects where I can apply my skills to create impactful and efficient solutions.</motion.p>
                  </motion.div>
                  {/* ======================= AKHIR DARI PERUBAHAN ======================= */}
                </motion.div>
              )}

              {activeTab === 'skills' && (
                <motion.div key="skills" variants={sectionVariant} initial="hidden" animate="visible" exit="exit">
                  {/* ======================= PERUBAHAN TEKS DI SINI ======================= */}
                  <motion.p variants={listItemVariant} className="mb-6 text-gray-700 dark:text-gray-300 text-sg">
                    I am proficient with a variety of modern technologies and tools to build robust and scalable web applications.
                  </motion.p>
                  {/* ======================= AKHIR DARI PERUBAHAN ======================= */}
                  <motion.div variants={listContainerVariant} initial="hidden" animate="visible" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {skillsData.map((skill) => (
                      <motion.div key={skill.name} variants={listItemVariant} className="flex items-center p-3 text-sm bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 group">
                        <span className="text-2xl mr-3 group-hover:scale-110 transition-transform duration-300">{skill.icon}</span>
                        <p className="font-semibold text-gray-800 dark:text-gray-200 text-sg">{skill.name}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

// Helper component for Info items
function InfoItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-2 text-inherit text-base">
      <span className="text-blue-500 dark:text-cyan-500 text-lg">{icon}</span>
      <span className="font-semibold">{label}:</span>
      <span>{value}</span>
    </div>
  );
}

// Helper component for Tab buttons for cleaner code
function TabButton({ label, activeTab, onClick }: { label: string; activeTab: ActiveTab; onClick: () => void; }) {
  const isActive = activeTab === label.toLowerCase();
  return (
    <button onClick={onClick} className="relative py-2 px-4 text-base md:text-lg font-bold transition-colors duration-300 outline-none">
      <span className={isActive ? "text-blue-600 dark:text-cyan-400" : "text-gray-500 hover:text-blue-600 dark:hover:text-cyan-400"}>
        {label}
      </span>
      {isActive && (
        <motion.div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 dark:bg-cyan-400" layoutId="activeTabIndicator" />
      )}
    </button>
  );
}