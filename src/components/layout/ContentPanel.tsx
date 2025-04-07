
import AboutSection from '../sections/AboutSection';
import SkillsSection from '../sections/SkillsSection';
import EducationSection from '../sections/EducationSection';
import ProjectsSection from '../sections/ProjectsSection';
import ContactSection from '../sections/ContactSection';

const ContentPanel = () => {
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
