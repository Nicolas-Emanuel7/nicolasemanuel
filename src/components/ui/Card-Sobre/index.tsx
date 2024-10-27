"use client";
import { GraduationCap, Languages, BadgeCheck, Download, Award } from 'lucide-react';
import { useRef } from 'react';

function CardSobre() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div className="sm:flex sm:flex-wrap sm:gap-4 sm:justify-center">
      <div className="shadow-sm shadow-gray-800 p-2 mb-8 max-w-[300px] sm:min-w-[510px]">
        <div className="flex items-center space-x-2">
          <GraduationCap className="text-third" />
          <h2 className="text-lg font-semibold">Formação</h2>
        </div>
        <p className="mt-2">
          Bacharel em Tecnologia da Informação
          <br />
          UFERSA 2020-2025 (Previsão)
        </p>
      </div>

      <div className="shadow-sm shadow-gray-800 p-2 mb-8  max-w-[300px] sm:min-w-[510px]">
        <div className="flex items-center space-x-2">
          <Award className="text-third" />
          <h2 className="text-lg font-semibold">Experiência</h2>
        </div>
        <div className="flex items-center space-x-2 ml-2">
          <BadgeCheck className="text-third h-4 w-4" />
          <p className="mt-2">
            Inglês Básico ao Avançado
            <br />
            Minds English School 2021-2022
            <a
              href="/Certificados/nicolas-certificado-ingles.pdf"
              download
              className="text-third absolute ml-2"
            >
              <Download className="h-5 w-5" />
            </a>
          </p>
        </div>
        <div className="flex items-center space-x-2 ml-2">
          <BadgeCheck className="text-third sm:h-4 sm:w-4" />
          <p className="mt-2">
            Trabalhei como freelancer na empresa Finuse Soluções 2024
          </p>
        </div>
      </div>

      <div className="shadow-sm shadow-gray-800 p-2 mb-8 max-w-[300px] sm:min-w-[510px]">
        <div className="flex items-center space-x-2">
          <Languages className="text-third" />
          <h2 className="text-lg font-semibold">Idiomas</h2>
        </div>
        <p className="mt-2">
          Português (<span className='text-third-foreground'>Nativo</span>)<br />
          Inglês (<span className='text-third-foreground'>Avançado</span>)<br />
          Espanhol (<span className='text-third-foreground'>Básico</span>)
        </p>
      </div>
    </div>
  );
}

export default CardSobre;
