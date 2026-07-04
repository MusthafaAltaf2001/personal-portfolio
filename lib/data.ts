import type { StaticImageData } from "next/image";

import petvilleProject from "@/public/images/projects/petville_project.png";
import viseProject from "@/public/images/projects/vise_project.png";
import simpProject from "@/public/images/projects/simp_project.png";
import reportcareClinicianProject from "@/public/images/projects/reportcare_clinician_project.png";
import redditCloneProject from "@/public/images/projects/reddit_clone_project.png";
import trackitProject from "@/public/images/projects/trackit_project.png";

export const siteConfig = {
  name: "Musthafa",
  title: "Musthafa Altaf",
  description: "Personal Portfolio of Musthafa Altaf",
  url: "https://musthafaaltaf.com",
  resumeUrl:
    "https://drive.google.com/file/d/1RPIQ7mOH-9g3MQvDu8iTV8XoI9VSg82h/view?usp=sharing",
  gaId: "G-VE8V7E4MEJ",
  contact: {
    address: "Colombo, Sri Lanka",
    phone: "+94-76-474-8328",
    email: "musthafaaltaf2001@gmail.com",
  },
};

export const aboutText =
  "I'm a passionate software developer with two years of experience in software development, mainly focused on frontend development. I love learning new skills and always strive to expand my knowledge in the software world. I find working on software projects exciting because it involves solving problems and using logic, which happens to be one of my core strengths.";

export interface Project {
  title: string;
  description: string;
  href: string;
  image: StaticImageData;
  imageClassName?: string;
}

export const projects: Project[] = [
  {
    title: "Petville - Petcare Affordable and Convenient",
    description:
      "A platform for new and existing pet owners to purchase products and services conveniently and affordably. Allows pet businesses to also promote themselves to customers who are looking for their services and products.",
    href: "https://petville.co/",
    image: petvilleProject,
    imageClassName: "bg-[#EFE9E7]",
  },
  {
    title: "VISE - Visually Impaired Shopping Experience",
    description:
      "Partnered with Jo Malone London to create an E-Commerce platform and personalized tool for visually impaired users. Consists of an AI computer vision from Microsoft Azure where products can be scanned through the device camera.",
    href: "https://github.com/MusthafaAltaf2001/vise",
    image: viseProject,
  },
  {
    title: "Student Internship Management Program",
    description:
      "A platform that conveniently allows students to find internships by simply uploading their details like Resume, skills. Employers can post internship job postings which students can apply for.",
    href: "https://github.com/MusthafaAltaf2001/student_internship_management_program",
    image: simpProject,
  },
  {
    title: "ReportCare - Patient Health Monitor",
    description:
      "A healthcare app that can be used by doctors or clinicians which allows them to monitor the health of their patients. It has a builtin alert system that is triggered when a patient is in bad health and reports to the relevant authorities.",
    href: "https://github.com/MusthafaAltaf2001/reportcare-clinician",
    image: reportcareClinicianProject,
  },
  {
    title: "Reddit Web Clone - MERN Stack",
    description:
      "A cloned version of the website reddit.com which is built using MERN stack (Mongodb, Express.js, React.js and Node.js). This was just a fun project to work on my React skills.",
    href: "https://github.com/MusthafaAltaf2001/reddit-clone-1",
    image: redditCloneProject,
  },
  {
    title: "TrackIt - Track and Monitor Teams",
    description:
      "A tracking system for teams that allows project managers to track progress of work done by each team member. This is done by diaplying the number of man hours put in by each member and also keeps track of how each member is contributing to the team. ",
    href: "https://github.com/MusthafaAltaf2001/TrackIt.com",
    image: trackitProject,
  },
];

export interface Skill {
  name: string;
  logo: string;
}

export const skills: Skill[] = [
  { name: "Javascript", logo: "/images/skills/javascript_logo.svg" },
  { name: "Python", logo: "/images/skills/python_logo.svg" },
  { name: "Java", logo: "/images/skills/java_logo.svg" },
  { name: "C Program", logo: "/images/skills/C_program_logo.svg" },
  { name: "Git", logo: "/images/skills/git_logo.svg" },
  { name: "Vuejs", logo: "/images/skills/vuejs_logo.svg" },
  { name: "React", logo: "/images/skills/reactjs_logo.svg" },
  { name: "Redux", logo: "/images/skills/redux_logo.svg" },
  { name: "TailwindCSS", logo: "/images/skills/tailwindcss_logo.svg" },
  { name: "Material UI", logo: "/images/skills/material_ui_logo.svg" },
  { name: "Microsoft Azure", logo: "/images/skills/microsoft_azure_logo.svg" },
  { name: "AWS", logo: "/images/skills/aws_logo.svg" },
  { name: "Nodejs", logo: "/images/skills/nodejs_logo.svg" },
  { name: "MongoDB", logo: "/images/skills/mongodb_logo.svg" },
  { name: "Trello", logo: "/images/skills/trello_logo.svg" },
  { name: "Jira", logo: "/images/skills/jira_logo.svg" },
];

export interface Social {
  name: string;
  href: string;
}

export const socials: Social[] = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/musthafaaltaf/" },
  { name: "GitHub", href: "https://github.com/MusthafaAltaf2001" },
  { name: "Instagram", href: "https://www.instagram.com/musthafa.altaf/" },
];
