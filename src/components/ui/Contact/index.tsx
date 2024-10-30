import { Mail, Phone } from "lucide-react";

const Contatos = () => {
  return (
    <div className="w-full p-4">
      <div className="flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-8">
        <div className="flex flex-col space-y-4 items-center">
          <a
            href="https://wa.me/558491832492"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 text-base text-white md:text-lg lg:text-xl hover:text-green-500 transition-colors"
          >
            <Phone className="w-6 h-6" />
            <span className="block text-center">+55 (84) 9183-2492</span>
          </a>
          <a
            href="mailto:niculas20003@gmail.com"
            className="flex items-center space-x-3 text-base text-white md:text-lg lg:text-xl hover:text-blue-500 transition-colors"
          >
            <Mail className="w-6 h-6" />
            <span className="block text-center">niculas20003@gmail.com</span>
          </a>
        </div>
        <img
          src="/img/qrcode.png"
          alt="QR Code"
          className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain"
        />
      </div>
    </div>
  );
};

export default Contatos;

