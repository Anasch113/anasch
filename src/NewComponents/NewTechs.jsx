import React from "react";
import { motion } from "framer-motion";
import { technologies } from "../constants";

const NewTechs = () => {
  return (
    <section className="relative overflow-hidden min-h-screen w-full flex flex-col items-center justify-center py-32 px-6 second-bg-color text-white">

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
          Technologies I <span className="text-gray-500">Use</span>
        </motion.h2>
        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          A journey of learning, <span className="text-secondary">building,</span>  and growing through <span className="text-secondary"> real-world projects </span> and professional collaborations.
        </p>
      </motion.div>

      {/* Tech Capsules Grid */}
      <div className="relative flex flex-wrap justify-center gap-4 sm:gap-6 max-w-5xl z-10 ">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="group relative flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/10 hover:border-purple-400/40 rounded-full backdrop-blur-lg px-2 sm:px-4 py-1 sm:py-2  shadow-[0_0_25px_-8px_rgba(255,255,255,0.15)] transition-all duration-300 cursor-pointer"
          >
            {/* Subtle glowing gradient on hover */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 blur-lg transition-all duration-700"></div>

            <motion.img
              src={tech.icon}
              alt={tech.name}
              className="w-6 sm:w-8 h-6 sm:h-8 object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] z-10"
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 200 }}
            />

            <p className="text-xs sm:text-base font-semibold text-gray-200 group-hover:text-white z-10">
              {tech.name}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Floating 3D Ring Effect */}
      <motion.div
        className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full border border-white/5 blur-3xl"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </section>
  );
};

export default NewTechs;
