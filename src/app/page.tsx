import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar/avatar";
import { Button } from "@/components/ui/Button/button";
import CardSobre from "@/components/ui/Card-Sobre";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/Carrossel/carousel";
import Contatos from "@/components/ui/Contact";
import Habilidades from "@/components/ui/Habilidades";
import  CardProjeto1  from "@/components/ui/Projetos/Projeto1";
import  CardProjeto2 from "@/components/ui/Projetos/Projeto2";
import  CardProjeto3  from "@/components/ui/Projetos/Projeto3";
import SocialButtons from "@/components/ui/Social";
import SocialButtonsNoBorder from "@/components/ui/Social/social";
import TerminalEffect from "@/components/ui/Terminal";


export default function Home() {
  return (
    <main className="overflow-x-hidden font-ovo min-h-screen flex-grow">
    <section className="min-h-screen flex items-center justify-center w-full shadow-xl">
        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 p-4 w-full max-w-6xl relative z-10">
          
          <div className="flex flex-col items-center md:items-start text-center md:text-left w-full">
            <div className="flex items-center mb-2">
              <div className="h-[2px] w-11 bg-third dark:bg-white mr-2"></div>
              <p className="py-1">Olá, eu me chamo</p>
            </div>
            <h1 className="font-bebas text-6xl sm:text-6xl md:text-8xl lg:text-9xl text-third text-shadow">
              <span className="block md:inline">Nicolas</span>
              <span className="block md:inline"> Emanuel</span>
            </h1>
            <TerminalEffect />
            <div className="flex">
              <SocialButtons />
            </div>
            <a href="https://wa.me/558491832492">
              <Button className="tracking-wider bg-third hover:bg-third-foreground" style={{ fontVariant: 'small-caps' }}>Entre em contato agora!</Button>
            </a>
          </div>

          <div className="bg-gray-950 p-1 flex justify-center items-center rounded-full relative">
      
            <div className="absolute inset-0 flex justify-center items-center overflow-hidden rounded-full">
              <div className="relative w-full h-full flex justify-center items-center">
                <div className="sm:w-56 w-32 h-full bg-gradient-to-r from-third to-third-foreground animate-border-spin"></div>
              </div>
            </div>

            <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 relative rounded-full">
              <img
                src="/img/foto-perfil.jpeg"
                className="w-full h-full object-cover rounded-full"
                alt="Imagem de Perfil"
              />
            </div>
          </div>



        </div>
      </section>


      <section id="s2" className="min-h-screen scroll-offset p-4">
        <div className="flex flex-col items-center text-center mb-4">
          <p className="text-sm font-medium">Conheça mais</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-third">Sobre Mim</h1>
        </div>

        <div className="flex flex-col lg:flex-row lg:mt-20 items-center justify-center gap-8">
          <img
            src="/img/foto-perfil-2.jpeg"
            className="rounded-full w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 object-cover shadow-lg shadow-gray-800"
            alt="Imagem de Perfil"
          />
        <div className="max-w-md text-center">
            <div className="p-4 mb-3 rounded-lg">
                Desenvolvedor Full-Stack em formação especializado em Python, HTML, CSS e JavaScript. Busco oportunidades para aplicar minhas habilidades em um ambiente profissional. Possuo conhecimentos em Django e React.js. Além de inglês avançado.
            </div>
            <Button className="mt-4 px-10 bg-third hover:bg-third-foreground">Baixar CV</Button>
        </div>
   
        </div>
        <div className="flex justify-center mt-20 lg:mt-40">
        <CardSobre />
        </div> 
      </section>

      <section className="w-full h-[100px] bg-third-foreground flex items-center justify-end">
      <SocialButtonsNoBorder/>
      </section>

      <section id="s3" className="min-h-screen scroll-offset flex flex-col">
        <div className="flex flex-col items-center text-center p-4">
          <p className="text-sm font-medium">Explore minhas</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-third">Habilidades</h1>
        </div>

        <div className="flex-grow flex items-center justify-center relative z-10">
          <Habilidades />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-third -z-10" /> 
        </div>
      </section>

      <section id="s4" className="min-h-screen scroll-offset p-4 flex flex-col">
        <div className="flex flex-col items-center text-center mb-2">
          <p className="text-sm font-medium">Veja os meus</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-third">Projetos</h1>
        </div>
        
        <div className="mt-10">
        <Carousel>
          <CarouselContent>
            <CarouselItem><CardProjeto1 /></CarouselItem>
            <CarouselItem><CardProjeto2 /></CarouselItem>
            <CarouselItem><CardProjeto3 /></CarouselItem>
          </CarouselContent>
          <CarouselPrevious  className="absolute left-0 top-1/2 transform -translate-y-1/2 sm:inline-flex hidden items-center justify-center" />
          <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 sm:inline-flex hidden items-center justify-center" />
        </Carousel>
  
        </div>
      </section>

      
      <section id="s5" className="min-h-screen scroll-offset p-4">
        <div className="flex flex-col items-center text-center mb-8">
          <p className="text-sm font-medium">Entre em</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-third">Contato</h1>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-stretch min-h-[50vh]">
          
          <div className="md:w-1/4 text-center p-4 flex flex-col items-center justify-center sm:border-r">
          <Avatar className="w-16 h-16  mb-3">
            <AvatarImage src="/img/foto-perfil-2.jpeg" />
            <AvatarFallback>NE</AvatarFallback>
          </Avatar>
            <p className="text-xl font-semibold text-third">Nicolas Emanuel</p>
            <p className="text-[12px]">Desenvolvedor Fullstack</p>
            <p className="mb-8 mt-2">Estou disponível para conversas e oportunidades. Sinta-se à vontade para me contatar</p>
            <SocialButtons/>
          </div>

          <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-third">
            <Contatos />
          </div>

        </div>
      </section>

     
      <footer className="bg-third w-full h-20">
      <div className="flex justify-end items-center">
      <SocialButtonsNoBorder />
      </div>
      </footer>

    </main>
  );
}
