"use client"
import { useState } from "react";
import { MoveRight, Users } from "lucide-react";
import { Button } from "../../Button/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../Card/card";

function CardProjeto2() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex justify-center p-4">
      <Card className="lg:w-[800px] w-full bg-cover bg-center relative p-10 overflow-hidden h-auto min-h-[300px] text-white bg-fourth flex flex-col justify-between">
        <div className="absolute top-0 left-0 w-full h-full bg-third clip-triangle z-0"></div>
        <CardHeader className="relative z-10">
          <CardTitle className="flex justify-between text-[100%] sm:text-2xl h-[30px] mb-4 sm:mb-auto sm:h-auto">
            Site de Grupos de Conversa <Users />
          </CardTitle>
          <CardDescription>
            <div className="flex flex-wrap gap-2 items-center text-white text-opacity-25">
            <p>Python</p>
            <p>Django</p>
            <p>JavaScript</p>
            <p>HTML</p>
            <p>CSS</p>
            </div>
            <hr className="mt-4 border-white border-opacity-25" />
          </CardDescription>
        </CardHeader>

        <CardContent className="relative z-10 flex-1 w-full flex flex-col items-center mt-4 gap-4">
          <p
            className={`transition-all duration-300 text-center ${
              isExpanded ? 'line-clamp-none' : 'line-clamp-2'
            } cursor-pointer hover:opacity-40`}
            onClick={handleToggle}
          >
          A plataforma de grupos de conversa foi desenvolvida com Django, com o objetivo de criar um ambiente colaborativo onde estudantes podem compartilhar conhecimento e tirar dúvidas uns com os outros.
          </p>
        </CardContent>

        <CardFooter className="h-[100px] relative z-10 flex flex-col sm:flex-row justify-center gap-4 sm:justify-end ">
          <a href="https://github.com/Nicolas-Emanuel7/estudoAppDjango" target="_blank" rel="noopener noreferrer" className="inline-block w-full sm:w-auto sm:mt-20">
            <Button className="w-full rounded-2xl bg-third-foreground hover:bg-third text-white mt-24 sm:mt-auto">
              Github<MoveRight className="w-4 ml-2" />
            </Button>
          </a>
        </CardFooter>

      </Card>
    </div>
  );
}

export default CardProjeto2;
