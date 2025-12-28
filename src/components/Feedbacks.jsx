import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { testimonials } from "../constants";

const Testimonials = () => {
  const cardsPerRow = 3;
  const [index, setIndex] = useState(0);

  const totalRows = Math.ceil(testimonials.length / cardsPerRow);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % totalRows);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + totalRows) % totalRows);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 8000);
    return () => clearInterval(interval);
  }, [index]);

  const currentCards = testimonials.slice(
    index * cardsPerRow,
    index * cardsPerRow + cardsPerRow
  );

  return (
    <section className="w-full min-h-screen bg-deep-space text-white py-24 px-6 sm:px-12 md:px-20 flex flex-col items-center justify-center overflow-x-hidden">
      {/* Section Heading */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <motion.h2 className="text-[clamp(2.8rem,5vw,4rem)] font-bold mb-6 tracking-tight text-gray-100">
          Our <span className="text-gray-500">Testimonials</span>
        </motion.h2>
        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          A reflection of <span className="text-secondary">trust</span>,
          collaboration, and <span className="text-secondary">client satisfaction</span>{" "}
          across every project we’ve built with passion.
        </p>
      </motion.div>

      {/* Stats Row */}
<motion.div
  className="flex flex-nowrap justify-center items-center gap-6 sm:gap-12 md:gap-16 mb-20 text-center overflow-x-auto no-scrollbar"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
>
  {[
    { value: "5+", label: "Years of experience" },
    { value: "50+", label: "Delievered projects" },
    { value: "30+", label: "Clients worldwide" },
  ].map((stat, i) => (
    <div key={i} className="flex flex-col min-w-[110px] sm:min-w-[130px]">
      <h3 className="text-3xl sm:text-5xl font-bold text-gray-100">
        {stat.value}
      </h3>
      <p className="text-gray-400 text-sm sm:text-base">{stat.label}</p>
    </div>
  ))}
</motion.div>


      {/* Testimonials Carousel */}
      <div className="relative w-full max-w-6xl">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition"
          aria-label="Previous testimonials"
        >
          <IoIosArrowBack size={36} />
        </button>

        {/* Cards */}
        <div className="overflow-hidden px-4 sm:px-8 md:px-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
            >
              {currentCards.map((t, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, y: -8 }}
                  transition={{ type: "spring", stiffness: 200, damping: 18 }}
                  className="group relative flex flex-col justify-between rounded-3xl p-8 min-h-[340px] bg-gradient-to-br from-[#1b1b25] via-[#1a1a25] to-[#202031]
            border border-[#2e2e3d] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.4)]
            hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.1)] hover:border-[#3f3f50]/50
            transition-all duration-500"
                >
                  {/* Subtle light reflection overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />

                  {/* Decorative thin top border glow */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#a0a0ff]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Quote */}
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed italic mb-8 relative z-10 flex-grow line-clamp-none">
                    “{t.testimonial}”
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center gap-4 relative z-10 mt-auto">
                    <div className="w-12 h-12 rounded-full bg-[#222230] flex items-center justify-center text-gray-300 text-lg font-semibold border border-gray-700/40 shadow-inner shadow-black/30">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-100 text-sm sm:text-base">
                        {t.name}
                      </p>
                      <p className="text-gray-500 text-xs sm:text-sm">
                        {t.designation}  {t.company}
                      </p>
                    </div>
                  </div>

                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition"
          aria-label="Next testimonials"
        >
          <IoIosArrowForward size={36} />
        </button>

        {/* ---------- Mobile: centered row under the cards (visible only on <sm) ---------- */}
        <div className="block sm:hidden w-full mt-6 flex justify-center">
          <div className="flex items-center gap-6">
            <button
              onClick={handlePrev}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1b1b25] border border-[#2d2d3a] text-gray-300 hover:text-white transition-shadow shadow-sm"
              aria-label="Previous testimonials"
            >
              <IoIosArrowBack size={20} />
            </button>

            <button
              onClick={handleNext}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1b1b25] border border-[#2d2d3a] text-gray-300 hover:text-white transition-shadow shadow-sm"
              aria-label="Next testimonials"
            >
              <IoIosArrowForward size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
