
import type { Project } from "../types/project.types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Vesta — Returns Management",
    description:
      "A collaborative React project involving authentication UI, form validation, and API integration.",
    image: "/img/veasta-Project.png",
    technologies: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "React Hook Form",
      "Zod",
    ],
    githubUrl: "https://github.com/Abdulrahmanfawzy/vesta-react",
    liveUrl :"https://vesta-nextjs.vercel.app/"
  },
  {
    id: 2,
    title: "E-Commerce App",
    description:
      "A responsive e-commerce interface designed to provide a smooth product browsing and shopping experience.",
    image: "/img/Ecommerce.png",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/Abdo1454",
    liveUrl:"https://sixteen-clothing-shop.netlify.app/"
  },
  {
    id: 3,
    title: "Time Flow",
    description:
      "A task management interface designed to help users organize tasks and improve productivity.",
    image: "/img/timeFlow-img.png",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/Abdo1454/timeflow",
    liveUrl: "https://timeflow-app-ten.vercel.app/",
  },
];
