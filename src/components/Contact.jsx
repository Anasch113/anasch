import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";

import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { VscSend } from "react-icons/vsc";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);


    emailjs.send(
      'service_h2dnguh',
      'template_lwigsgk',
      {
        from_name: form.name,
        to_name: "Anas Ch",
        from_email: form.email,
        to_email: "anaschaudry2002@gmail.com",
        message: `
        Email: ${form.email}
        Phone: ${form.phone},
        Subject: ${form.subject},
        Message: ${form.message}`,
      },
      '6w4SVYXj59ECt3KUR'
    )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden items-center justify-center px-2`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='md:flex-[0.75] w-full bg-white p-8 rounded-3xl justify-center '
      >

        <p className="sm:text-[18px] text-[14px] text-gray-dark uppercase tracking-wider">Get in touch</p>
        <h3 className="text-gray-dark font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 relative flex flex-col gap-8 w-full'
        >

          <div className="flex md:flex-row flex-col w-full gap-2">
            <label className='flex flex-col md:w-2/4 w-full'>
              <span className='text-black-100 font-medium mb-4'>Your Email</span>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email address?"
                className='bg-white-100 border py-4 px-6 placeholder:text-gray-500 text-black-100 rounded-full outline-none  font-medium'
              />
            </label>
            <label className='flex flex-col md:w-2/4 w-full'>
              <span className='text-black-100 font-medium mb-4'>Your name</span>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className='bg-white-100 border py-4 px-6 placeholder:text-gray-500 text-black-100 rounded-full outline-none  font-medium'
              />
            </label>
          </div>


          <div className="flex md:flex-row flex-col w-full gap-2">
            <label className='flex flex-col md:w-2/4 w-full'>
              <span className='text-black-100 font-medium mb-4'>Mobile Number</span>
              <input
                type='number'
                name='phone'
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className='bg-white-100 border py-4 px-6 placeholder:text-gray-500 text-black-100 rounded-full outline-none  font-medium'
              />
            </label>
            <label className='flex flex-col md:w-2/4 w-full'>
              <span className='text-black-100 font-medium mb-4'>Subject</span>
              <input
                type='text'
                name='subject'
                value={form.subject}
                onChange={handleChange}
                placeholder="Subject"
                className='bg-white-100 border py-4 px-6 placeholder:text-gray-500 text-black-100 rounded-full outline-none  font-medium'
              />
            </label>
          </div>

          <label className='flex flex-col'>
            <span className='text-black-100 font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-white-100 py-4 px-6 placeholder:text-grayy text-black-100 rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-[#FDB827] py-3 px-8 rounded-3xl outline-none w-fit text-black-100 font-semibold  shadow-primary'
          >
            <span className="flex items-center text-lg gap-2">

              {loading ? "Sending..." : "Send"}
              <VscSend />
            </span>

          </button>
        </form>
        <div className="absolute md:top-[580px] max-[1000px]:hidden md:left-[600px]  z-50 ">
          <img className="md:w-60 md:h-60" src="/3d-laptop-boy.png" alt="" />
        </div>

      </motion.div>


    </div>
  );
};

export default SectionWrapper(Contact, "contact");