import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "", index)}
    className='bg-white  p-10 rounded-3xl xs:w-[320px] w-full '
  >
    <div className="w-full justify-center flex ">
      <span className='bg-tertiary flex flex-col  py-2 md:px-5 px-3 rounded-full md:w-72 w-48'>
        <p>{name}</p>

        <span className='flex flex-row w-full md:w-64'>
          <p className='text-white ml-2'>{designation} of</p>
          
          <p className='text-text-yellow ml-2'>{company}</p>

        </span>

      </span>
      {/* <img src={image}
        alt="image" className='md:w-12 md:h-12 h-8 w-8 rounded-full  '>

      </img> */}
    </div>

    <p className='text-gray-600 font-black text-[48px]'>"</p>

    <div className='mt-1'>
      <p className='text-primary tracking-wider text-[18px]'>{testimonial}</p>


    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12  bg-primary rounded-[20px]`}>
      <div
        className={`   rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");