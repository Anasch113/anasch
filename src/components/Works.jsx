import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants/projects"
import { fadeIn, textVariant } from "../utils/motion";
import { IoIosLink } from "react-icons/io";
import { BsInfoLg } from "react-icons/bs";
import { useState } from "react";


const ProjectCard = ({
  index,
  name,
  description,
  techs,
  image,
  visit_link,
  bgColor,
  worksOn
}) => {

  const [showBox, setShowBox] = useState(false);

  return (
    <div >
      <div
        // options={{
        //   max: 45,
        //   scale: 1,
        //   speed: 450,
        // }}
        className={`flex gap-5 ${bgColor} p-5 rounded-2xl  w-full md:min-h-[400px] md:flex-row flex-col`}
      >

        {/* 1st part */}
        <div className='flex items-center relative p-3  md:h-[400px] rounded-2xl'>
          <div className=" md:w-[500px] md:h-[320px] h-[200px] z-0">
            <img
              src={image}
              alt='project_image'
              className=' object-cover rounded-2xl '
              style={{ width: '100%', height: '100%' }}
            />

            {/* <div className="absolute inset-0 bg-gray-300 opacity-50 -z-10 rounded-2xl"></div> */}
          </div>

          {/* Overlay */}



        </div>

        {/* 2nd part */}
        <div className="relative p-3 flex flex-col gap-5">

          <div className='mt-5'>
            <h3 className='text-white font-bold text-3xl'>{name}</h3>
            {/* <p className='mt-2 text-white text-[14px]'>{description}</p> */}
            <span className="flex flex-col gap-3 p-3">
              <p className="my-1 font-md ">Worked on</p>

              <div className="flex gap-2 flex-wrap font-roboto">{worksOn.map((feature, i) =>
                <button className="glass-button-3" key={i} >{feature}</button>
              )}</div>
            </span>

          </div>
          {/* Info div */}
          <div className="absolute inset-0 flex justify-end "
          >
            <span
              onMouseEnter={() => setShowBox(true)}
              onMouseLeave={() => setShowBox(false)}
              className="flex items-center text-2xl w-10 h-10 bg-white p-3 rounded-full text-black"
            >
              <BsInfoLg size={30} />
            </span>
            {showBox && (
              <div className="info-box">
                {/* Your text content goes here */}
                {description}
              </div>
            )}
          </div>

          <p className="my-1 font-md ">Skills I Used</p>
          <div className='w-full flex-wrap   flex  p-1 gap-4  '>


            {
              techs.map((tech, index) => (
                <span key={index} className='flex items-center justify-center md:gap-3 gap-1  px-5 py-1 rounded-full bg-white '>
                  <img className='md:w-10 md:h-10  h-8 w-8' src={tech.icon} alt="html" />
                  <p className='text-black-100 font-semibold  '>{tech.name}</p>
                </span>
              ))
            }

          </div>
          <a href={visit_link} target="_main" className="glass-button-2">
            <span className="w-full flex items-center justify-center gap-2">
              <IoIosLink />
              <p>Go To {name}</p>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

const Works = () => {
  return (
    <>
      <div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </div>

      <div className='w-full flex'>
        <div
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </div>
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