import { motion } from "framer-motion";
import "../components/Hero.css"
import { styles } from "../styles";

const Hero = () => {

  return (
    <div className={` w-full h-screen flex `}>
      


        <div className="flex w-full h-full items-center justify-center  flex-col">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#FDB827]'>Anas</span>
          </h1>
          
            <div className="flex items-center flex-col py-2 gap-2">
              <p className="text-2xl"> A Full Stack Web Developer</p>
              <p className="text-lg">with <span className="glass-button">2.5+ years</span> of Experience</p>
             <div className="flex gap-4">

             <button className="px-5 py-2 mt-5 rounded-full text-text-yellow border-2 border-fourth">Resume</button>
             <button className="px-5 py-2 mt-5 rounded-full font-medium bg-fourth text-black">Hire Me</button>
          

             </div>
           
              </div>
      
      </div>

    </div>
  );
};

export default Hero;


// <p className={`${styles.heroSubText} mt-2 text-white-100`}>
// I develop project ideas, user <br className='sm:block hidden' />
// interfaces and web applications
// </p>