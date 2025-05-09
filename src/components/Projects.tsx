import React from "react";
import { motion } from "framer-motion";
import { PiComputerTower, PiProjectorScreen } from "react-icons/pi";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import getLanguage from "../utils/language";
import IconTech from "./IconTech";
import { LangProps } from "../types/types";
import projectsList from "../utils/projectsList";
import { fadeInUp, staggerContainer, scaleIn } from "../utils/animations";
import SectionTransition from "./SectionTransition";
import "../assets/css/Projects.css";

const Projects: React.FC<LangProps> = ({ language }) => {
  const redirect = (link: string) => {
    window.open(link);
  };

  const { projectTitles, navBar, projectDescription } = getLanguage(language);

  return (
    <SectionTransition>
      <motion.section 
        id="section-projects"
        initial="initial"
        animate="animate"
        variants={fadeInUp}
      >
        <motion.h2 className="title-section" variants={fadeInUp}>{navBar.projects}</motion.h2>
        <motion.div variants={staggerContainer}>
          {projectsList.map((project, index) => (
            <motion.div 
              key={index} 
              className="container-project"
              variants={scaleIn}
              whileHover={{ scale: 1.02 }}
            >
              <div className="container-iframe">
                {project.title === "Pokedex" ? (
                  <motion.iframe
                    width="320"
                    height="560"
                    src={project.link}
                    title={`Video de ${project.title}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    whileHover={{ scale: 1.05 }}
                  />
                ) : (
                  <>
                    <motion.div 
                      onClick={() => redirect(project.link)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {projectTitles[1]}
                    </motion.div>
                    <motion.iframe
                      title={`Vista previa de ${project.title}`}
                      src={project.link}
                      allowFullScreen
                      scrolling="off"
                      whileHover={{ scale: 1.05 }}
                    />
                  </>
                )}
              </div>
              <motion.h2 variants={fadeInUp}>{project.title}</motion.h2>
              <motion.p variants={fadeInUp}>{projectDescription[project.title]}</motion.p>
              <motion.div variants={fadeInUp}>
                <span>{projectTitles[0]}</span>
                {project.technologies.map((t, index) => (
                  <motion.div 
                    key={index} 
                    className="item-technology"
                    whileHover={{ scale: 1.1 }}
                  >
                    <figure>{<IconTech technology={t} />}</figure>
                    <p>{t}</p>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div className="container-links" variants={fadeInUp}>
                {project.repositories.backend && (
                  <motion.figure whileHover={{ scale: 1.1 }}>
                    <PiComputerTower />
                    <a href={project.repositories.backend} target="_blank" rel="noopener noreferrer">
                      Backend
                    </a>
                  </motion.figure>
                )}
                {project.repositories.frontend && (
                  <motion.figure whileHover={{ scale: 1.1 }}>
                    <HiOutlineComputerDesktop />
                    <a href={project.repositories.frontend} target="_blank" rel="noopener noreferrer">
                      Frontend
                    </a>
                  </motion.figure>
                )}
                {project.download ? (
                  <motion.figure whileHover={{ scale: 1.1 }}>
                    <PiProjectorScreen />
                    <a href={project.download} target="_blank" rel="noopener noreferrer">
                      {projectTitles[3]}
                    </a>
                  </motion.figure>
                ) : (
                  <motion.figure whileHover={{ scale: 1.1 }}>
                    <PiProjectorScreen />
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      {projectTitles[2]}
                    </a>
                  </motion.figure>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </SectionTransition>
  );
};

export default Projects;
