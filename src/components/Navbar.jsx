import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { navLinks } from "../constants";
import { menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 70, damping: 15 }}
      className={`fixed top-0 left-0 w-full z-50 flex justify-center transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-black/40 border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      {/* Capsule Container */}
      <div className="relative flex items-center justify-center w-full max-w-3xl px-6 py-4">
        <div className="hidden sm:flex items-center justify-center gap-8 px-10 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-lg shadow-[0_0_15px_rgba(255,255,255,0.05)]">
          {/* Logo inside capsule */}
          <span className="text-secondary text-lg font-semibold tracking-wide font-[Inter]">
      {"<Anas />"}
          </span>

          {/* Nav Links */}
          <div className="flex gap-8">
            {navLinks.map((nav) => (
              <Link
                to={nav.id}
                key={nav.id}
                smooth={true}
                duration={500}
                onClick={() => setActive(nav.title)}
                className={`cursor-pointer text-[15px] font-medium transition-all duration-300 ${
                  active === nav.title
                    ? "text-white font-semibold"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {nav.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <motion.img
          whileTap={{ scale: 0.9 }}
          src={toggle ? close : menu}
          alt="menu"
          className="sm:hidden absolute right-6 w-[25px] h-[25px] cursor-pointer "
          onClick={() => setToggle(!toggle)}
        />
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {toggle && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="sm:hidden absolute top-16 left-5 right-5 bg-black/90 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-[0_0_20px_rgba(255,255,255,0.1)] "
          >
            <ul className="flex flex-col gap-5 text-center">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`text-[16px] font-medium cursor-pointer ${
                    active === nav.title
                      ? "text-white font-semibold"
                      : "text-gray-300 hover:text-white"
                  }`}
                  onClick={() => {
                    setActive(nav.title);
                    setToggle(false);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
