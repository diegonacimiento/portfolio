import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { LangProps } from "../types/types";
import technologiesList from "../utils/technologiesList";
import getLanguage from "../utils/language";
import { fadeInUp, staggerContainer, scaleIn } from "../utils/animations";
import SectionTransition from "./SectionTransition";
import "../assets/css/Presentation.css";

const Presentation: React.FC<LangProps> = ({ language }) => {
  const image = useRef<HTMLDivElement>(null);
  const [isRotate, setIsRotate] = useState<boolean>(false);
  
  const {presentation: history, presentationRol} = getLanguage(language);

  const rotateImage = () => {
    setIsRotate((prev) => !prev);
    isRotate
      ? image.current?.removeAttribute("style")
      : image.current?.setAttribute("style", "transform: rotateY(180deg);");
  };

  return (
    <SectionTransition>
      <motion.section 
        id="section-presentation"
        initial="initial"
        animate="animate"
        variants={fadeInUp}
      >
        <motion.h1 variants={fadeInUp} translate="no">Diego Nacimiento</motion.h1>
        <motion.h2 variants={fadeInUp} translate="no">{presentationRol}</motion.h2>
        
        <motion.div 
          className="container-bio-card"
          variants={staggerContainer}
        >
          <motion.div 
            className="container-img-presentation"
            variants={scaleIn}
          >
            <motion.div 
              id="img-presentation" 
              ref={image} 
              onClick={rotateImage}
              style={{ backgroundPosition: "center" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
          </motion.div>
          
          <motion.p 
            id="history"
            variants={fadeInUp}
          >
            {history}
          </motion.p>
        </motion.div>

        <motion.div 
          className="container-tech-list"
          variants={staggerContainer}
        >
          {technologiesList.map((tech, index) => (
            <motion.figure 
              key={index}
              variants={scaleIn}
              whileHover={{ scale: 1.1 }}
            >
              <motion.div
                style={{
                  backgroundImage: `url("${tech.icon}")`,
                  height: "50px",
                  width: "50px",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              />
              <p>{tech.name}</p>
            </motion.figure>
          ))}
        </motion.div>
      </motion.section>
    </SectionTransition>
  );
};

export default Presentation;
