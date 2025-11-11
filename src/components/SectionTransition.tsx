import React from 'react';
import { motion } from 'framer-motion';
import { sectionTransition, parallaxEffect } from '../utils/animations';

interface SectionTransitionProps {
  children: React.ReactNode;
  className?: string;
  hasParallax?: boolean;
}

const SectionTransition: React.FC<SectionTransitionProps> = ({ 
  children, 
  className = '', 
  hasParallax = false 
}) => {
  return (
    <motion.div
      className={className}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionTransition}
    >
      {hasParallax ? (
        <motion.div
          variants={parallaxEffect}
          style={{ position: 'relative' }}
        >
          {children}
        </motion.div>
      ) : (
        children
      )}
    </motion.div>
  );
};

export default SectionTransition; 