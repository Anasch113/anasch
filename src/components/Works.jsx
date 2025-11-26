import React from "react";
import { motion } from "framer-motion";
import { IoIosLink } from "react-icons/io";
import { projects } from "../constants/projects";

const Works = () => {
  return (
    <section
      id="work"
      className="w-full min-h-screen bg-deep-space text-white py-24 px-6 sm:px-12 md:px-20 flex flex-col gap-24"
    >
      {/* Section Heading */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <motion.h2 className="text-[clamp(2.8rem,5vw,4rem)] font-bold mb-6 tracking-tight text-gray-100">
          our Selected <span className="text-gray-500">Works</span>
        </motion.h2>
        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          A journey of learning, <span className="text-secondary">building,</span> and growing through{" "}
          <span className="text-secondary">real-world projects</span> and professional collaborations.
        </p>
      </motion.div>

      {/* Projects List */}
      <div className="flex flex-col gap-32">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 md:gap-16"
          >
            {/* Left Side — Number */}
            <div className="flex items-center justify-center md:justify-start w-full md:w-[20%]">
              <div className="flex items-center gap-1">
                <h1 className="text-[4rem] sm:text-[6rem] font-extrabold text-gray-300 leading-none">
                  {String(index + 1).padStart(2, "0")}
                </h1>
                <span className="text-yellow-400 text-4xl font-bold leading-none">
                  .
                </span>
              </div>
            </div>

            {/* Right Side — Project Details */}
            <div className="flex flex-col justify-center w-full md:w-[75%] max-w-3xl">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-[300px] object-top rounded-2xl mb-6 border border-white/10 shadow-[0_0_40px_-10px_rgba(255,255,255,0.1)]"
              />

              <div className="flex flex-col gap-2">

                <h3 className="text-2xl sm:text-3xl font-semibold text-secondary">
                  {project.name}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
                  {project.description.slice(0, 150)}...
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.techs?.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full border border-white/20 text-gray-300 bg-white/5"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>

                <a
                  href={project.visit_link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-yellow-400 text-sm font-medium hover:text-yellow-300 transition"
                >
                  <IoIosLink size={18} /> Visit Project
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Works;
