import { Mail, Phone } from "lucide-react";

const Contatos = () => {
  return (
    <div className="w-full space-y-4 p-4">
      <div className="min-w-full flex flex-col flex-wrap lg:flex-row items-center md:justify-center md:space-x-8 space-y-4 md:space-y-4 lg:space-y-0">
        <div className="flex flex-col space-y-4 items-center">
          <a
            href="https://wa.me/558491832492"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 text-base text-white md:text-lg lg:text-xl hover:text-green-500 transition-colors"
          >
            <Phone className="w-6 h-6" />
            <span>+55 (84) 9183-2492</span>
          </a>
          <a
            href="mailto:niculas20003@gmail.com"
            className="flex items-center space-x-3 text-base text-white md:text-lg lg:text-xl hover:text-blue-500 transition-colors"
          >
            <Mail className="w-6 h-6" />
            <span>niculas20003@gmail.com</span>
          </a>
        </div>
        <img src="/img/qrcode.png" className="w-[120px] h-[120px]" />
      </div>
    </div>
  );
};

export default Contatos;
