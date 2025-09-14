// components/core/nav.tsx
'use client';

import { mainNav } from '@/config/navigation';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-4 text-sm font-medium">
      {mainNav.map(({ href, label }) => {
        const active = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className={
              active
                ? 'text-foreground'
                : 'text-muted-foreground hover:text-foreground transition-colors'
            }
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
