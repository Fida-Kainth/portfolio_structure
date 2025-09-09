'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/about', label: 'About' },
  { href: '/experience', label: 'Experience' },
  { href: '/education', label: 'Education' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
  { href: '/uses', label: 'Uses' },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
      {links.map((l) => {
        const active =
          l.href === '/'
            ? pathname === '/'
            : pathname === l.href || pathname.startsWith(`${l.href}/`);

        return (
          <Link
            key={l.href}
            href={l.href}
            aria-current={active ? 'page' : undefined}
            className={`rounded-lg px-3 py-2 text-sm transition
              ${active ? 'bg-muted text-foreground' : 'text-muted-foreground hover:bg-muted'}`}
          >
            {l.label}
          </Link>
        );
      })}
    </nav>
  );
}
