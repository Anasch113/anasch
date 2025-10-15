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
    className='bg-white  p-6 rounded-3xl md:h-[400px] xs:w-[320px] w-full '
  >
    <div className="w-full justify-center flex ">
      <span className=' text-tertiary flex items-center justify-center flex-col   md:px-5 px-3 rounded-full   w-48'>
        <p className="text-center font-bold text-xl">{name}</p>

        <span className='flex flex-row gap-1 w-full justify-center  text-sm md:w-64 '>
          <p className='text-gray-500   '>{designation}</p>
        
          <p className='text-gray-500   '>{company}</p>

        </span>

      </span>
     
    </div>

    <p className='text-gray-600 font-black text-[48px]'>"</p>

    <div className='mt-1'>
      <p className='text-primary  text-[18px] text-base '>{testimonial}</p>


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