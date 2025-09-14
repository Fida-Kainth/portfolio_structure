// config/navigation.ts
import type { Route } from 'next';

export type NavItem = { href: Route; label: string };

export const mainNav: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/experience', label: 'Experience' },
  { href: '/education', label: 'Education' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
  { href: '/uses', label: 'Uses' },
];

export const footerNav: NavItem[] = [
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
];
