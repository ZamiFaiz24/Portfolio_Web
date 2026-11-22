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
import { useTranslation } from "@/locales";

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
  { name: "Laravel", icon: <FaLaravel /> },
  { name: "PHP", icon: <FaPhp /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "REST API", icon: <FaCode /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "React", icon: <FaReact /> },
  { name: "Vue.js", icon: <FaVuejs /> },
  { name: "Postman", icon: <SiPostman /> },
  { name: "Git", icon: <FaGitAlt /> },
];

export default function About(props: AboutProps) {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<ActiveTab>("profile");

  return (
    <section
      id="about"
      className="scroll-mt-16 py-16 bg-page transition-colors duration-500"
      {...props}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">
        <div className="bg-surface border border-ink/10 shadow-sm rounded-2xl p-6 flex flex-col items-center text-center md:col-span-1">
          <div className="relative group mb-4">
            <div className="p-1 bg-accent rounded-xl">
              <img
                src="/images/Profile2.png"
                alt="Faiz Zamzami"
                className="w-44 h-44 object-cover rounded-xl shadow-sm transition-transform duration-300 group-hover:scale-105 object-[0_20%]"
              />
            </div>
          </div>

          <h3 className="text-2xl font-extrabold text-accent">
            {t("hero.name")}
          </h3>
          <p className="text-ink/70 text-sm">
            {t("about.role")}
          </p>
          <span className="mt-2 mb-4 inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {t("about.availability")}
          </span>

          <div className="mt-2 space-y-2 text-sm text-ink/80 w-full text-left">
            <InfoItem icon={<FaUser />} label={t("about.info.name")} value={t("hero.name")} />
            <InfoItem
              icon={<FaCode />}
              label={t("about.info.role")}
              value={t("about.role")}
            />
            <InfoItem
              icon={<FaEnvelope />}
              label={t("about.info.email")}
              value="faizzamzami10p@gmail.com"
              href="mailto:faizzamzami10p@gmail.com"
            />
            <InfoItem
              icon={<FaPhone />}
              label={t("about.info.phone")}
              value="(+62) 838-6106-5430"
              href="tel:+6283861065430"
            />
          </div>

          <a
            href="/files/FAIZ_ZAMZAMI_Full_New.pdf"
            download="Faiz_Zamzami_CV.pdf"
            aria-label={t("about.downloadCvAria")}
            className="mt-6 inline-flex items-center gap-2 px-6 py-2 rounded-lg bg-accent text-page hover:bg-accent/90 font-semibold shadow-sm hover:-translate-y-0.5 transition-all duration-300 active:scale-95"
          >
            <FaDownload className="text-lg" /> {t("about.downloadCv")}
          </a>
        </div>

        <div className="bg-surface border border-ink/10 shadow-sm rounded-2xl p-6 sm:p-8 md:col-span-2">
          <h2 className="text-3xl font-extrabold text-accent border-b-4 border-accent inline-block pb-1 mb-6">
            {t("about.heading")}
          </h2>

          <div className="flex space-x-2 md:space-x-4 mb-6 border-b border-transparent">
            <TabButton
              label={t("about.tabs.profile")}
              activeTab={activeTab}
              onClick={() => setActiveTab("profile")}
            />
            <TabButton
              label={t("about.tabs.skills")}
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
                    className="max-w-prose space-y-5 text-base leading-7 text-ink/80"
                  >
                    <motion.p variants={listItemVariant}>
                      {t("about.paragraphs.p1")}
                    </motion.p>
                    <motion.p variants={listItemVariant}>
                      {t("about.paragraphs.p2")}
                    </motion.p>
                    <motion.p variants={listItemVariant}>
                      {t("about.paragraphs.p3")}
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
                    className="mb-6 max-w-prose text-base leading-7 text-ink/80"
                  >
                    {t("about.skillsIntro")}
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
                        className="flex items-center p-3 text-sm bg-surface rounded-lg border border-ink/10 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group"
                      >
                        <span className="text-2xl mr-3 text-ink/70 group-hover:scale-110 transition-transform duration-300">
                          {skill.icon}
                        </span>
                        <p className="font-semibold text-ink">
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
      <span className="mt-0.5 text-accent text-lg">
        {icon}
      </span>
      <span className="font-semibold shrink-0">{label}:</span>
      <span className="min-w-0 break-all">
        {href ? (
          <a
            href={href}
            className="hover:text-accent hover:underline underline-offset-2"
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
            ? "text-accent"
            : "text-ink/60 hover:text-accent"
        }
      >
        {label}
      </span>
      {isActive && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-accent"
          layoutId="activeTabIndicator"
        />
      )}
    </button>
  );
}
