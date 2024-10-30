"use client"
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Intro = ({ onComplete }: { onComplete: () => void }) => {
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (isComplete) {
      const timer = setTimeout(onComplete, 1000);
      return () => clearTimeout(timer);
    }
  }, [isComplete, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-third font-bebas flex items-center justify-center text-white text-4xl"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 2 }}
      onAnimationComplete={() => {
        setIsComplete(true);
      }}
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Nicolas Emanuel
      </motion.div>
    </motion.div>
  );
};

export default Intro;
