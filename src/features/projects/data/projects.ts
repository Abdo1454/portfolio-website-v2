
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
    githubUrl: "https://github.com/Abdo1454",
  },
  {
    id: 2,
    title: "E-Commerce App",
    description:
      "A responsive e-commerce interface designed to provide a smooth product browsing and shopping experience.",
    image: "/img/Ecommerce.png",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/Abdo1454",
  },
  {
    id: 3,
    title: "Task Management App",
    description:
      "A task management interface designed to help users organize tasks and improve productivity.",
    image: "/img/tsaks.png",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/Abdo1454",
  },
];
