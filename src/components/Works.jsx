import React from "react";
import { motion } from "framer-motion";
import { IoIosLink } from "react-icons/io";
import { projects } from "../constants/projects";
import { SmallProjects } from "../constants/SmallProjects";
const Works = () => {
  return (
    <section
      id="work"
      className="w-full min-h-screen second-bg-color text-white py-24 px-6 sm:px-12 md:px-20 flex flex-col gap-24"
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
          A curated selection of <span className="text-secondary">real-world projects</span> showcasing<span className="text-secondary"> scalable architecture</span>, clean design, and production-ready solutions.
        </p>
      </motion.div>

      {/* Projects List */}
      <div className="flex flex-col gap-32">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
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
            <div className="flex flex-col justify-center w-full md:w-[45%] max-w-3xl">
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
                  {project.description}
                </p>

                {/* <a
                  href={project.visit_link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-yellow-400 text-sm font-medium hover:text-yellow-300 transition"
                >
                  <IoIosLink size={18} /> Visit Project
                </a> */}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Small Projects Section */}
      {/* Small Projects Section Heading */}
      <motion.div
        className="flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2 className="max-w-3xl text-[clamp(1.6rem,3.2vw,2.4rem)] font-semibold tracking-tight text-gray-200 leading-tight">
          Innovative Mini Projects <span className="text-gray-500">& Specialized Builds</span>
        </motion.h2>

        {/* subtle divider */}
        <span className="mt-4 h-[2px] w-16 bg-yellow-400/60 rounded-full" />
      </motion.div>

      {/* Small Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pt-10">
        {SmallProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative flex flex-col items-center text-center rounded-2xl p-6 bg-white/5 border border-white/10 hover:border-yellow-400/30 backdrop-blur-md shadow-[0_0_25px_-10px_rgba(255,255,255,0.1)] transition-all"
          >
            {/* Project Icon */}
            <div className="text-yellow-400 text-4xl mb-4">
              {project.icon ? project.icon : "🛠️"} {/* Default icon if none */}
            </div>

            {/* Project Name */}
            <h3 className="text-lg sm:text-xl font-semibold text-secondary mb-2">
              {project.name}
            </h3>

            {/* Project Description */}
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              {project.description}
            </p>
          </motion.div>
        ))}
      </div>


    </section>
  );
};

export default Works;
