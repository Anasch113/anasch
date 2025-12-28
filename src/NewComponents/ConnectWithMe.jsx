import React from "react";
import { motion } from "framer-motion";
import { socialLinks } from "../constants/index";

const ConnectWithMe = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center py-24 px-6 sm:px-12 md:px-20 overflow-hidden bg-deep-space text-white">
      {/* Section Heading */}
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <motion.h2 className="text-[clamp(2.8rem,5vw,4rem)] font-bold mb-4 tracking-tight text-gray-100">
          Let’s <span className="text-gray-500">Connect</span>
        </motion.h2>
        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          I’m <span className="text-secondary">always open</span>  to discussing new projects, creative ideas, or
          opportunities to be part of your visions.
          Let’s build something <span className="text-secondary">amazing</span> together.
        </p>
      </motion.div>

      {/* Social Links */}
      <motion.div
        className="w-full flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-7 mb-14"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {socialLinks.map((links, index) => (
          <motion.a
            href={links.link}
            target="_blank"
            key={`social-${index}`}
            whileHover={{ scale: 1.06, y: -4 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="group relative flex items-center justify-center gap-2 sm:gap-3 
                 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/10 backdrop-blur-sm 
                 border border-white/20 hover:bg-white/20 hover:border-white/40 
                 transition-all duration-300"
          >
            <img
              className="w-6 h-6 sm:w-9 sm:h-9 transition-transform duration-300 group-hover:rotate-6"
              src={links.icon}
              alt={links.name}
            />
            <p className="text-gray-100 font-semibold text-sm sm:text-lg tracking-wide group-hover:text-secondary transition-colors duration-300">
              {links.name}
            </p>
          </motion.a>
        ))}
      </motion.div>

      {/* Decorative / Illustration */}
      <motion.img
        src="/connectImage.svg"
        alt="Connect Illustration"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="w-full max-w-lg md:max-w-2xl object-contain pointer-events-none select-none"
      />


    </section>
  );
};

export default ConnectWithMe;
