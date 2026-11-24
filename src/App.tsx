import { useState, useEffect, useCallback } from 'react';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Statistics } from './components/Statistics';
import { AboutUs } from './components/AboutUs';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Clients } from './components/Clients';
import { Careers } from './components/Careers';
import { ContactUs } from './components/ContactUs';
import { Footer } from './components/Footer';

const TRACKED_SECTIONS = [
  'home',
  'about',
  'services',
  'projects',
  'clients',
  'careers',
  'contact',
];

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');

  const handleNavigate = useCallback((targetId: string, navId: string) => {
    setActiveSection(navId);
    if (targetId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(targetId);
    if (element) {
      const navbarOffset = 68;
      const top = element.getBoundingClientRect().top + window.scrollY - navbarOffset;
      window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection('home');
        return;
      }

      const scrollAnchor = window.scrollY + 130;
      for (let i = TRACKED_SECTIONS.length - 1; i >= 0; i -= 1) {
        const id = TRACKED_SECTIONS[i];
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollAnchor) {
          setActiveSection(id);
          return;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#071E4B]">
      <TopBar />
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      <main className="flex-1">
        <Hero />
        <Statistics />
        <AboutUs />
        <Services />
        <Projects />
        <Clients />
        <Careers />
        <ContactUs />
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
