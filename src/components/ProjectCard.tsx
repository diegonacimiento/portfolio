import React from 'react';
import { motion } from 'framer-motion';
import { PiComputerTower, PiProjectorScreen } from "react-icons/pi";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import IconTech from './IconTech';
import { fadeInUp } from '../utils/animations';

interface ProjectCardProps {
  project: {
    title: string;
    link: string;
    download?: string;
    technologies: string[];
    repositories: {
      backend?: string;
      frontend?: string;
    };
    image?: string;
  };
  projectTitles: string[];
  projectDescription: Record<string, string>;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  project, 
  projectTitles, 
  projectDescription 
}) => {
  const redirect = (link: string) => {
    window.open(link);
  };

  return (
    <motion.div 
      className="container-project"
      variants={fadeInUp}
      whileHover={{ scale: 1.02 }}
    >
      <motion.div 
        className="project-preview"
        onClick={() => redirect(project.link)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.h2 variants={fadeInUp}>{project.title}</motion.h2>

        {project.image ? (
          <motion.img 
            src={project.image} 
            alt={`Vista previa de ${project.title}`}
            whileHover={{ scale: 1.1 }}
          />
        ) : (
          <motion.div 
            className="preview-placeholder"
            whileHover={{ scale: 1.1 }}
          >
            {projectTitles[1]}
          </motion.div>
        )}
      </motion.div>

      
      <motion.p variants={fadeInUp}>{projectDescription[project.title]}</motion.p>

      <motion.div className="technologies-container" variants={fadeInUp}>
        <span>{projectTitles[0]}</span>
        <div className="technologies-grid">
          {project.technologies.map((tech, index) => (
            <motion.div 
              key={index} 
              className="item-technology"
              whileHover={{ scale: 1.1 }}
            >
              <figure>{<IconTech technology={tech} />}</figure>
              <p>{tech}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div className="container-links" variants={fadeInUp}>
        {project.repositories.backend && (
          <motion.figure whileHover={{ scale: 1.1 }}>
            <a href={project.repositories.backend} target="_blank" rel="noopener noreferrer">
            <PiComputerTower className='icon-project' />
              Backend
            </a>
          </motion.figure>
        )}
        {project.repositories.frontend && (
          <motion.figure whileHover={{ scale: 1.1 }}>
            <a href={project.repositories.frontend} target="_blank" rel="noopener noreferrer">
            <HiOutlineComputerDesktop className='icon-project' />
              Frontend
            </a>
          </motion.figure>
        )}
        {project.download ? (
          <motion.figure whileHover={{ scale: 1.1 }}>
            <a href={project.download} target="_blank" rel="noopener noreferrer">
            <PiProjectorScreen className='icon-project' />
              {projectTitles[3]}
            </a>
          </motion.figure>
        ) : (
          <motion.figure whileHover={{ scale: 1.1 }}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
            <PiProjectorScreen className='icon-project' />
              {projectTitles[2]}
            </a>
          </motion.figure>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard; 