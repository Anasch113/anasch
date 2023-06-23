import {
    mobile,
    backend,
    creator,
    arcsports,
    iNoteCloud,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    ugc,
    shopix,
    shopify,
 fiverr,
    carrent,
    pgc,
    upwork,
    voiceup,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
  } from "react-icons/fa";
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "MERN Stack Developer",
      icon: mobile,
    },
    {
      title: "Web Designer",
      icon: backend,
    },
    {
      title: "Data Manager",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
   
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "MERN Stack Developer",
      company_name: "fiverr",
      icon: fiverr,
      iconBg: "#383E56",
      date: "March 2021- Present",
      points: [
       
        "As a freelance MERN stack developer, my role is to create dynamic and interactive web applications using a combination of technologies including MongoDB, Express.js, React, and Node.js. I possess a diverse skill set that enables me to handle both the frontend and backend aspects of web development, allowing me to build full-stack applications independently.",
        "Participating in client's development team and discuss project's keypoints to ensure best result",
      ],
    },
    {
      title: "Frontend Developer",
      company_name: "Scale It More",
      icon: "https://scaleitmore.in/wp-content/uploads/2022/12/cropped-Untitled_design__9_-removebg-preview.png",
      iconBg: "#E6DEDD",
      date: "May 2023 - July 2023",
      points: [
        "Developing and maintaining web applications using front-end libraries and other related technologies.",
        ,

        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers."
       
      ],
    },
    {
      title: "Full Stack Web Developer",
      company_name: "PGC",
      icon: pgc,
      iconBg: "#383E56",
      date: "Jan 2021 - present",
      points: [
        "Developing and maintaining web applications using React.js, Nodejs with CMS system like Strapi and payment gateway like Stripe and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Anas has the ability to convert the ideas into reality with his excellent development skills",
      name: "Pr. Allah Nawaz",
      designation: "GM",
      company: "PGC",
      image: pgc,
    },
    // {
    //   testimonial:
    //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
    //   name: "Chris Brown",
    //   designation: "COO",
    //   company: "DEF Corp",
    //   image: "https://randomuser.me/api/portraits/men/5.jpg",
    // },
    // {
    //   testimonial:
    //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    //   name: "Lisa Wang",
    //   designation: "CTO",
    //   company: "456 Enterprises",
    //   image: "https://randomuser.me/api/portraits/women/6.jpg",
    // },
  ];
  
  const projects = [
    {
      name: "UGC Hub",
      description:
        "I converted this figma design into code and make it a functional website using MERN technology. This application enables the user to generate content",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: ugc,
      source_code_link: "https://github.com/Anasch113/UGChub",
    },
    {
      name: "Voice Up",
      description:
        "Web application that enables users to search for news of all types of categories on daily basis using News api",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: voiceup,
      source_code_link: "https://github.com/Anasch113/VoiceUp-React",
    },
    {
      name: "Shopix",
      description:
        "A modern full dynamic e-commerce application that holds all the functionalities of e-commerce website.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: shopix,
      source_code_link: "https://github.com/Anasch113/Shopix.Mern.client",
    },
    {
      name: "ARC Sports",
      description:
        "A modern sports website that allows user to watch their favourite sports events and keeps up to date with them",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: arcsports,
      source_code_link: "https://github.com/Anasch113/arcsports",
    },
    {
      name: "iNoteCloud",
      description:
        "MERN Stack application in which user can create account and then add, edit, delete and save notes in this account. A user can only access the notes through correct passowrd and email address" ,
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: iNoteCloud,
      source_code_link: "https://github.com/Anasch113/Shopix.Mern.client",
    }
  ];

  const socialLinks = [
    {
      image: FaLinkedinIn,
      source_code_link: "https://chat.openai.com/"
    },
    {
      image: FaTwitter,
      source_code_link: "https://www.canva.com/"

    },
    {
      image: FaInstagram,
      source_code_link: "https://github.com/Anasch113"
    }
  ]
    
  
  
  export { services, technologies, experiences, testimonials, projects,socialLinks };