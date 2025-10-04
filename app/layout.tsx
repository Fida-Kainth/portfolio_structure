import ErrorBoundary from '@/components/core/error-boundary';
import GoogleAnalytics from '@/components/core/google-analytics';
import PerformanceMonitor from '@/components/core/performance-monitor';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'Fida Hussain Kainth - Software Engineer & Full-Stack Developer',
    template: '%s | Fida Hussain Kainth',
  },
  description:
    'Passionate software engineer specializing in modern web solutions. Expert in React, Next.js, Node.js, and full-stack development. Available for freelance projects and collaborations.',
  keywords: [
    'software engineer',
    'full-stack developer',
    'react developer',
    'next.js developer',
    'node.js developer',
    'web developer',
    'frontend developer',
    'backend developer',
    'javascript developer',
    'typescript developer',
    'freelance developer',
    'portfolio',
    'web development',
    'software development',
  ],
  authors: [{ name: 'Fida Hussain Kainth' }],
  creator: 'Fida Hussain Kainth',
  publisher: 'Fida Hussain Kainth',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://fidakainth.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://fidakainth.dev',
    title: 'Fida Hussain Kainth - Software Engineer & Full-Stack Developer',
    description:
      'Passionate software engineer specializing in modern web solutions. Expert in React, Next.js, Node.js, and full-stack development.',
    siteName: 'Fida Hussain Kainth Portfolio',
    images: [
      {
        url: '/images/og/default-og.png',
        width: 1200,
        height: 630,
        alt: 'Fida Hussain Kainth - Software Engineer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fida Hussain Kainth - Software Engineer & Full-Stack Developer',
    description:
      'Passionate software engineer specializing in modern web solutions. Expert in React, Next.js, Node.js, and full-stack development.',
    images: ['/images/og/default-og.png'],
    creator: '@fida_kainth',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'technology',
  classification: 'Portfolio Website',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    other: [{ rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#6366f1' }],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </head>
      <body className={`${inter.className} ${inter.variable}`} data-style="a">
        <ErrorBoundary>
          <GoogleAnalytics />
          <PerformanceMonitor />
          {children}
        </ErrorBoundary>
      </body>
    </html>
  );
}
