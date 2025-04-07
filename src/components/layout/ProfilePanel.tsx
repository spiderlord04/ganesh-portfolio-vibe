import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { useEffect, useRef } from 'react';

const ProfilePanel = () => {
  const titleRef = useRef<HTMLSpanElement>(null);

  const handleScrollClick = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="left-panel animate-fade-in">
      <div className="flex flex-col items-center text-center space-y-6">
        {/* Updated Profile Image */}
        <div className="relative w-48 h-48 overflow-hidden rounded-full border-4 border-teal shadow-lg">
          <img
            src="/ganesh.jpg" // Your image from public folder
            alt="Damerla Ganesh"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-foreground">Damerla Ganesh</h1>
          <div className="h-8">
            <span
              ref={titleRef}
              className="typing-container animate-typing text-teal text-lg"
            >
              CSE Student | Java Enthusiast | Future Innovator
            </span>
          </div>
        </div>

        <div className="flex space-x-4 pt-4">
          <a
            href="mailto:ganeshdamerla299@gmail.com"
            className="p-2 bg-secondary hover:bg-teal hover:text-white rounded-full transition-colors duration-300"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
          <a
            href="tel:+918309882907"
            className="p-2 bg-secondary hover:bg-teal hover:text-white rounded-full transition-colors duration-300"
            aria-label="Phone"
          >
            <Phone size={20} />
          </a>
          <a
            href="#"
            className="p-2 bg-secondary hover:bg-teal hover:text-white rounded-full transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="#"
            className="p-2 bg-secondary hover:bg-teal hover:text-white rounded-full transition-colors duration-300"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
        </div>

        <button
          onClick={handleScrollClick}
          className="mt-8 px-6 py-2 bg-teal text-white rounded-full hover:bg-teal-dark transition-colors duration-300 flex items-center space-x-2"
        >
          <span>Explore My Work</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>

        <a
          href="#"
          download
          className="px-6 py-2 border border-teal text-teal rounded-full hover:bg-teal hover:text-white transition-colors duration-300 flex items-center space-x-2"
        >
          <span>Download CV</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ProfilePanel;
