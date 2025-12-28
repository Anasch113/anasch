import React from "react";
import { motion } from "framer-motion";
import { experiences } from "../constants";
import { MdOutlineDateRange } from "react-icons/md";
import { PiPaperPlaneRightLight } from "react-icons/pi";

const NewExperience = () => {
  return (
    <div className="relative min-h-screen w-full second-bg-color text-white flex flex-col items-center justify-center py-24 px-5 overflow-hidden">

      {/* Section Title */}
      <motion.div
        className="relative z-10 max-w-4xl text-center mb-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <motion.h2
          className="text-[clamp(2.8rem,5vw,4rem)] font-bold mb-6 tracking-tight text-gray-100"
        >
          Experience
        </motion.h2>
        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
         <span className="text-secondary"> A proven record</span>  of delivering reliable, high-quality solutions through real-world projects and long-term   <span className="text-secondary">professional collaborations.</span> 
        </p>
      </motion.div>

      {/* Experience Cards */}
      <div className="w-full flex flex-col items-center gap-10 z-10">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            className="relative group w-full md:w-[70%] lg:w-[60%] rounded-2xl p-8 sm:p-10 backdrop-blur-md bg-white/[0.03] border border-white/10 hover:border-yellow-400/30 shadow-[0_0_25px_-8px_rgba(255,255,255,0.1)] transition-all duration-500"
          >
            {/* Top Yellow Border */}
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-t-2xl" />

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-4">
              <div className="flex items-center gap-3">
                <img
                  src={exp.icon}
                  alt={exp.company_name}
                  className="w-10 h-10 rounded-full bg-white/10 p-2 border border-white/10"
                />
                <div>
                  <p className="text-lg font-semibold text-white">
                    {exp.company_name}
                  </p>
                  <p className="text-xs text-gray-400">Remote</p>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-gray-300 text-gray-900 font-semibold px-3 py-1.5 rounded-full text-xs shadow-[0_0_15px_rgba(250,204,21,0.3)]">
                <MdOutlineDateRange size={16} />
                <p>{exp.date}</p>
              </div>
            </div>

            {/* Role Title */}
            <h3 className="text-2xl font-bold mb-5 text-secondary tracking-tight">
              {exp.title}
            </h3>

            {/* Points */}
            <div className="flex flex-col gap-3">
              {exp.points.map((point, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-2 text-gray-300 text-sm leading-relaxed"
                >
                  <PiPaperPlaneRightLight
                    className="text-yellow-400 mt-[3px]"
                    size={16}
                  />
                  <p>{point}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Soft Background Accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-yellow-500/5 blur-[160px] rounded-full" />
      </div>
    </div>
  );
};

export default NewExperience;
