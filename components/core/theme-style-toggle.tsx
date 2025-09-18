'use client';

import { Palette } from 'lucide-react';
import { useEffect, useState } from 'react';

/**
 * Style variant toggle component for switching between A/B/C design variants.
 * Controls the data-style attribute on the body element.
 */
export default function ThemeStyleToggle() {
  const [mounted, setMounted] = useState(false);
  const [currentStyle, setCurrentStyle] = useState<'a' | 'b' | 'c'>('a');

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('portfolio-style');
    const initialStyle = (stored as 'a' | 'b' | 'c') || 'a';
    setCurrentStyle(initialStyle);
    document.body.setAttribute('data-style', initialStyle);
  }, []);

  function toggleStyle() {
    const styles: ('a' | 'b' | 'c')[] = ['a', 'b', 'c'];
    const currentIndex = styles.indexOf(currentStyle);
    const nextIndex = (currentIndex + 1) % styles.length;
    const nextStyle = styles[nextIndex];
    
    setCurrentStyle(nextStyle);
    document.body.setAttribute('data-style', nextStyle);
    localStorage.setItem('portfolio-style', nextStyle);
  }

  function getStyleLabel(style: 'a' | 'b' | 'c') {
    switch (style) {
      case 'a': return 'Soft Glass';
      case 'b': return 'Neumorph';
      case 'c': return 'Wireframe';
      default: return 'Soft Glass';
    }
  }

  if (!mounted) return null;

  return (
    <button
      onClick={toggleStyle}
      aria-label={`Current style: ${getStyleLabel(currentStyle)}. Click to switch style.`}
      className="inline-flex h-9 items-center justify-center rounded-lg border px-3 text-sm hover:bg-muted transition-colors gap-2"
      title={`Switch from ${getStyleLabel(currentStyle)} to ${
        currentStyle === 'a' ? getStyleLabel('b') : 
        currentStyle === 'b' ? getStyleLabel('c') : 
        getStyleLabel('a')
      }`}
    >
      <Palette className="h-4 w-4" />
      <span className="hidden sm:inline text-xs">
        {getStyleLabel(currentStyle)}
      </span>
    </button>
  );
}
