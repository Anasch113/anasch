"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            
          )}
        />
      </motion.div>
    </motion.div>
  );
}

export function BackgroundBeams({
  className,
}) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <div
      className={cn(
        "absolute inset-0 w-full h-full overflow-hidden ",
        className
      )}
    >

      {/* Floating Elegant Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Deep violet glow - left side */}
        <ElegantShape
          delay={0.3}
          width={200}
          height={400}
          rotate={20}
          gradient="from-[#43454a1a] via-[#6B72801A] to-[#3132361a]"
          className="left-[-20%] sm:left-[-3%] top-[30%] sm:top-[25%] scale-[0.5] sm:scale-[0.75] md:scale-100 "
        />

        {/* Magenta-pink accent - bottom right */}
        <ElegantShape
          delay={0.5}
          width={500}
          height={300}
          rotate={-12}
          gradient="from-[#43454a1a] via-[#6B72801A] to-[#3132361a]"
          className="right-[-20%] sm:right-[-5%] top-[75%] sm:top-[65%] scale-[0.45] sm:scale-[0.7] md:scale-100"
        />

        {/* Electric blue highlight - top right */}
        <ElegantShape
          delay={0.6}
          width={300}
          height={160}
          rotate={25}
          gradient="from-[#43454a1a] via-[#6B72801A] to-[#3132361a]"
          className="right-[5%] sm:right-[12%] top-[5%] sm:top-[-5%] scale-[0.4] sm:scale-[0.7] md:scale-100"
        />

        {/* Cyan glow - top left small */}
        <ElegantShape
          delay={0.7}
          width={160}
          height={70}
          rotate={-25}
          gradient="from-[#43454a1a] via-[#6B72801A] to-[#3132361a]"
          className="left-[15%] sm:left-[22%] top-[10%] sm:top-[12%] scale-[0.4] sm:scale-[0.6] md:scale-100"
        />
      </div>




    </div>
  );
}
