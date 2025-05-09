import React from "react";
import { motion } from "framer-motion";
import getLanguage from "../utils/language";
import { LangProps } from "../types/types";
import projectsList from "../utils/projectsList";
import { fadeInUp, staggerContainer } from "../utils/animations";
import SectionTransition from "./SectionTransition";
import ProjectCard from "./ProjectCard";
import "../assets/css/Projects.css";

const Projects: React.FC<LangProps> = ({ language }) => {
  const { projectTitles, navBar, projectDescription } = getLanguage(language);

  return (
    <SectionTransition>
      <motion.section 
        id="section-projects"
        initial="initial"
        animate="animate"
        variants={fadeInUp}
      >
        <motion.h2 className="title-section" variants={fadeInUp}>
          {navBar.projects}
        </motion.h2>
        <motion.div variants={staggerContainer} className="container-projects">
          {projectsList.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              projectTitles={projectTitles}
              projectDescription={projectDescription}
            />
          ))}
        </motion.div>
      </motion.section>
    </SectionTransition>
  );
};

export default Projects;
