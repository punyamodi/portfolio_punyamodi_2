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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
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
    title: "Technical Secretary",
    company_name: "Student Council IIIT Bhopal",
    icon: meta, // Replace with appropriate icon
    iconBg: "#383E56",
    date: "Aug 2024 - Present",
    points: [
      "Leading a team of developers and engineers to streamline technical initiatives and enhance student engagement.",
      "Organizing workshops, hackathons, and tech events, promoting technical learning and collaboration among students.",
      "Collaborating with various departments to improve campus-wide technical infrastructure and digital platforms.",
      "Managing cross-functional projects to improve the integration of student information systems and research platforms.",
    ],
  },
  {
    title: "Generative AI Intern",
    company_name: "Constituents AI",
    icon: meta, // Replace with appropriate icon
    iconBg: "#383E56",
    date: "Feb 2024 - March 2024",
    points: [
      "Designed and deployed advanced AI models, including Diffusion and LLMs, resulting in a 40% increase in content creation efficiency.",
      "Implemented web scraping techniques, automating data extraction and saving over 120 manual hours per month.",
      "Collaborated with cross-functional teams to integrate AI models into production workflows, reducing project turnaround time by 25%.",
      "Optimized model inference to minimize computational costs while maintaining high performance.",
    ],
  },
  {
    title: "Programming Engineer Intern",
    company_name: "OGES Solutions Pvt Ltd",
    icon: meta, // Replace with appropriate icon
    iconBg: "#E6DEDD",
    date: "Dec 2023 - Jan 2024",
    points: [
      "Enhanced route optimization software by implementing reinforcement learning and Genetic/ACO algorithms, improving performance by 75%.",
      "Developed a prototype software that predicted real-time driver risk by analyzing vehicle, environmental, and driver conditions.",
      "Conducted testing and debugging of complex software systems to ensure high reliability and accuracy.",
      "Worked closely with cross-functional teams to integrate risk prediction software with existing safety systems.",
    ],
  },
  {
    title: "Teaching Assistant",
    company_name: "IIIT Bhopal",
    icon: meta, // Replace with appropriate icon
    iconBg: "#383E56",
    date: "Jul 2023 - Dec 2023",
    points: [
      "Assisted in teaching the 'Fundamentals of Computer Programming' course, providing support to over 100 students.",
      "Facilitated lab sessions, helping students debug their code and understand programming concepts.",
      "Evaluated assignments, projects, and examinations, offering feedback to improve student learning outcomes.",
      "Conducted supplemental workshops on programming techniques and best practices.",
    ],
  },
  {
    title: "Machine Learning Developer",
    company_name: "Google Developer Student Club (GDSC) IIIT Bhopal",
    icon: meta, // Replace with appropriate icon
    iconBg: "#E6DEDD",
    date: "Sep 2023 - Jun 2024",
    points: [
      "Developed machine learning models to solve real-world problems, improving algorithm efficiency and performance.",
      "Collaborated with other developers to build AI-driven solutions for community-based projects.",
      "Participated in GDSC initiatives, including mentorship programs, workshops, and AI competitions.",
      "Contributed to open-source projects, helping scale AI solutions for broader applications.",
    ],
  },
];



const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
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
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
