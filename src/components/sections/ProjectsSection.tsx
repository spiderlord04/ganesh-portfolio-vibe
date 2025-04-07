
import { useEffect, useRef } from 'react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
}

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const projects: Project[] = [
    {
      title: 'Online Recipe Sharing',
      description: 'A Java-based recipe upload and browse portal that allows users to share and discover recipes.',
      tech: ['Java', 'HTML/CSS', 'MySQL'],
      image: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    },
    {
      title: 'CostMate',
      description: 'An expense manager with tracking and budget setting features to help users manage their finances.',
      tech: ['Java', 'JDBC', 'Swing/UI'],
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    },
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-in');
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="projects" className="mb-20 opacity-0" ref={sectionRef}>
      <h2 className="section-title">Projects</h2>
      <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover"
            />
            <div className="project-overlay">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="mt-2 text-sm text-gray-300">{project.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="px-2 py-1 text-xs bg-teal text-white rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
