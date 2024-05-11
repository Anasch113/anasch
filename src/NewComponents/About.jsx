import React from "react";
import {Tilt} from 'react-tilt'
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full  p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-grayy rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
       A passionate full stack web developer with over 2.5+ years of experience in crafting the web solutions for online business. My expertise lies in leveraging cutting-edge technologies like ReactJS, Nextjs, NodeJS, ExpressJS and various third party API integrations like OpenAPI, REST Api, Web Api, AssemblyAI, PayPal & Stripe integartions etc. I am proficient in implementing responsive and mobile-first design principles using CSS frameworks like Tailwind CSS. In addition, I am also known to write clean and well structure code to enhance the overall maintainablity of projects. Using web servers like Nginx, I can deploy full stack apps on Virtual Private Servers (VPS) as part of my production expertise. Moreover I developed many Marketplace Solutions like Captify, SoundTik, CicadaAI, Sita Awards, EHR African Pathway and Celebrity Sprinter, I'm devoted to push the limits of web development in order to produce exceptional digital solutions.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");