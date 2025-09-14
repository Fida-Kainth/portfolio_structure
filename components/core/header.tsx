// components/core/header.tsx
import Link from 'next/link';
import Container from './container';
import Nav from './nav';
import ThemeToggle from './theme-toggle';

export default function Header() {
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
        <div className="flex items-center gap-3">
          <Nav />
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}
