import { useEffect, useRef, useState } from 'react';
import { Database, Code2, FileJson, PaintBucket } from 'lucide-react';

interface Skill {
  name: string;
  percentage: number;
  icon: React.ReactNode;
}

const SkillsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const skills: Skill[] = [
    {
      name: 'Java',
      percentage: 85,
      icon: <Database className="h-6 w-6 text-teal" />,
    },
    {
      name: 'HTML',
      percentage: 70,
      icon: <Code2 className="h-6 w-6 text-teal" />,
    },
    {
      name: 'JavaScript',
      percentage: 65,
      icon: <FileJson className="h-6 w-6 text-teal" />,
    },
    {
      name: 'UI/UX Basics',
      percentage: 60,
      icon: <PaintBucket className="h-6 w-6 text-teal" />,
    },
  ];
  
  useEffect(() => {
    // Ensure visibility even if animation fails
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      clearTimeout(timer);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="skills" 
      className={`mb-20 transition-opacity duration-500 ${isVisible ? 'opacity-100 animate-slide-in' : 'opacity-0'}`} 
      ref={sectionRef}
    >
      <h2 className="section-title">Skills</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center mb-4">
              {skill.icon}
              <h3 className="ml-2 text-xl font-semibold">{skill.name}</h3>
            </div>
            <div className="skill-bar">
              <div 
                className="skill-progress" 
                style={{ 
                  width: isVisible ? `${skill.percentage}%` : '0%',
                  transitionDelay: `${index * 0.2}s`
                }}
              ></div>
            </div>
            <div className="mt-2 text-right text-sm text-muted-foreground">
              {skill.percentage}%
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
