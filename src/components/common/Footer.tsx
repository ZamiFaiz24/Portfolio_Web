// src/components/common/Footer.tsx

import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { to: "/#about", label: "About" },
    { to: "/#experience", label: "Experience" },
    { to: "/#service", label: "Services" },
    { to: "/#projects", label: "Projects" },
    { to: "/#sertifikat", label: "Certificates" },
    { to: "/#contact", label: "Contact" },
  ];

  const socialLinks = [
    {
      href: "https://github.com/ZamiFaiz24",
      label: "GitHub",
      icon: <FaGithub />,
    },
    {
      href: "https://www.linkedin.com/in/faiz-zamzami-1189492ab/",
      label: "LinkedIn",
      icon: <FaLinkedin />,
    },
    {
      href: "mailto:faizzamzami10p@gmail.com",
      label: "Email",
      icon: <FaEnvelope />,
    },
  ];

  return (
    <footer className="w-full bg-slate-900 dark:bg-slate-950 transition-colors duration-500">
      <div className="max-w-6xl mx-auto py-12 px-6">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-bold text-white">Faiz Zamzami</h3>
            <p className="mt-2 text-gray-300 text-sm leading-relaxed">
              Fresh graduate full-stack developer with a backend focus, building
              end-to-end web applications with Laravel, MySQL, React, and
              TypeScript.
            </p>
            <p className="mt-2 text-sm font-medium text-emerald-300">
              Open to backend or full-stack roles
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-100 mb-3">Quick Links</h4>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h4 className="font-semibold text-gray-100 mb-3">Connect With Me</h4>
            <div className="flex justify-center md:justify-start gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
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
            &copy; {new Date().getFullYear()} Faiz Zamzami. All Rights Reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
            aria-label="Back to top"
          >
            <FaArrowUp className="text-lg" /> Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
