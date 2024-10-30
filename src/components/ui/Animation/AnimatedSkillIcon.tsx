import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface AnimatedSkillIconProps {
  children: ReactNode;
  delay: number;
  isVisible: boolean; 
}

const AnimatedSkillIcon = ({ children, delay, isVisible }: AnimatedSkillIconProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} 
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }} 
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSkillIcon;
