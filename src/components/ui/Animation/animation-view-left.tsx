"use client";
import { motion, useInView, Transition } from "framer-motion";
import { useRef, ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  transition?: Transition;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, transition = { duration: 1 } }) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
