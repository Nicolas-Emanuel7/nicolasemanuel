"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, House, User, Folder, Mails, Star } from 'lucide-react';

import Theme from '../Theme';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-fourth text-white p-4 fixed top-0 left-0 w-full z-50 h-16 flex items-center">
        <div className="container flex items-center">
          {/* Mobile Menu Button */}
          <div className="md:hidden flex">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="focus:outline-none">
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Menu Links */}
          <div className="hidden md:flex space-x-2">
            <Link href="#s1" className="hover:bg-third transition rounded px-3 py-1">Início</Link>
            <Link href="#s2" className="hover:bg-third transition rounded px-3 py-1">Sobre</Link>
            <Link href="#s3" className="hover:bg-third transition rounded px-3 py-1">Habilidades</Link>
            <Link href="#s4" className="hover:bg-third transition rounded px-3 py-1">Projeto</Link>
            <Link href="#s5" className="hover:bg-third transition rounded px-3 py-1">Contato</Link>
          </div>

          <div className="ml-2 hidden md:flex">
            <Theme />
          </div>

          <div className="text-2xl text-third-foreground hover:text-third absolute right-4 flex text-td font-bebas text-shadow">
            <Link href="#s1">Nicolas Emanuel</Link> 
          </div>
        </div>
      </nav>

      <div className={`bg-fourth fixed text-white w-[250px] top-0 left-0 h-full shadow-md p-4 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden z-50`}>
        <button onClick={() => setIsOpen(false)} className="w-full p-2">
          <X className="w-5 mb-5 text-td" />
        </button>

        {/* Links de Navegação */}
        <div className="flex flex-col flex-grow text-td">
          {[ 
            { href: "#s1", icon: <House className="w-6 h-6" />, text: "Início" },
            { href: "#s2", icon: <User className="w-6 h-6" />, text: "Sobre" },
            { href: "#s3", icon: <Star className="w-6 h-6" />, text: "Habilidades" },
            { href: "#s4", icon: <Folder className="w-6 h-6" />, text: "Projetos" },
            { href: "#s5", icon: <Mails className="w-6 h-6" />, text: "Contato" },
          ].map(({ href, icon, text }) => (
            <Link 
              key={href} 
              href={href} 
              className="flex items-center p-2 cursor-pointer hover:bg-third hover:rounded " 
              onClick={() => setIsOpen(false)} 
            > 
              {icon}
              <span className="ml-2 text-xl">{text}</span>
            </Link>
          ))}
        </div>

        {/* Botão de Troca de Tema */}
        <div className="absolute bottom-4 left-4 flex items-center space-x-2">
          <Theme />
          <span className="text-xl">Tema</span>
        </div>
      </div>
    </>
  );
}
