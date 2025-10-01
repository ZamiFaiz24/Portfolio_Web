// src/components/Footer.tsx

import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const socialLinks = [
    { href: "https://github.com/faizzamzami", label: "GitHub", icon: <FaGithub /> },
    { href: "https://linkedin.com/in/faizzamzami", label: "LinkedIn", icon: <FaLinkedin /> },
    { href: "mailto:faizzamzami10p@gmail.com", label: "Email", icon: <FaEnvelope /> },
  ];

  return (
    // 1. Latar belakang diubah
    <footer className="w-full bg-slate-900 dark:bg-slate-900 transition-colors duration-500">
      <div className="max-w-6xl mx-auto py-12 px-6">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Kolom 1: Nama dan Deskripsi */}
          <div>
            {/* 2. Warna teks diubah */}
            <h3 className="text-xl font-bold text-white">Faiz Zamzami</h3>
            <p className="mt-2 text-gray-400 text-sm">
              A passionate backend developer turning ideas into reality.
            </p>
          </div>

          {/* Kolom 2: Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-200 mb-3">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.href}>
                  {/* 3. Warna link diubah */}
                  <a href={link.href} className="text-gray-400 hover:text-blue-700 dark:hover:text-cyan-400 transition">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 3: Sosial Media */}
          <div>
            <h4 className="font-semibold text-gray-200 mb-3">Connect With Me</h4>
            <div className="flex justify-center md:justify-start gap-6">
              {socialLinks.map(link => (
                <a 
                  key={link.label}
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  // 4. Warna ikon sosial media diubah
                  className="text-gray-400 hover:text-blue-700 dark:hover:text-cyan-400 transition transform hover:scale-110"
                >
                  <span className="text-2xl">{link.icon}</span>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Garis Pemisah dan Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700/50 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Faiz Zamzami. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;