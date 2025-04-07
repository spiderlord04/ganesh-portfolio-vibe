import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';


interface ContactInfo {
  icon: React.ReactNode;
  label: string;
  value: string;
  link: string;
}

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const contactInfo: ContactInfo[] = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: 'Email',
      value: 'ganeshdamerla299@gmail.com',
      link: 'mailto:ganeshdamerla299@gmail.com',
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: 'Phone',
      value: '+91 8309882907',
      link: 'tel:+918309882907',
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      link: '#',
    },
    {
      icon: <Github className="h-6 w-6" />,
      label: 'GitHub',
      value: 'View GitHub Profile',
      link: '#',
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
      id="contact" 
      className={`mb-20 transition-opacity duration-500 ${isVisible ? 'opacity-100 animate-slide-in' : 'opacity-0'}`} 
      ref={sectionRef}
    >
      <h2 className="section-title">Contact Me</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {contactInfo.map((info, index) => (
          <a
            key={index}
            href={info.link}
            className="group bg-card rounded-lg p-6 shadow-md flex items-center hover:shadow-lg hover:bg-teal/10 transition-all duration-300"
            target={info.link.startsWith('http') ? '_blank' : undefined}
            rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
          >
            <div className="p-3 bg-secondary rounded-full group-hover:bg-teal group-hover:text-white transition-colors duration-300">
              {info.icon}
            </div>
            <div className="ml-4">
              <h3 className="font-medium text-muted-foreground">{info.label}</h3>
              <p className="font-semibold">{info.value}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
