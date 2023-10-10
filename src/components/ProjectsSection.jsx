"use client";
import React, { useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio website",
    description:
      "Clone with YouTube tutorial; Using: NextJS 13 (app), TailwindCSS, framer-motion, type-animation, animated-numbers...",
    image: "/images/projects/1.png",
    tag: ["All", "Front-end"],
    gitUrl: "https://github.com/mikitran721/portfolio-2023",
    previewUrl: "https://mikitran-portfolio-2023.vercel.app",
  },
  {
    id: 2,
    title: "Clone Netflix",
    description:
      "Clone with YouTube tutorial; Using: NextJS 13 (pages), TailwindCSS, Next-Auth, MongoDB, TypeScript, SWR, BCrypt,...",
    image: "/images/projects/2.png",
    tag: ["All", "Fullstack"],
    gitUrl: "https://github.com/mikitran721/netflix-clone",
    previewUrl: "https://netflix-clone-mikitran.vercel.app",
  },
  {
    id: 3,
    title: "Blogs Dashboard",
    description:
      "Clone with YouTube tutorial; Using: React, MySql, Bootstrap5 for Front-end/Back-end: NestJS, Typescript, Next-Auth, JWT, BCrypt, Swagger, Docker",
    image: "/images/projects/3.png",
    tag: ["All", "Fullstack"],
    gitUrl: "https://github.com/mikitran721/blog-nestjs",
    previewUrl: "https://github.com/mikitran721/blog-reactjs-frontend-",
  },
  {
    id: 4,
    title: "React Admin dashboard",
    description:
      "Clone with YouTube tutorial; Responsible web; Using: ViteJS, Sass, MUI Data-grid, ReChart, React-Query...",
    image: "/images/projects/4.png",
    tag: ["All", "Front-end"],
    gitUrl: "https://github.com/mikitran721/vite-mui-adminDashboard",
    previewUrl: "https://vitejs-admin-dashboard.vercel.app/",
  },
  /*{
    id: 5,
    title: "React Firebase Template",
    description: "Authentication and CRUD operations",
    image: "/images/projects/5.png",
    tag: ["All", "Frontend"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["All", "Fullstack"],
    gitUrl: "/",
    previewUrl: "/",
  }, */
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects1">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-4">
        My recent Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />

        <ProjectTag
          onClick={handleTagChange}
          name="Fullstack"
          isSelected={tag === "Fullstack"}
        />

        <ProjectTag
          onClick={handleTagChange}
          name="Front-end"
          isSelected={tag === "Front-end"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              tags={project.tags}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
