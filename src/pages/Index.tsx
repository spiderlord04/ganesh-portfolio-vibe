
import { useEffect } from 'react';
import ThemeToggle from '@/components/theme/ThemeToggle';
import ProfilePanel from '@/components/layout/ProfilePanel';
import ContentPanel from '@/components/layout/ContentPanel';
import Navigation from '@/components/layout/Navigation';

const Index = () => {
  useEffect(() => {
    // Set page title
    document.title = "Damerla Ganesh - Portfolio";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />
      <ProfilePanel />
      <ContentPanel />
      <Navigation />
    </div>
  );
};

export default Index;
