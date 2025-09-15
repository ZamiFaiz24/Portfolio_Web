import React from "react"; 
import { Link } from "react-router-dom";

type ProjectsProps = React.HTMLAttributes<HTMLElement>;

const projects = [
  {
    id: "sistem-pakar-sapi",
    title: "Cattle Expert System",
    desc: "A web application for diagnosing cattle diseases using Laravel.",
    img: "/src/images/potrfolio02.png",
  },
  {
    id: "todo-list-laravel",
    title: "Todo List Laravel",
    desc: "A simple task management app built with Laravel.",
    img: "/src/images/Portfolio01.png",
  },
  {
    id: "iot-dummy-api",
    title: "IoT Dummy API",
    desc: "A REST API for simulating IoT devices.",
    img: "/src/images/porto-iot.png",
  },
];

const Projects: React.FC<ProjectsProps> = (props) => {
  const { className, ...rest } = props;
  return (
    <section
      id="projects"
      className={`scroll-mt-16 w-full bg-gradient-to-br from-white via-blue-50 to-blue-100 py-16 px-6 ${
        className ?? ""
      }`}
      {...rest}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-blue-700 border-b-4 border-blue-400 inline-block w-fit">
          Projects
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          Some of the projects I’ve worked on.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="group rounded-2xl overflow-hidden shadow-lg bg-white transition transform hover:shadow-blue-300 relative"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-2xl"
              />

              {/* Overlay on hover */}
              <div
                className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-center px-4 
                            opacity-0 group-hover:opacity-100 transition duration-500"
              >
                <p className="text-gray-200 text-sm mt-2">{project.desc}</p>
                <Link
                  to={`/projects/${project.id}`}
                  className="px-4 py-2 mt-5 !text-white border border-white/30 rounded-lg 
                            bg-black/70 backdrop-blur-md shadow-md 
                            transition-all duration-300 text-sm
                            hover:bg-white/10 hover:!text-blue-700"
                >
                  View Project
                </Link>
              </div>
            </div>

            {/* Title (always visible when not hovered) */}
            <div className="p-4 text-center relative">
              <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>

              {/* Underline animation */}
              <span
                className="absolute left-1/2 -translate-x-1/2 bottom-2 w-0 h-1 
                              bg-gradient-to-r from-blue-500 to-cyan-400 
                              group-hover:w-1/2 transition-all duration-500 rounded-full"
              ></span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
