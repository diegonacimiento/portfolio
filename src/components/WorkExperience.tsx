import React from "react";
import { motion } from "framer-motion";
import { LangProps } from "../types/types";
import getLanguage from "../utils/language";
import { fadeInUp, staggerContainer, scaleIn } from "../utils/animations";
import SectionTransition from "./SectionTransition";
import "../assets/css/WorkExperience.css";

const WorkExperience: React.FC<LangProps> = ({ language }) => {
  const { navBar, workExperience } = getLanguage(language);

  return (
    <SectionTransition>
      <motion.section 
        id="section-work-experience"
        initial="initial"
        animate="animate"
        variants={fadeInUp}
      >

        <motion.div 
          className="container-work-experience"
          variants={staggerContainer}
        >
        <motion.h2 className="title-section" variants={fadeInUp}>
          {navBar.workExperience}
        </motion.h2>
          {workExperience.map((experience, index) => (
            <motion.div 
              key={index} 
              className="container-card"
              variants={scaleIn}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div 
                className="container-header"
                variants={fadeInUp}
              >
                <motion.h3 variants={fadeInUp}>
                  {experience.position}
                </motion.h3>
                <motion.p variants={fadeInUp}>
                  {experience.company}
                  <span>
                    {experience.startDate} - {experience.endDate}
                  </span>
                </motion.p>
                <motion.p variants={fadeInUp}>
                  {experience.mode}
                </motion.p>
              </motion.div>

              <motion.ul 
                className="container-body"
                variants={fadeInUp}
              >
                {experience.body.map((item, itemIndex) => (
                  <motion.li key={itemIndex} variants={fadeInUp}>
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </SectionTransition>
  );
};

export default WorkExperience;
