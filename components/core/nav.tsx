// components/core/nav.tsx
'use client';

import { mainNav } from '@/config/navigation';
import { useEffect, useState } from 'react';

export default function Nav() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = mainNav.map(nav => nav.href.substring(1)); // Remove #
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const sectionId = href.substring(1); // Remove #
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <nav className="flex items-center gap-6 text-sm font-medium">
      {mainNav.map(({ href, label }) => {
        const sectionId = href.substring(1); // Remove #
        const active = activeSection === sectionId;
        return (
          <button
            key={href}
            onClick={() => scrollToSection(href)}
            className={`relative transition-colors duration-200 ${
              active
                ? 'text-foreground'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {label}
            {/* ✨ UI polish - Active link underline animation */}
            {active && (
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full animate-scale-in" />
            )}
          </button>
        );
      })}
    </nav>
  );
}
