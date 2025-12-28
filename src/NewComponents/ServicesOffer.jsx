"use client";
import { motion } from "framer-motion";

import { services } from "../constants";
export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative w-full bg-deep-space text-gray-200 py-24"
    >
      <div className="max-w-6xl mx-auto px-8">
       {/* Heading */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="mb-16 text-center flex flex-col items-center"
>
  <h2 className="text-[clamp(2.2rem,4vw,3.4rem)] font-bold text-white tracking-tight">
    Services <span className="text-gray-500">I Offer</span>
  </h2>

  <p className="mt-4 max-w-2xl text-gray-400 text-base leading-relaxed mx-auto">
   <span className="text-secondary">Expert-level</span> development services covering modern web, AI, and <span className="text-secondary">scalable</span> system architecture.
  </p>
</motion.div>


        {/* Services Grid */}
       {/* Services Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
  {services.map((service, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className="group relative border border-white/10 rounded-2xl 
                 px-8 py-10 
                 bg-white/[0.02] backdrop-blur-md
                 hover:border-secondary/40
                 transition-all duration-300"
    >
      {/* Index (subtle) */}
      <span className="absolute top-6 right-6 text-sm text-gray-600 font-light">
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Title */}
      <h3 className="text-lg sm:text-xl font-medium text-gray-100 tracking-tight 
                     group-hover:text-secondary transition-colors duration-300">
        {service.title}
      </h3>

      {/* Bottom accent */}
      <span className="absolute bottom-0 left-8 h-[2px] w-10 bg-secondary/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  ))}
</div>

      </div>
    </section>
  );
}
