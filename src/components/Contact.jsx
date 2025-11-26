"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
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
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_h2dnguh",
        "template_lwigsgk",
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
        "6w4SVYXj59ECt3KUR"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setForm({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen second-bg-color text-white flex items-center justify-center py-20 px-6 sm:px-10 lg:px-20"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* ---------- Left Section ---------- */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-4xl sm:text-5xl font-semibold text-white mb-4">
            Contact Us
          </h2>
          <p className="text-gray-400 text-lg mb-6 leading-relaxed">
            Whether you have a project in mind, a question, or just want to
            connect — feel free to reach out. We’d love to hear from you!
          </p>

          <div className="text-gray-300 space-y-2">
            <p>Email us directly:</p>
            <a
              href="mailto:anaschaudry2002@gmail.com"
              className="text-[#FDB827] hover:underline text-lg"
            >
              anaschaudry2002@gmail.com
            </a>
          </div>
        </motion.div>

        {/* ---------- Right Form Card ---------- */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full bg-[#181820]/80 border border-[#2c2c38] rounded-3xl shadow-[0_0_40px_-10px_rgba(255,255,255,0.1)] p-8 sm:p-10 backdrop-blur-lg"
        >
          <h3 className="text-2xl font-semibold mb-6 text-white">
            Get in Touch
          </h3>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="flex-1 bg-[#0E0E12] border border-[#2c2c38] rounded-xl py-3 px-5 outline-none text-white focus:border-[#FDB827]/70 transition"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="flex-1 bg-[#0E0E12] border border-[#2c2c38] rounded-xl py-3 px-5 outline-none text-white focus:border-[#FDB827]/70 transition"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="number"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="flex-1 bg-[#0E0E12] border border-[#2c2c38] rounded-xl py-3 px-5 outline-none text-white focus:border-[#FDB827]/70 transition"
              />
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="flex-1 bg-[#0E0E12] border border-[#2c2c38] rounded-xl py-3 px-5 outline-none text-white focus:border-[#FDB827]/70 transition"
              />
            </div>

            <textarea
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              placeholder="Type your message..."
              className="bg-[#0E0E12] border border-[#2c2c38] rounded-xl py-3 px-5 outline-none text-white focus:border-[#FDB827]/70 transition resize-none"
            ></textarea>

            <button
              type="submit"
              className="bg-[#FDB827] hover:bg-[#ffc94d] text-black font-semibold py-3 px-8 rounded-full transition-all flex items-center justify-center gap-2"
            >
              {loading ? "Sending..." : "Send Message"} <VscSend />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
