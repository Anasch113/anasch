import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  techs,
  image,
  source_code_link,
  bgColor
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className={`flex gap-5 ${bgColor} p-5 rounded-2xl sm:w-full w-full sm:min-h-[400px]`}
      >

        {/* 1st part */}
        <div className='flex items-center relative p-3  h-[400px] rounded-2xl'>
          <div className=" w-[500px] h-[320px] z-0">
            <img
              src={image}
              alt='project_image'
              className=' object-cover rounded-2xl '
              style={{ width: '100%', height: '100%' }}
            />
          </div>

 {/* Overlay */}
 <div className="absolute inset-0 bg-gray-300 opacity-50 -z-10 rounded-2xl"></div>


          <div className='absolute inset-0 flex  m-3 card-img_hover z'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>


        {/* 2nd part */}
        <div className="p-3 flex flex-col gap-5">

          <div className='mt-5'>
            <h3 className='text-white font-bold text-[24px]'>{name}</h3>
            <p className='mt-2 text-white text-[14px]'>{description}</p>
          </div>

          <div className='w-full flex flex-wrap p-2 gap-4  '>


            {
              techs.map((tech, index) => (
                <span key={index} className='flex items-center justify-center gap-3  px-5 py-1 rounded-full bg-white '>
                  <img className='w-8 h-10' src={tech.icon} alt="html" />
                  <p className='text-black-100 font-semibold  '>{tech.name}</p>
                </span>
              ))
            }

          </div>
          <button className="glass-button-2">Visit</button>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-white text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-col gap-7 w-full'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");