export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center bg-gray-900 text-white"
    >
      {/* Background Foto
      <img
        src="/src/images/Profil01.jpg" // ganti sesuai foto
        alt="Faiz Zamzami"
        className="absolute inset-0 w-full h-full object-cover object-[center_35%]" 
      /> */}

      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full  object-cover"
      >
        <source src="/src/videos/BG.mp4" type="video/mp4" />
        Browser kamu tidak mendukung video.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Konten */}
      <div className="relative z-10 text-center max-w-3xl px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-3 tracking-tight">
          Hi, I am <span className="text-blue-400">Faiz Zamzami</span>
        </h1>
        <h2
          className="text-2xl md:text-3xl mt-2 font-semibold 
                    bg-gradient-to-r from-blue-500 via-white to-cyan-500
                    bg-clip-text text-transparent drop-shadow"
          style={{
            backgroundSize: "300% auto",
            animation: "shine 10s linear infinite",
          }}
        >
          Junior Backend Developer
        </h2>

        <style>
        {`
          @keyframes shine {
            0% { background-position: 200% center; }
            100% { background-position: -200% center; }
          }
        `}
        </style>

        <p className="mt-6 text-gray-200 text-xl leading-relaxed">
          Building the future of the web, one line of code at a time.
        </p>

        <div className="mt-20 flex flex-col md:flex-row gap-8 justify-center">
          <a
            href="#porto"
            className="px-6 py-3 border border-white/30 rounded-lg 
                      bg-white/10 backdrop-blur-md !text-white shadow-md 
                      transition-all duration-300 font-semibold text-lg hover:!text-blue-500
                      hover:scale-110 hover:border-white/60 hover:shadow-[0_0_15px_rgba(255,255,255,0.4)]"
          >
            View Project
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-white/30 rounded-lg 
                      bg-white/10 backdrop-blur-md !text-white shadow-md 
                      transition-all duration-300 font-semibold text-lg hover:!text-blue-500
                      hover:scale-110 hover:border-white/60 hover:shadow-[0_0_15px_rgba(255,255,255,0.4)]"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-20">
        <a
          href="#about"
          className="flex flex-col items-center text-blue-200 hover:text-white transition group"
        >
          {/* Text dengan shimmer */}
          <span
            className="text-lg text-bold mb-3 tracking-wide bg-gradient-to-r from-blue-500 via-white to-cyan-500
                      bg-clip-text text-transparent animate-gradient"
            style={{
              backgroundSize: "200% auto",
              animation: "shine 3s linear infinite",
            }}
          >
            Scroll Down
          </span>

          {/* Icon dengan bounce + pulse */}
          <svg
            width="35"
            height="35"
            fill="none"
            viewBox="0 0 32 32"
            className="animate-bounce group-hover:scale-110 transition duration-300"
          >
            <path
              d="M16 22L8 14M16 22L24 14"
              stroke="currentColor"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>

      <style>
      {`
        @keyframes shine {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
      `}
      </style>

    </section>
  );
}
