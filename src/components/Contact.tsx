import React from "react";
import { motion } from "framer-motion";
import contactList from "../utils/contactList";
import getLanguage from "../utils/language";
import { LangProps } from "../types/types";
import ContactIcon from "./ContactIcon";
import { fadeInUp, staggerContainer } from "../utils/animations";
import SectionTransition from "./SectionTransition";
import "../assets/css/Contact.css";

const Contact: React.FC<LangProps> = ({ language }) => {
  const { navBar, contactPhrase } = getLanguage(language);
  
  return (
    <SectionTransition>
      <motion.section 
        id="section-contact"
        initial="initial"
        animate="animate"
        variants={fadeInUp}
        aria-labelledby="contact-title"
      >
        <motion.h2 
          id="contact-title" 
          className="title-section"
          variants={fadeInUp}
        >
          {navBar.contact}
        </motion.h2>
        
        <motion.div 
          className="logo-contact" 
          aria-hidden="true"
          variants={fadeInUp}
        />
        
        <motion.h3 
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
        >
          {contactPhrase}
        </motion.h3>
        
        <motion.div 
          className="container-item-contact"
          variants={staggerContainer}
        >
          {contactList.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ContactIcon
                icon={item.icon}
                name={item.name}
                link={item.link}
                linkSpanish={item.linkSpanish}
                language={language}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </SectionTransition>
  );
};

export default Contact;
