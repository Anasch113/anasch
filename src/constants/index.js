import {
  mobile,
  backend,
  creator,
  arcsports,
  iNoteCloud,
  web,
  javascript,

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


  ugc,

  fiverr,

  pgc,

  voiceup,

  threejs,
  codsoft,
  codeh7,
  netflix,
  edu1,
  webdesign,
  pgc1

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
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Full Stack Developer",
    icon: mobile,
  },
  {
    title: "Web Designer",
    icon: backend,
  },
  {
    title: "Wordpress Developer",
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
    title: "Full Stack Developer ",
    company_name: "fiverr",
    icon: fiverr,
    iconBg: "#383E56",
    date: "March 2021- Present",
    points: [

      "As a seasoned freelance Full Stack Developer with a strong Fiverr existence, I've had the pleasure of creating appealing digital experiences for clients all over the world.",
      " My journey has been distinguished by excellence in web development, since I have a passion for merging efficiency and performance .",
      "Over 3+ years, I've honed my skills in HTML5, CSS(Tailwind CSS, Bootstrap 5, SCSS), JavaScript (Reactjs, Nextjs, Nodejs ) to create powerfull and responsive applications.",
      " Each project on Fiverr has been an opportunity to showcase my dedication to delivering pixel-perfect, user-friendly applications that exceed client expectations."
    ],
  },
  // {
  //   title: "Full Stack Developer",
  //   company_name: "PGC",
  //   icon: pgc,
  //   iconBg: "#383E56",
  //   date: "Jan 2021 - present",
  //   points: [
  //     "PGC-HUB, a full-fledged web application, was created by me at PGC. I am in charge of maintaining and updating this website. In addition, I use my skill set to create new online applications. This is the platform that allows me to improve my talents and gain market experience.",


  //   ],
  // },
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
    title: "Full stack Developer",
    company_name: "CodSoft India",
    icon: codsoft,
    iconBg: "#E6DEDD",
    date: "june 2023 - September 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Anas has the ability to convert the ideas into reality with his excellent development skills",
    name: "Prof. Allah Nawaz",
    designation: "GM",
    company: "PGC",
    image: pgc,
  },
  {
    testimonial:
      "During the whole contract, We found Anas consistent and hardworking. We wish to work with him in future",
    name: "Mr Sandip Govit",
    designation: "Founder",
    company: "Techno Hacks Official",
    image: "https://media.licdn.com/dms/image/D5603AQHFnlmXbgX7xQ/profile-displayphoto-shrink_800_800/0/1672054915990?e=1700697600&v=beta&t=Lixk8NYqq42kjF6JfnNGN7EvUV1shGLb-n4X5YgTcS8",
  },
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
    name: "PGC-HUB",
    description:
      "PGC HUB is an online educational and student management platform made by only me. This website is full full-fledged backend website that contains many awesome features. It also has an attractive GUI and is responsive",
      techs: [
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
  
      ],
    image: pgc1,
    source_code_link: "https://github.com/Anasch113/CODSOFT/tree/main/pgc-hub-project",
    bgColor: 'bg-blue-500',
  },
 
  
  {
    name: "EduTech",
    description:
      "A beautiful modern animated landing page made from Bootstrap 5, Jquery in addition to HTML, CSS and javascript.",
    techs: [
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
        name: "Figma",
        icon: figma,
      },

    ],
    image: edu1,
    source_code_link: "https://github.com/Anasch113/TechnoHacks-Intern/tree/main/Registration-Form/src",
    bgColor: 'bg-blue-400',
  },
  
  
  {
    name: "Shopix",
    description:
      "A modern full dynamic e-commerce application that holds all the functionalities of e-commerce website.",
      techs: [
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
          name: "Nodejs",
          icon: nodejs,
        },
        {
          name: "Tailwind CSS",
          icon: tailwind,
        },
  
      ],
    image: webdesign,
    source_code_link: "https://github.com/Anasch113/Shopix.Mern.client",
    bgColor: 'bg-purple-700',
  },
 
  {
    name: "iNoteCloud",
    description:
      "MERN Stack application in which user can create account and then add, edit, delete and save notes in it's own account. ",
    techs: [
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

    ],
    image: iNoteCloud,
    source_code_link: "https://github.com/Anasch113/Shopix.Mern.client",
    bgColor: 'bg-gray-200',
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



export { services, technologies, experiences, testimonials, projects, socialLinks };