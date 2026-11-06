import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import NotificationModal from "./NotificationModal";

type ContactProps = React.HTMLAttributes<HTMLElement>;

const Contact: React.FC<ContactProps> = (props) => {
  const { className, ...rest } = props;

  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;

    emailjs
      .sendForm("service_p50mh7m", "template_f05wykl", form, "3gL31LK3aAt_ixGRw")
      .then(
        () => {
          setPopup({ type: "success", message: "Message sent successfully!" });
          form.reset();
          setLoading(false);
        },
        () => {
          setPopup({
            type: "error",
            message: "Failed to send message. Please try again or email me directly.",
          });
          setLoading(false);
        }
      );
  };

  const directLinks = [
    {
      href: "mailto:faizzamzami10p@gmail.com",
      label: "Email me",
      value: "faizzamzami10p@gmail.com",
      icon: <FaEnvelope />,
    },
    {
      href: "https://www.linkedin.com/in/faiz-zamzami-1189492ab/",
      label: "LinkedIn",
      value: "faiz-zamzami-1189492ab",
      icon: <FaLinkedin />,
    },
    {
      href: "https://github.com/ZamiFaiz24",
      label: "GitHub",
      value: "github.com/ZamiFaiz24",
      icon: <FaGithub />,
    },
  ];

  return (
    <section
      id="contact"
      className={`scroll-mt-16 w-full bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:from-gray-900 dark:via-black dark:to-gray-900 py-20 px-6 transition-colors duration-500 ${className ?? ""}`}
      {...rest}
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl font-extrabold text-blue-700 dark:text-cyan-400 border-b-4 border-blue-400 dark:border-cyan-500 inline-block">
          Contact Me
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          I am currently open to full-time backend or full-stack opportunities.
          Send me a message and I will get back to you as soon as possible.
        </p>
      </div>

      <div className="max-w-3xl mx-auto grid gap-3 sm:grid-cols-3 mb-8">
        {directLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl border border-blue-100 bg-white px-4 py-3 text-left shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:border-cyan-700"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-lg text-blue-600 dark:bg-gray-700 dark:text-cyan-400">
              {link.icon}
            </span>
            <span className="min-w-0">
              <span className="block text-sm font-semibold text-gray-800 dark:text-gray-100">
                {link.label}
              </span>
              <span className="block truncate text-xs text-gray-500 dark:text-gray-400">
                {link.value}
              </span>
            </span>
          </a>
        ))}
      </div>

      <form
        onSubmit={sendEmail}
        className="max-w-3xl mx-auto bg-white dark:bg-gray-800 border border-blue-100 dark:border-gray-700 shadow-xl rounded-2xl p-6 sm:p-10 space-y-6 transition-all duration-300"
      >
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              autoComplete="name"
              placeholder="e.g. Budi Santoso"
              className="w-full rounded-lg border border-gray-400 bg-white px-4 py-3 text-gray-800 placeholder:text-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              autoComplete="email"
              placeholder="you@company.com"
              className="w-full rounded-lg border border-gray-400 bg-white px-4 py-3 text-gray-800 placeholder:text-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="company"
            className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300"
          >
            Company / Position <span className="font-normal">(optional)</span>
          </label>
          <input
            type="text"
            id="company"
            name="company"
            autoComplete="organization"
            placeholder="e.g. PT Example — Backend / Full Stack Developer"
            className="w-full rounded-lg border border-gray-400 bg-white px-4 py-3 text-gray-800 placeholder:text-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300"
          >
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            placeholder="Tell me about the role or project..."
            className="w-full rounded-lg border border-gray-400 bg-white px-4 py-3 text-gray-800 placeholder:text-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
          ></textarea>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold shadow-lg transition-all duration-300 hover:from-blue-700 hover:to-blue-800 hover:shadow-xl active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            Prefer email?{" "}
            <a
              href="mailto:faizzamzami10p@gmail.com"
              className="font-semibold text-blue-600 hover:underline dark:text-cyan-400"
            >
              faizzamzami10p@gmail.com
            </a>
          </p>
        </div>
      </form>

      <NotificationModal popup={popup} onClose={() => setPopup(null)} />
    </section>
  );
};

export default Contact;
