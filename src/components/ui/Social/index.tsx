
import { Instagram, Github, Linkedin } from 'lucide-react';

const SocialButtons = () => {
  return (
    <div className="flex space-x-2 mb-5 mt-4">
      <a href="https://www.instagram.com/nicolinhaaaaaaas/?igsh=MXB0ZGpnZzk2MjdxZg%3D%3D" target="_blank" rel="noopener noreferrer" className='hover:text-white'>
        <button className="p-3 rounded-full border hover:bg-third">
          <Instagram className="w-4 h-4" />
        </button>
      </a>
      <a href="https://github.com/Nicolas-Emanuel7" target="_blank" rel="noopener noreferrer" className='hover:text-white'>
        <button className="p-3 rounded-full border hover:bg-third">
          <Github className="w-4 h-4" />
        </button>
      </a>
      <a href="https://www.linkedin.com/in/nicolasemanueldev7/" target="_blank" rel="noopener noreferrer"  className='hover:text-white'>
        <button className="p-3 rounded-full border  hover:bg-third">
          <Linkedin className="w-4 h-4" />
        </button>
      </a>
    </div>
  );
};

export default SocialButtons;
