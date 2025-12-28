"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.2 1"],
  });

  // // Parallax text movement
  const y = useTransform(scrollYProgress, [0, 1], ["20%", "0%"]);
  // const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={ref}
      id="about"
      className="relative w-full second-bg-color flex flex-col overflow-hidden text-gray-200 py-16 sm:py-20"
    >


      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 flex flex-col items-start">
        {/* Heading */}
        <motion.h2
          style={{ y }}
         className="text-[clamp(2.5rem,5vw,4rem)] font-bold mb-6 sm:mb-8 text-white tracking-tight leading-tight"
        >
          Who Am I <span className="text-gray-500">?</span>
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          style={{  y }}
          className="text-[1.15rem] leading-relaxed text-gray-400 max-w-4xl mb-10 sm:mb-12 font-light"
        >
          I’m <span className="text-secondary font-medium">Anas Rafiq</span>, a
          <span className="text-secondary font-medium"> Full-Stack Developer and AI Specialist</span> focused on building modern, scalable, and production-ready digital products. I combine strong engineering practices with modern frontend design, backend development and advanced AI to help businesses turn ideas into reliable solutions.
          <br /> <br />
          I’ve delivered enterprise-grade SaaS platforms, AI-driven systems, and custom applications across industries such as education, healthcare, legal, and enterprise operations. My work emphasizes clean architecture, performance, usability, and long-term scalability.
          <br /> <br />
          My core toolkit includes   <span className="font-semibold text-gray-400">
    React, Next.js, Node.js, JavaScript, Python, cloud platforms, and advanced AI
    systems such as fine-tuned models, RAG pipelines, and real-time AI integrations.
  </span>
          <br /> <br />
          I also lead a skilled team, allowing me to take ownership of projects end-to-end. Clients work with me as a technical partner, trusting me to understand their goals and deliver high-quality, future-proof solutions.
        </motion.p>

        {/* Soft motion line + signature style text */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="h-[1px] bg-gray-700 mb-8"
        ></motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg font-light text-secondary tracking-wider"
        >
          Code. Create. Inspire.
        </motion.div>
      </div>
    </section>
  );
}
