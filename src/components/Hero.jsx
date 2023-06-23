import { motion } from "framer-motion";
import "./Hero.css"
import { styles } from "../styles";
import github from "../assets/github.png"
import { ComputersCanvas } from "./canvas";
import resume from "../assets/anasch.pdf"
import { Link } from "react-router-dom";
const Hero = () => {
 
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[180px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Anas</span>
          </h1>
          <div class="wrapper">
    <div class="static-txt">I build</div>
    <ul class="dynamic-txts">
      <li><span>Web Ideas</span></li>
      <li><span>User Interfaces</span></li>
      <li><span>Dynamic Websites</span></li>
      <li><span>Creative Designs</span></li>
    </ul>
  </div>
        </div>
      </div>

      {/* <ComputersCanvas /> */}
  
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
     
    </section>
  );
};

export default Hero;


// <p className={`${styles.heroSubText} mt-2 text-white-100`}>
// I develop project ideas, user <br className='sm:block hidden' />
// interfaces and web applications
// </p>