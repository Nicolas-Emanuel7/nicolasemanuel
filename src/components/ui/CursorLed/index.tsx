"use client";

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

interface Particle {
  x: number;
  y: number;
  size: number;
  life: number;
}

const CustomCursor = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const { theme } = useTheme();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (theme === 'dark') {
        const newParticle = {
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 6 + 4, // Aumenta o tamanho das partículas
          life: Math.random() * 60 + 60, // Aumenta a duração das partículas
        };
        setParticles((prevParticles) => [...prevParticles, newParticle]);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [theme]);

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prevParticles) =>
        prevParticles
          .map((p) => ({ ...p, life: p.life - 1 }))
          .filter((p) => p.life > 0)
      );
    }, 50); // Mantém o intervalo, ajustando a duração da partícula

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {theme === 'dark' &&
        particles.map((particle, index) => (
          <div
            key={index}
            style={{
              position: 'fixed',
              top: particle.y + 'px',
              left: particle.x + 'px',
              width: particle.size + 'px',
              height: particle.size + 'px',
              borderRadius: '50%',
              backgroundColor: `rgba(255, 255, 255, ${particle.life / 120})`, // Ajusta a opacidade de acordo com a nova duração
              pointerEvents: 'none',
              transform: `translate(-50%, -50%)`,
              zIndex: 9999, // Garante que as partículas estejam acima de todos os outros elementos
            }}
            className="particle"
          ></div>
        ))}
    </>
  );
};

export default CustomCursor;
