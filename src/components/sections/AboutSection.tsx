import { useEffect, useRef, useState } from 'react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
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
      id="about" 
      className={`mb-20 transition-opacity duration-500 ${isVisible ? 'opacity-100 animate-slide-in' : 'opacity-0'}`} 
      ref={sectionRef}
    >
      <h2 className="section-title">About Me</h2>
      <div className="mt-6 text-lg leading-relaxed">
        <p>
          Hello! I'm Ganesh, a passionate Computer Science Engineering student with a deep love for Java programming and web technologies. 
          My journey in tech started with curiosity about how software applications work behind the scenes, 
          which led me to dive into the world of programming.
        </p>
        <p className="mt-4">
          I enjoy solving complex problems through elegant code solutions and am constantly expanding my knowledge in software development. 
          When I'm not coding, you might find me exploring new tech trends, contributing to open-source projects, 
          or brainstorming ideas for my next application.
        </p>
        <p className="mt-4">
          I'm currently focused on deepening my expertise in Java development while also exploring frontend technologies 
          to create intuitive and responsive user interfaces. I believe in continuous learning and am always open to new challenges 
          that help me grow as a developer.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
