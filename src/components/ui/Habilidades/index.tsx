import { useEffect, useRef, useState } from 'react';
import AnimatedSkillIcon from "@/components/ui/Animation/AnimatedSkillIcon";

function Habilidades() {
  const [isFrontEndVisible, setIsFrontEndVisible] = useState(false);
  const [isBackEndVisible, setIsBackEndVisible] = useState(false);
  const frontEndRef = useRef<HTMLDivElement>(null); // Referência para a seção FrontEnd
  const backEndRef = useRef<HTMLDivElement>(null); // Referência para a seção BackEnd

  useEffect(() => {
    const frontEndObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsFrontEndVisible(true); // Ativa a animação quando a seção FrontEnd é visível
          frontEndObserver.disconnect(); // Para observar após a primeira vez
        }
      },
      { threshold: 0.1 }
    );

    const backEndObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsBackEndVisible(true); // Ativa a animação quando a seção BackEnd é visível
          backEndObserver.disconnect(); // Para observar após a primeira vez
        }
      },
      { threshold: 0.1 }
    );

    if (frontEndRef.current) {
      frontEndObserver.observe(frontEndRef.current); // Começa a observar a seção FrontEnd
    }

    if (backEndRef.current) {
      backEndObserver.observe(backEndRef.current); // Começa a observar a seção BackEnd
    }

    return () => {
      if (frontEndRef.current) {
        frontEndObserver.unobserve(frontEndRef.current); // Para de observar ao desmontar
      }
      if (backEndRef.current) {
        backEndObserver.unobserve(backEndRef.current); // Para de observar ao desmontar
      }
    };
  }, []);

  return (
    <div className="flex flex-col flex-wrap justify-center items-center gap-16">
      {/* FrontEnd */}
      <div ref={frontEndRef} className="flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-5">FrontEnd</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {[
            { src: "/icons/html.png", alt: "HTML5" },
            { src: "/icons/css.png", alt: "CSS3" },
            { src: "/icons/javascript.png", alt: "JavaScript" },
            { src: "/icons/angular.png", alt: "Angular" },
            { src: "/icons/react.png", alt: "React.js" },
            { src: "/icons/figma.png", alt: "Figma" },
          ].map((icon, index) => (
            <AnimatedSkillIcon key={index} delay={index * 0.2} isVisible={isFrontEndVisible}>
              <div className="flex flex-col items-center space-y-4">
                <img
                  src={icon.src}
                  alt={icon.alt}
                  className="sm:w-11 sm:h-11 w-9 h-9 dark:invert transition-transform duration-300 transform hover:scale-110"
                />
                <p>{icon.alt}</p>
              </div>
            </AnimatedSkillIcon>
          ))}
        </div>
      </div>

      {/* BackEnd */}
      <div ref={backEndRef} className="flex flex-col items-center text-primary-foreground mt-10">
        <h2 className="text-3xl font-bold text-shadow mb-5">BackEnd</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {[
            { src: "/icons/python.png", alt: "Python" },
            { src: "/icons/django.png", alt: "Django" },
            { src: "/icons/postgresql.png", alt: "PostgreSQL" },
            { src: "/icons/firebase.png", alt: "Firebase" },
            { src: "/icons/git.png", alt: "Git" },
          ].map((icon, index) => (
            <AnimatedSkillIcon key={index} delay={index * 0.2} isVisible={isBackEndVisible}>
              <div className="flex flex-col items-center space-y-4">
                <img
                  src={icon.src}
                  alt={icon.alt}
                  className="sm:w-11 sm:h-11 w-9 h-9 invert transition-transform duration-300 transform hover:scale-110"
                />
                <p>{icon.alt}</p>
              </div>
            </AnimatedSkillIcon>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Habilidades;
