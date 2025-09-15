import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => (
  <footer className="w-full bg-blue-900 text-gray-200 py-10 px-6 mt-16">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      
      {/* Left - Copyright */}
      <p className="text-sm text-center md:text-left">
        &copy; {new Date().getFullYear()} <span className="font-semibold">Faiz Zamzami</span>. All rights reserved.
      </p>

      {/* Right - Links */}
      <div className="flex flex-wrap justify-center md:justify-end gap-6 text-lg">
        <a
          href="https://github.com/faizzamzami"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:!text-white hover:scale-110 transition"
        >
          <FaGithub /> GitHub
        </a>
        <a
          href="https://linkedin.com/in/faizzamzami"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:!text-white hover:scale-110 transition"
        >
          <FaLinkedin /> LinkedIn
        </a>
        <a
          href="mailto:faiz@example.com"
          className="flex items-center gap-2 hover:!text-white hover:scale-110 transition"
        >
          <FaEnvelope /> Email
        </a>
        <a
          href="tel:+6281234567890"
          className="flex items-center gap-2 hover:!text-white hover:scale-110 transition"
        >
          <FaPhone /> Phone
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
