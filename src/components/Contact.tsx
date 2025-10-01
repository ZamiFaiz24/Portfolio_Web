import React, { useState } from "react";
import emailjs from "emailjs-com";
import NotificationModal from './NotificationModal';

type ContactProps = React.HTMLAttributes<HTMLElement>;

const Contact: React.FC<ContactProps> = (props) => {
  const { className, ...rest } = props;

  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;

    emailjs
      .sendForm("service_p50mh7m", "template_f05wykl", form, "3gL31LK3aAt_ixGRw")
      .then(
        () => {
          setPopup({ type: "success", message: "✅ Message sent successfully!" });
          form.reset(); // kosongkan form hanya kalau sukses
          setLoading(false);
        },
        () => {
          setPopup({ type: "error", message: "❌ Failed to send message. Please try again." });
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className={`scroll-mt-16 w-full bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:from-gray-900 dark:via-black dark:to-gray-900 py-20 px-6 transition-colors duration-500 ${className ?? ""}`}
      {...rest}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-blue-700 dark:text-cyan-400 border-b-4 border-blue-400 dark:border-cyan-500 inline-block">
          Contact Me
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg">
          Feel free to send me a message. I’ll get back to you as soon as possible.
        </p>
      </div>

      <form
        onSubmit={sendEmail}
        className="max-w-3xl mx-auto bg-white/70 dark:bg-gray-800/70 backdrop-blur-md dark:border dark:border-gray-700 shadow-xl rounded-2xl p-10 space-y-8 hover:shadow-2xl transition-all duration-300"
      >
        {/* Name Input */}
        <div className="relative">
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Your Name"
            className="peer w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700
                       focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-cyan-500
                       placeholder-transparent"
          />
          <label
            htmlFor="name"
            className="absolute left-3 -top-2.5 text-sm text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 px-1 transition-all
                        peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                        peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600 dark:peer-focus:text-cyan-400"
          >
            Your Name
          </label>
        </div>

        {/* Email Input */}
        <div className="relative">
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Your Email"
            className="peer w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700
                       focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-cyan-500
                       placeholder-transparent"
          />
          <label
            htmlFor="email"
            className="absolute left-3 -top-2.5 text-sm text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 px-1 transition-all
                        peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                        peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600 dark:peer-focus:text-cyan-400"
          >
            Your Email
          </label>
        </div>

        {/* Message Input */}
        <div className="relative">
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            placeholder="Your Message"
            className="peer w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700
                       focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-cyan-500
                       placeholder-transparent"
          ></textarea>
          <label
            htmlFor="message"
            className="absolute left-3 -top-2.5 text-sm text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 px-1 transition-all
                        peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                        peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600 dark:peer-focus:text-cyan-400"
          >
            Your Message
          </label>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full md:w-auto mt-6 inline-flex justify-center items-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-blue-800 via-blue-600 to-cyan-400 text-white font-semibold shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300 disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>

      <NotificationModal popup={popup} onClose={() => setPopup(null)} />
    </section>
  );
};

export default Contact;
