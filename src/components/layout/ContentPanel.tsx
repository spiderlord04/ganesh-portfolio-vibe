import { useEffect } from 'react';
import AboutSection from '../sections/AboutSection';
import SkillsSection from '../sections/SkillsSection';
import EducationSection from '../sections/EducationSection';
import ProjectsSection from '../sections/ProjectsSection';
import ContactSection from '../sections/ContactSection';

const ContentPanel = () => {
  useEffect(() => {
    // Backup to ensure sections are visible after page load
    const timer = setTimeout(() => {
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        section.classList.remove('opacity-0');
        section.classList.add('opacity-100', 'animate-slide-in');
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="right-panel">
      <AboutSection />
      <SkillsSection />
      <EducationSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default ContentPanel;
