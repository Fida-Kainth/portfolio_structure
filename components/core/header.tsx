// components/core/header.tsx
'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import Container from './container';
import Nav from './nav';
import ThemeStyleToggle from './theme-style-toggle';
import ThemeToggle from './theme-toggle';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link href="/" className="text-base font-semibold tracking-tight hover:opacity-90">
            Fida Hussain Kainth
          </Link>
          <span className="hidden text-xs text-muted-foreground sm:inline">
            / Software Engineer
          </span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-3">
          <Nav />
          <ThemeStyleToggle />
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {/* ✨ UI polish - Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur-sm">
          <Container className="py-4">
            <div className="flex flex-col gap-4">
              <Nav />
              <div className="flex items-center justify-between pt-2 border-t">
                <span className="text-sm text-muted-foreground">Style</span>
                <ThemeStyleToggle />
              </div>
              <div className="flex items-center justify-between pt-2 border-t">
                <span className="text-sm text-muted-foreground">Theme</span>
                <ThemeToggle />
              </div>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
