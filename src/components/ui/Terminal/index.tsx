"use client"
import { Typewriter } from 'react-simple-typewriter';

const TerminalEffect = () => {
  return (
    <div className="terminal-effect">
      <p className="text-sm sm:text-2xl lg:text-4xl mt-2">
        <Typewriter
          words={[
            'Sou um desenvolvedor Fullstack',
            'Tenho experiência com Angular e Django',
            'Sou um desenvolvedor de Software',
            'Possuo conhecimento em SQL',
            'Sou um desenvolvedor Web',
            'Possuo inglês avançado'
          ]}
          loop={true}
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
