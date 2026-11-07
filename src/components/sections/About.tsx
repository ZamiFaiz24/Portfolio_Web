import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCode,
  FaDownload,
  FaLaravel,
  FaPhp,
  FaJs,
  FaReact,
  FaVuejs,
  FaGitAlt,
} from "react-icons/fa";
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
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const listItemVariant: Variants = {
  hidden: { opacity: 0, y: -15, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

// --- Component Types & Data ---
type AboutProps = React.HTMLAttributes<HTMLElement>;
type ActiveTab = "profile" | "skills";

const skillsData = [
  { name: "Laravel", icon: <FaLaravel className="text-red-500" /> },
  { name: "PHP", icon: <FaPhp className="text-indigo-500" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
  {
    name: "REST API",
    icon: <FaCode className="text-gray-600 dark:text-gray-400" />,
  },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Vue.js", icon: <FaVuejs className="text-green-500" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-600" /> },
];

export default function About(props: AboutProps) {
  const [activeTab, setActiveTab] = useState<ActiveTab>("profile");

  return (
    <section
      id="about"
      className="scroll-mt-16 py-16 bg-gradient-to-br from-blue-100 via-blue-50 to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 transition-colors duration-500"
      {...props}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-blue-100 dark:border-gray-700 shadow-xl rounded-2xl p-6 flex flex-col items-center text-center md:col-span-1">
          <div className="relative group mb-4">
            <div className="p-1 bg-gradient-to-tr from-blue-500 to-cyan-500 rounded-xl">
              <img
                src="/images/Profile2.png"
                alt="Faiz Zamzami"
                className="w-44 h-44 object-cover rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105 object-[0_20%]"
              />
            </div>
          </div>

          <h3 className="text-2xl font-extrabold text-blue-700 dark:text-cyan-400">
            Faiz Zamzami
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Junior Full Stack Developer
          </p>
          <span className="mt-2 mb-4 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Open to full-time
          </span>

          <div className="mt-2 space-y-2 text-sm text-gray-700 dark:text-gray-300 w-full text-left">
            <InfoItem icon={<FaUser />} label="Name" value="Faiz Zamzami" />
            <InfoItem
              icon={<FaCode />}
              label="Role"
              value="Junior Full Stack Developer"
            />
            <InfoItem
              icon={<FaEnvelope />}
              label="Email"
              value="faizzamzami10p@gmail.com"
              href="mailto:faizzamzami10p@gmail.com"
            />
            <InfoItem
              icon={<FaPhone />}
              label="Phone"
              value="(+62) 838-6106-5430"
              href="tel:+6283861065430"
            />
          </div>

          <a
            href="/files/FAIZ_ZAMZAMI_Full_New.pdf"
            download="Faiz_Zamzami_CV.pdf"
            aria-label="Download Faiz Zamzami's CV"
            className="mt-6 inline-flex items-center gap-2 px-6 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 active:scale-95"
          >
            <FaDownload className="text-lg" /> Download CV
          </a>
        </div>

        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-blue-100 dark:border-gray-700 shadow-xl rounded-2xl p-6 sm:p-8 md:col-span-2">
          <h2 className="text-3xl font-extrabold text-blue-700 dark:text-cyan-400 border-b-4 border-blue-400 dark:border-cyan-500 inline-block pb-1 mb-6">
            About Me
          </h2>

          <div className="flex space-x-2 md:space-x-4 mb-6 border-b border-transparent">
            <TabButton
              label="Profile"
              activeTab={activeTab}
              onClick={() => setActiveTab("profile")}
            />
            <TabButton
              label="Skills"
              activeTab={activeTab}
              onClick={() => setActiveTab("skills")}
            />
          </div>

          <div className="mt-5 relative">
            <AnimatePresence mode="wait">
              {activeTab === "profile" && (
                <motion.div
                  key="profile"
                  variants={sectionVariant}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <motion.div
                    variants={listContainerVariant}
                    initial="hidden"
                    animate="visible"
                    className="max-w-prose space-y-5 text-base leading-7 text-gray-700 dark:text-gray-300"
                  >
                    <motion.p variants={listItemVariant}>
                      As a fresh graduate focused on full-stack development with
                      a backend emphasis, I turn complex ideas into functional,
                      secure, and reliable applications using Laravel, REST APIs,
                      MySQL, and React.
                    </motion.p>
                    <motion.p variants={listItemVariant}>
                      My curiosity drives me to constantly experiment with new
                      technologies, from designing robust APIs and managing data
                      pipelines to building responsive interfaces with JavaScript
                      and TypeScript.
                    </motion.p>
                    <motion.p variants={listItemVariant}>
                      I see the backend as the core engine of an application. I am
                      now looking for a full-time junior full-stack role with a
                      backend focus where I can keep learning, build impactful
                      systems, and grow with a team.
                    </motion.p>
                  </motion.div>
                </motion.div>
              )}

              {activeTab === "skills" && (
                <motion.div
                  key="skills"
                  variants={sectionVariant}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <motion.p
                    variants={listItemVariant}
                    className="mb-6 max-w-prose text-base leading-7 text-gray-700 dark:text-gray-300"
                  >
                    I work across backend and frontend technologies to build
                    maintainable end-to-end web applications and reliable backend
                    services.
                  </motion.p>

                  <motion.div
                    variants={listContainerVariant}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                  >
                    {skillsData.map((skill) => (
                      <motion.div
                        key={skill.name}
                        variants={listItemVariant}
                        className="flex items-center p-3 text-sm bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group"
                      >
                        <span className="text-2xl mr-3 group-hover:scale-110 transition-transform duration-300">
                          {skill.icon}
                        </span>
                        <p className="font-semibold text-gray-800 dark:text-gray-200">
                          {skill.name}
                        </p>
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

function InfoItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex items-start gap-2 text-inherit text-base">
      <span className="mt-0.5 text-blue-500 dark:text-cyan-500 text-lg">
        {icon}
      </span>
      <span className="font-semibold shrink-0">{label}:</span>
      <span className="min-w-0 break-all">
        {href ? (
          <a
            href={href}
            className="hover:text-blue-600 dark:hover:text-cyan-400 hover:underline underline-offset-2"
          >
            {value}
          </a>
        ) : (
          value
        )}
      </span>
    </div>
  );
}

function TabButton({
  label,
  activeTab,
  onClick,
}: {
  label: string;
  activeTab: ActiveTab;
  onClick: () => void;
}) {
  const isActive = activeTab === label.toLowerCase();

  return (
    <button
      type="button"
      onClick={onClick}
      className="relative py-2 px-4 text-base md:text-lg font-bold transition-colors duration-300 outline-none"
    >
      <span
        className={
          isActive
            ? "text-blue-600 dark:text-cyan-400"
            : "text-gray-500 hover:text-blue-600 dark:hover:text-cyan-400"
        }
      >
        {label}
      </span>
      {isActive && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 dark:bg-cyan-400"
          layoutId="activeTabIndicator"
        />
      )}
    </button>
  );
}
