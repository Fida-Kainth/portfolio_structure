// components/core/footer.tsx
import { footerNav } from '@/config/navigation';
import Link from 'next/link';
import Container from './container';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t">
      <Container className="flex flex-col items-center justify-between gap-3 py-8 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {year} Fida Hussain Kainth. All rights reserved.
        </p>
        <div className="flex items-center gap-3 text-sm">
          {footerNav.map((item, idx) => (
            <span key={item.href} className="flex items-center gap-3">
              <Link href={item.href} className="text-muted-foreground hover:underline">
                {item.label}
              </Link>
              {idx < footerNav.length - 1 && <span aria-hidden="true">•</span>}
            </span>
          ))}
          <span aria-hidden="true">•</span>
          <a
            href="mailto:fidakainth@gmail.com"
            className="text-muted-foreground hover:underline"
            rel="noopener noreferrer"
          >
            fidakainth@gmail.com
          </a>
        </div>
      </Container>
    </footer>
  );
}
