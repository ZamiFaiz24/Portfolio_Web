import React from "react";
import { FaDatabase, FaLock, FaPlug, FaCode } from "react-icons/fa";

type ServicesProps = React.HTMLAttributes<HTMLElement>;

const services = [
  {
    icon: <FaCode className="text-blue-500 text-3xl mb-4" />,
    title: "REST API Development",
    desc: "Building secure and efficient APIs for modern applications.",
  },
  {
    icon: <FaDatabase className="text-blue-500 text-3xl mb-4" />,
    title: "Database Design",
    desc: "Designing optimized and well-structured database systems.",
  },
  {
    icon: <FaLock className="text-blue-500 text-3xl mb-4" />,
    title: "Authentication & Authorization",
    desc: "Implementing multi-user login systems with strong security.",
  },
  {
    icon: <FaPlug className="text-blue-500 text-3xl mb-4" />,
    title: "System Integration",
    desc: "Seamlessly connecting different systems and services.",
  },
];

const Services: React.FC<ServicesProps> = (props) => {
  const { className, ...rest } = props;
  return (
    <section
      id="service"
      className={`scroll-mt-16 w-full bg-gradient-to-br from-blue-100 via-blue-50 to-white py-16 px-6 ${
        className ?? ""
      }`}
      {...rest}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-blue-700 border-b-4 border-blue-400 inline-block w-fit">
          Services
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          The services I provide in backend and web development.
        </p>
      </div>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative bg-white shadow-md rounded-2xl p-8 flex flex-col items-center text-center
                      transition-all duration-500 hover:shadow-xl group"
          >
            <div className="text-4xl text-blue-500 mb-4 group-hover:scale-120 transition-transform duration-500">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold mb-2 text-blue-700">
              {service.title}
            </h3>
            <p className="text-gray-600">{service.desc}</p>

            {/* Animated underline */}
            <span
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 
                         bg-gradient-to-r from-blue-500 to-cyan-400 
                         group-hover:w-2/3 transition-all duration-500 rounded-full"
            ></span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
