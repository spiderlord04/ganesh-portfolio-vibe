
import { useEffect, useState } from 'react';
import { User, Code, GraduationCap, FolderKanban, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState<string>('about');

  const navItems = [
    { id: 'about', label: 'About', icon: <User className="h-5 w-5" /> },
    { id: 'skills', label: 'Skills', icon: <Code className="h-5 w-5" /> },
    { id: 'education', label: 'Education', icon: <GraduationCap className="h-5 w-5" /> },
    { id: 'projects', label: 'Projects', icon: <FolderKanban className="h-5 w-5" /> },
    { id: 'contact', label: 'Contact', icon: <Mail className="h-5 w-5" /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      
      let currentSection = 'about';
      sections.forEach(section => {
        if (!section) return;
        
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 200 && 
            window.scrollY < sectionTop + sectionHeight - 200) {
          currentSection = section.id;
        }
      });
      
      setActiveSection(currentSection);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-card/80 backdrop-blur-sm px-4 py-3 rounded-full shadow-lg border border-border">
      <ul className="flex space-x-6">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "flex flex-col items-center p-1 rounded-lg transition-colors duration-300",
                activeSection === item.id 
                  ? "text-teal" 
                  : "text-muted-foreground hover:text-foreground"
              )}
              aria-label={item.label}
            >
              {item.icon}
              <span className="text-xs mt-1">{item.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
