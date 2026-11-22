// src/components/common/Footer.tsx

import { Link } from "react-router-dom";
import { useTranslation } from "@/locales";
import { CONTACT_EMAIL, GITHUB_URL, LINKEDIN_URL } from "@/data/contact";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { to: "/#about", labelKey: "footer.nav.about" },
    { to: "/#experience", labelKey: "footer.nav.experience" },
    { to: "/projects", labelKey: "footer.nav.projects" },
    { to: "/certificates", labelKey: "footer.nav.certificates" },
    { to: "/contact", labelKey: "footer.nav.contact" },
  ];

  const socialLinks = [
    {
      href: GITHUB_URL,
      labelKey: "footer.social.github",
      icon: <FaGithub />,
    },
    {
      href: LINKEDIN_URL,
      labelKey: "footer.social.linkedin",
      icon: <FaLinkedin />,
    },
    {
      href: `mailto:${CONTACT_EMAIL}`,
      labelKey: "footer.social.email",
      icon: <FaEnvelope />,
    },
  ];

  return (
    <footer className="w-full bg-slate-900 dark:bg-slate-950 transition-colors duration-500">
      <div className="max-w-6xl mx-auto py-12 px-6">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-bold text-white">{t("hero.name")}</h3>
            <p className="mt-2 text-gray-300 text-sm leading-relaxed">
              {t("footer.description")}
            </p>
            <p className="mt-2 text-sm font-medium text-emerald-300">
              {t("footer.availability")}
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-100 mb-3">
              {t("footer.quickLinks")}
            </h4>
            <nav aria-label={t("footer.navAria")}>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      {t(link.labelKey)}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h4 className="font-semibold text-gray-100 mb-3">
              {t("footer.connect")}
            </h4>
            <div className="flex justify-center md:justify-start gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.labelKey}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t(link.labelKey)}
                  className="text-gray-300 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110"
                >
                  <span className="text-2xl">{link.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} {t("hero.name")}.{" "}
            {t("footer.allRightsReserved")}
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
            aria-label={t("footer.backToTopAria")}
          >
            <FaArrowUp className="text-lg" /> {t("footer.backToTop")}
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
