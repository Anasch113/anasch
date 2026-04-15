import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { BackgroundBeams } from "./ui/background-beams";
import Anas from "../assets/Profile pic/Anas.jpeg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-start px-6 sm:px-16 lg:px-28 bg-deep-space text-white overflow-hidden sm:py-0 py-10">
      {/* Background Beams */}
      <div className="absolute inset-0 z-0">
        <BackgroundBeams />
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 max-w-6xl text-left space-y-4"
      >
        {/* Profile Image */}
        <div className="w-32 h-32 rounded-full overflow-hidden border border-white/20 shadow-[0_0_25px_rgba(255,255,255,0.08)] mb-6">
          <img
            src={Anas}
            alt="Profile"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        {/* Heading*/}
        <h1 className="text-4xl sm:text-5xl font-semibold leading-snug text-gray-100">
          Hi, I’m <span className="text-secondary">Anas Rafiq</span> , Software Developer and AI expert
        </h1>

        {/* Subtext */}
        <p className="text-gray-400 text-base sm:text-lg w-full leading-relaxed">
          I’m a freelance developer and designer working globally.
         I help businesses and founders turn ideas into reliable, scalable, and well-crafted digital products. My work focuses on clean execution, long-term performance, and delivering solutions that create real value for users and clients alike.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mt-6">

          <Link
            to="contact"
            smooth={true}
            duration={600}
            className="px-6 py-3 rounded-full text-sm font-semibold text-gray-100 bg-[#0d0d0d] border border-white/10 hover:bg-white/5 transition-all duration-300 cursor-pointer"
          >
            Get in touch
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
