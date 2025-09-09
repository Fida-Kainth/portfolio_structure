import Link from 'next/link';
import Container from './container';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t">
      <Container className="flex flex-col items-center justify-between gap-3 py-8 sm:flex-row">
        <p className="text-sm text-muted-foreground">© {year} Your Name. All rights reserved.</p>
        <div className="flex items-center gap-3 text-sm">
          <Link href="/privacy" className="text-muted-foreground hover:underline">
            Privacy
          </Link>
          <span aria-hidden="true">•</span>
          <Link href="/terms" className="text-muted-foreground hover:underline">
            Terms
          </Link>
          <span aria-hidden="true">•</span>
          <a
            href="mailto:you@gmail.com"
            className="text-muted-foreground hover:underline"
            rel="noopener noreferrer"
          >
            you@gmail.com
          </a>
        </div>
      </Container>
    </footer>
  );
}
