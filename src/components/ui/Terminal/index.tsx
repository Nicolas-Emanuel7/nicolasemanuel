"use client"
import { Typewriter } from 'react-simple-typewriter';

const TerminalEffect = () => {
  return (
    <div className="terminal-effect">
      <p className="text-sm sm:text-2xl lg:text-4xl mt-2">
        <Typewriter
          words={['Sou um desenvolvedor Fullstack']}
          loop={false}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </p>
    </div>
  );
};

export default TerminalEffect;
