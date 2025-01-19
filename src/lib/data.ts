import React from "react";
import { Brackets, Briefcase, LucideGraduationCap } from "lucide-react";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Shiraz University of Technology",
    location: "Shiraz, Iran",
    description:
      "I started my career as a freelancer developer when I was a software engineering student. I also graduated in 2023.",
    icon: React.createElement(LucideGraduationCap),
    date: "2019 - 2022",
  },
  {
    title: "Hello Digi - Front-End Developer",
    location: "Canada - remote",
    description:
      "After working for 2 month in this position, by developing my skills and showing competence I was promoted to the full-stack night support position.",
    icon: React.createElement(Briefcase),
    date: "2023 ",
  },
  {
    title: "Hello Digi - Night Support (Full-Stack)",
    location: "Canada - remote",
    description:
      "I was responsible for taking care of customers requests on their website and our CMS. I also worked on the development of new features and bug fixes.",
    icon: React.createElement(Brackets),
    date: "2023 - 2024",
  },
] as const;

export const projectsData = [
  {
    id: 4,
    title: "Ecommerce Admin",
    description:
      "This Ecommerce Admin Panel helps you manage multiple stores. It provides an API based on each store to manage products, orders, users, and more.",
    tags: ["Next.js", "Prisma", "Clerck", "Shadcn/ui", "Redux", "Formik"],

    imageUrl: "/images/projects/Dashboard.webp",
    demoLink: "https://maxjn-ecommerce-admin.vercel.app/",
    codeLink: "https://github.com/maxjn/ecommerce-admin",
  },
  {
    id: 1,
    title: "Airbnb Clone",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["Next.js", "NextAuth", "MongoDB", "Redux", "Prisma"],

    imageUrl: "/images/projects/airbnbClone.webp",
    demoLink: "https://maxjn-airbnb-clone.vercel.app/",
    codeLink: "https://github.com/maxjn/airbnb-clone",
  },
  {
    id: 5,
    title: "Ecommerce Store",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["Next.js", "Redux", "Stripe", "Shadcn/ui", "Tailwind"],

    imageUrl: "/images/projects/Store.webp",
    demoLink: "https://maxjn-ecommerce-store.vercel.app/",
    codeLink: "https://github.com/maxjn/ecommerce-store",
  },
  // {
  //   id: 6,
  //   title: "Airbnb Clone",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],

  //   imageUrl: "/images/projects/airbnbClone.webp",
  //   demoLink: "https://maxjn-netflix-clone.vercel.app/",
  //   codeLink: "https://github.com/maxjn/netflix-clone",
  // },
  // {
  //   id: 2,
  //   title: "Airbnb Clone",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],

  //   imageUrl: "/images/projects/airbnbClone.webp",
  //   demoLink: "https://maxjn-my-workout.vercel.app/",
  //   codeLink: "https://github.com/maxjn/my-workout-mern",
  // },
  // {
  //   id: 3,
  //   title: "Airbnb Clone",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],

  //   imageUrl: "/images/projects/airbnbClone.webp",
  //   demoLink: "https://maxjn-starwars.pages.dev/people",
  //   codeLink: "https://github.com/maxjn/starwars-react",
  // },
] as const;

export const skillsData = [
  {
    name: "Front-end",
    skills: [
      "Next.js",
      "Redux",
      "Zustand",
      "RHF",
      "Formik",
      "TypeScript",
      "Tailwind",
      "Framer Motion",
    ],
  },
  {
    name: "Back-end",
    skills: ["Node.js", "Express", "Prisma", "Sequelize"],
  },
  {
    name: "Database",
    skills: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    name: "Other Tools",
    skills: ["Redis", "Docker", "RabitMQ", "JWT", "Docker", "Jest"],
  },
] as const;
