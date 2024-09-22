import {
  mobile,
  backend,
  creator,
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
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

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
    title: "Web3 & Web2 Developer",
    icon: web,
  },
  {
    title: "Marketing Strategist",
    icon: mobile,
  },
  {
    title: "Project Management",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "TypeScript",
    icon: typescript,
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
    title: "Project Manager",
    company_name: "C2E Dev",

    date: "November 2023 - February 2024",
    points: [
      "I worked in Company Management as an Executive Member and Project Manager, successfully overseeing the completion of two projects based on WordPress.",
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //    ,
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     ,
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     ,
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Sahil proved me wrong.",
    name: "",
    designation: "",
    company: "",
    image: "",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Sahil does.",
    name: "",
    designation: "",
    company: "",
    image: "",
  },
  {
    testimonial:
      "After Sahil optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "",
    designation: "",
    company: "",
    image: "",
  },
];

const projects = [
 
  {
    name: "CrowdFunding dapp",
    description:
      "Developing a Web3 dapp where people can create campaigns and Recieve crowdfundings in form of cryptocurrency.",
    tags: [
      {
        name: "Solidity",
        color: "blue-text-gradient",
      },
      {
        name: "MERN",
        color: "green-text-gradient",
      },
      {
        name: "thirdweb",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Advanced Computer Vision",
    description:
      "A comprehensive Project demonstrating the usage of Advanced Computer Vision Library including Machine Learning.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "MediaPipe",
        color: "green-text-gradient",
      },
      {
        name: "CVlibrary",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Full Stack Project With AI Integration",
    description:
      " Advanced full-stack Next.js application for anonymous feedback, utilizing AI to provide insightful feedback suggestions. Implementing a custom authentication system with JWT tokens, sessions, and AuthJS for enhanced security.",
    tags: [
      {
        name: "react & NextJs",
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
    image: carrent,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
