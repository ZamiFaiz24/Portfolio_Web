import React from "react";

type ContactProps = React.HTMLAttributes<HTMLElement>;

const Contact: React.FC<ContactProps> = (props) => {
  const { className, ...rest } = props;
  return (
    <section
      id="contact"
      className={`scroll-mt-16 w-full bg-gradient-to-br from-white via-blue-50 to-blue-100 py-20 px-6 ${className ?? ""}`}
      {...rest}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-blue-700 border-b-4 border-blue-400 inline-block">
          Contact Me
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          Feel free to send me a message. I’ll get back to you as soon as possible.
        </p>
      </div>

      {/* Form Only */}
      <form className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-10 space-y-6 hover:shadow-2xl transition-all duration-300">
        {/* Name */}
        <div className="relative">
          <input
            type="text"
            required
            placeholder="Your Name"
            className="peer w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-800
                       focus:outline-none focus:ring-2 focus:ring-blue-400
                       placeholder-transparent focus:placeholder-gray-400"
          />
          <label
            className="absolute left-4 top-3 text-gray-400 transition-all
                       peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
                       peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-500 bg-white px-1"
          >
            Your Name
          </label>
        </div>

        {/* Email */}
        <div className="relative">
          <input
            type="email"
            required
            placeholder="Your Email"
            className="peer w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-800
                       focus:outline-none focus:ring-2 focus:ring-blue-400
                       placeholder-transparent focus:placeholder-gray-400"
          />
          <label
            className="absolute left-4 top-3 text-gray-400 transition-all bg-white px-1
                       peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
                       peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-500"
          >
            Your Email
          </label>
        </div>

        {/* Message */}
        <div className="relative">
          <textarea
            rows={5}
            required
            placeholder="Your Message"
            className="peer w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-800
                       focus:outline-none focus:ring-2 focus:ring-blue-400
                       placeholder-transparent focus:placeholder-gray-400"
          ></textarea>
          <label
            className="absolute left-4 top-3 text-gray-400 transition-all bg-white px-1
                       peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
                       peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-500"
          >
            Your Message
          </label>
        </div>

        <button
          type="submit"
          className="w-full md:w-auto mt-6 inline-flex justify-center items-center gap-2 px-8 py-3 rounded-lg 
                     bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold
                     shadow-md hover:from-blue-600 hover:to-cyan-600 hover:scale-105 hover:shadow-xl
                     transition-all duration-300"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
