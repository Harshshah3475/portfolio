import consultancy from "@/public/consultancy.png";
import dp from "@/public/dp.png";
import hiveToHarvest1 from "@/public/hive-to-harvest-1.png";
import hiveToHarvest2 from "@/public/hive-to-harvest-2.png";
import hiveToHarvest3 from "@/public/hive-to-harvest-3.png";
import portfolio from "@/public/portfolio.png";
import scpps from "@/public/scpps.png";
import scriptify from "@/public/scriptify.png";
import shivamExpress from "@/public/shivam-express.png";
import shivam from "@/public/shivam.png";
import sneakerStudio from "@/public/sneaker-studio.png";
import wanderlust from "@/public/wanderlust.png";

// Mapping the missing image variables to the imported images


export const techStack = [
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    url: "https://www.typescriptlang.org",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    url: "https://nodejs.org",
  },
  {
    name: "Bun",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bun/bun-original.svg",
    url: "https://bun.sh",
    invertDark: true,
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    url: "https://react.dev",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    url: "https://nextjs.org",
    invertDark: true,
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    url: "https://tailwindcss.com",
  },
  {
    name: "Shadcn UI",
    icon: "https://avatars.githubusercontent.com/u/139895814?s=200&v=4",
    url: "https://ui.shadcn.com",
    invertDark: true,
  },
  {
    name: "Three.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg",
    url: "https://threejs.org",
    invertDark: true,
  },
  {
    name: "Redux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    url: "https://redux.js.org",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    url: "https://git-scm.com",
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    url: "https://www.docker.com",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    url: "https://www.mongodb.com",
  },
  {
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    url: "https://www.figma.com",
  },
  {
    name: "OpenAI",
    icon: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
    url: "https://openai.com",
    invertDark: true,
  },
  {
    name: "Gemini API",
    icon: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg",
    url: "https://deepmind.google/technologies/gemini/",
  },
  {
    name: "Motion React",
    icon: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg",
    url: "https://motion.dev/",
  },
  {
    name: "Express",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    url: "https://expressjs.com",
    invertDark: true,
  },
  {
    name: "Socket.io",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
    url: "https://socket.io/",
    invertDark: true,
  },
  {
    name: "Zustand",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/zustand/zustand-original.svg",
    url: "https://github.com/immerjs/zustand",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    url: "https://www.postgresql.org",
  },
  {
    name: "Prisma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
    url: "https://www.prisma.io",
  },
  {
    name: "express",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    url: "https://expressjs.com",
    invertDark: true,
  },
  {
    name: "Web3.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/web3js/web3js-original.svg",
    url: "https://web3js.org",
  },
  {
    name: "Vercel",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
    url: "https://vercel.com",
    invertDark: true,
  },
];

export const projects = [
  {
    id: "Scriptify - AI SaaS ",
    title: "Scriptify - AI SaaS ",
    role: "Full Stack Developer",
    description:
      "End-to-end digital agency website focused on performance, clarity, and scalability.",
    stack: [
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "Vercel",
      "Motion React",
    ],
    gradient: "from-blue-500 to-indigo-500",
    bgColor: "#222",
    img: scriptify,
    live: "https://scriptify-mu.vercel.app/",
    github: "https://github.com/Harshshah3475",
  },

  {
    id: "Shivam Express",
    title: "Shivam Express",
    role: "Full Stack Developer",
    description: "News Portal with custom CMS for a prominent local news agency.",
    stack: [
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "Vercel",
    ],
    gradient: "from-blue-500 to-indigo-500",
    bgColor: "#ACD6F1",
    img: shivamExpress,
    live: "https://shivamexpress24.com/",
    github: "https://github.com/Harshshah3475",
  },

  {
    id: "Sneaker Studio",
    title: "Sneaker Studio",
    role: "Frontend Developer",
    description: "Sneaker customizer ",
    stack: [
      "React",
      "Tailwind CSS",
      "Vercel",
      "Motion React",
    ],
    gradient: "from-zinc-600 to-stone-600",
    bgColor: "#000000",
    img: sneakerStudio,
    live: "https://sneaker-studio-hazel.vercel.app/",
    github: "https://github.com/Harshshah3475/sneakerStudio",
  },

  {
    id: "Hive-to-Harvest",
    title: "Hive-to-Harvest",
    role: "Full Stack Developer",
    description: "A agri-tech platform for Honey farmers.",
    stack: [
      "React",
      "Node.js",
      "Tailwind CSS",
      "Vercel",

    ],
    gradient: "from-zinc-600 to-stone-600",
    bgColor: "#111111",
    img:  hiveToHarvest1,
    live: "https://hive-to-harvest-site.vercel.app/",
    github: "https://github.com/Harshshah3475/",
  },

  {
    id: "Consultancy Agency landing page",
    title: "Consultancy Agency landing page",
    role: "Frontend Developer",
    description: "Consultancy Agency landing page with smooth animations.",
    stack: ["React", "Tailwind CSS", "GSAP", "Motion React", "Three.js"],
    gradient: "from-zinc-600 to-stone-600",
    bgColor: "#111111",
    img: consultancy,
    live: "https://frontend-infotech-brown.vercel.app/",
    github: "https://github.com/Harshshah3475/frontend-infotech",
  },

  {
    id: "SCPPS",
    title: "SCPPS",
    role: "Frontend Developer",
    description: "Website for University's biggest cultural society",
    stack: ["React", "Tailwind CSS", "GSAP"],
    gradient: "from-zinc-600 to-stone-600",
    bgColor: "#301934",
    img: scpps,
    live: "https://scpps.co.in/",
    github: "https://github.com/Harshshah3475/",
  },

  {
    id: "Wanderlust",
    title: "Wanderlust",
    role: "Full Stack Developer",
    description: "AI-powered travel planner.",
    stack: ["React", "Node.js", "Gemini API", "Tailwind CSS", "Vercel"],
    gradient: "from-zinc-600 to-stone-600",
    bgColor: "#EBC",
    img: wanderlust,
    live: "https://uttarakhand-wanderlust-bot.vercel.app/",
    github: "https://github.com/Harshshah3475/uttarakhand-wanderlust-bot",
  }
];
