// Contains constant data for using in website
// ! Don't remove anything from here if not sure

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
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  user1,
  user2,
  user3,
  youtube,
  linkedin,
  twitter,
  github,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
  {
    id: "source-code",
    title: "Source Code",
    link: "https://github.com/Abh1nav004/3D_Portfolio",
  },
] as const;

// Services
export const SERVICES = [
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
] as const;

// Technologies
export const TECHNOLOGIES = [
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
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "SIH Finalist",
    company_name: "Smart India Hackathon",
    icon: starbucks,
    iconBg: "#383E56",
    date: "August 2023",
    points:[
      "Selected as a finalist among thousands of participants in a national-level innovation challenge.",
      "Built a prototype web solution to solve a real-world problem proposed by government bodies.",
      "Worked under tight deadlines to develop a scalable, React-based application with backend integration.",
      "Collaborated with a multidisciplinary team to pitch, iterate, and present the final product to industry experts.",
    ],
  },
  {
    title: "1st Runner Up in Hackathon",
    company_name: "CrackHack",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2023",
    points:[
      "Secured 1st Runner Up position in an international hackathon sponsored by Tesla.",
      "Developed an innovative solution focused on sustainable mobility using cutting-edge web technologies.",
      "Led the frontend development using React.js while integrating with APIs and real-time data systems.",
      "Presented the project to a panel of engineers and received commendation for UI/UX and functionality.",
    ],
  },
  {
    title: "Certifications",
    company_name: "Coursera and Udemy",
    icon: shopify,
    iconBg: "#383E56",
    date: "2025",
    points: [
      "Completed over 10 professional courses on React.js, Node.js, and full-stack development.",
      "Earned certifications in advanced frontend frameworks and modern web architecture.",
      "Built multiple portfolio projects as part of course requirements, simulating real-world scenarios.",
      "Stayed up-to-date with the latest industry trends and best practices in web development.",
    ],
  },
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Abhinav proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: user1,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Abhinav does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: user2,
  },
  {
    testimonial:
      "After Abhinav optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: user3,
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "EliteCare",
    description:
      "A comprehensive healthcare platform built to streamline patient management, doctor coordination, and medical record handling. With a secure backend and intuitive UI, EliteCare improves efficiency in clinics and hospitals, ensuring patients receive the care they deserve—faster, safer, and smarter.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/shaikyajash/EliteCare",
    live_site_link: "/",
  },
  {
    name: "HumanAI",
    description:
      "A wellness-focused app designed to keep digital experiences deeply human. Track habits, reflect on emotions, and stay grounded in a chaotic world. Human blends minimalist design with mindful features to help users reconnect—with themselves and with others—one intentional tap at a time.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/Abh1nav004/Human",
    live_site_link: "/",
  },
  {
    name: "StrokeShield",
    description:
      "An emergency-focused app built to assist in stroke detection and response. Features include symptom tracking, real-time alerts, and immediate medical guidance. StrokeShield empowers users and caregivers to act fast—when seconds matter most, the app becomes your first line of defense.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "syncfusion",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/Abh1nav004/Brain_Stroke_Detector",
    live_site_link: "/",
  },
  {
    name: "RealAly Inc",
    description:
      "A full-service digital agency offering web development, deployment, and social media management under one roof. RealAly turns ideas into interactive experiences—whether it’s crafting a brand, building platforms, or driving growth. For businesses seeking smart solutions, RealAly is the real ally.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: project4,
    source_code_link: "https://github.com/sanidhyy/tiktok-clone",
    live_site_link: "https://tiktok-clone-react.vercel.app/",
  },
  {
    name: "Really",
    description:
      "A premium fashion storefront built to showcase elegance in both style and tech. Really delivers a seamless shopping experience with fast load times, sharp visuals, and intuitive filters. It’s where sleek design meets high-end clothing—because your wardrobe should click as well as your code.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project5,
    source_code_link: "https://github.com/sanidhyy/crypto-app",
    live_site_link: "https://reactjscryptoapp.netlify.app/",
  },
  {
    name: "MyTravo",
    description:
      "A travel booking platform built in PHP to simplify trip planning. Users can explore destinations, view packages, and reserve trips with ease. From solo escapes to group adventures, myTravo makes organizing travel intuitive, efficient, and just one form submission away.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
    ],
    image: project6,
    source_code_link: "https://github.com/sanidhyy/travel-advisor",
    live_site_link: "https://travel-advisor-reactjs.netlify.app/",
  },
] as const;

export const SOCIALS = [
  {
    name: "YouTube",
    icon: youtube,
    link: "https://www.youtube.com/@abh1navvlogs",
  },
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/abh1navsharma04",
  },
  {
    name: "Twitter",
    icon: twitter,
    link: "https://x.com/a_codedman",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/Abh1nav004",
  },
] as const;
