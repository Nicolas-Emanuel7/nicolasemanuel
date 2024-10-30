
import { Instagram, Github, Linkedin } from 'lucide-react';

const SocialButtonsNoBorder = () => {
  return (
    <div className="flex space-x-2 mb-5 mt-4 mr-2">
      <a href="https://www.instagram.com/nicolinhaaaaaaas/?igsh=MXB0ZGpnZzk2MjdxZg%3D%3D" target="_blank" rel="noopener noreferrer">
        <button className="p-3">
          <Instagram className="w-4 h-4 text-white hover:scale-150" />
        </button>
      </a>
      <a href="https://github.com/Nicolas-Emanuel7" target="_blank" rel="noopener noreferrer">
        <button className="p-3">
          <Github className="w-4 h-4 text-white hover:scale-150" />
        </button>
      </a>
      <a href="https://www.linkedin.com/in/nicolasemanueldev7/" target="_blank" rel="noopener noreferrer">
        <button className="p-3">
          <Linkedin className="w-4 h-4 text-white hover:scale-150" />
        </button>
      </a>
    </div>
  );
};

export default SocialButtonsNoBorder;