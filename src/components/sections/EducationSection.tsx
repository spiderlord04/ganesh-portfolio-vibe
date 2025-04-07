import { useEffect, useRef, useState } from 'react';
import { School } from 'lucide-react';

interface Education {
  degree: string;
  school: string;
  duration: string;
  description: string;
}

const EducationSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const education: Education[] = [
    {
      degree: '10th Class',
      school: 'Hyderabad Kakatiya High School',
      duration: '2016 - 2017',
      description: 'Completed secondary education with distinction, focusing on science and mathematics.'
    },
    {
      degree: 'Intermediate',
      school: 'Shrinidhi Junior College',
      duration: '2017 - 2019',
      description: 'Specialized in Science stream with focus on Mathematics, Physics and Computer Science.'
    },
    {
      degree: 'B.Tech in CSE',
      school: 'Malla Reddy University',
      duration: '2019 - 2023',
      description: 'Currently pursuing Bachelor of Technology in Computer Science Engineering with specialization in Software Development.'
    }
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
      id="education" 
      className={`mb-20 transition-opacity duration-500 ${isVisible ? 'opacity-100 animate-slide-in' : 'opacity-0'}`} 
      ref={sectionRef}
    >
      <h2 className="section-title">Education</h2>
      
      <div className="mt-8 overflow-x-auto no-scrollbar">
        <div className="min-w-full inline-flex space-x-6 pb-4">
          {education.map((item, index) => (
            <div 
              key={index}
              className="bg-card rounded-lg p-6 shadow-md min-w-[300px] flex-shrink-0 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-between items-start">
                <div className="p-3 bg-secondary rounded-full">
                  <School className="h-6 w-6 text-teal" />
                </div>
                <span className="text-sm text-muted-foreground">{item.duration}</span>
              </div>
              <h3 className="mt-4 text-xl font-bold">{item.degree}</h3>
              <h4 className="text-muted-foreground">{item.school}</h4>
              <p className="mt-2 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-8">
        <div className="space-y-10">
          {education.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="ml-4">
                <h3 className="text-xl font-bold">{item.degree}</h3>
                <h4 className="text-muted-foreground">{item.school}</h4>
                <span className="text-sm text-muted-foreground">{item.duration}</span>
                <p className="mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
