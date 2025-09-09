import { siteConfig } from '@/config/site';
import type { Metadata } from 'next';

type Options = {
  title?: string;
  description?: string;
  image?: string;
  urlPath?: string;
};

export function buildMetadata(opts: Options = {}): Metadata {
  const title = opts.title ? `${opts.title} — ${siteConfig.name}` : siteConfig.name;
  const description = opts.description ?? siteConfig.description;
  const base = siteConfig.url.replace(/\/$/, '');
  const url = opts.urlPath ? `${base}${opts.urlPath}` : base;
  const image = opts.image ?? '/images/og/default-og.png';

  return {
    title,
    description,
    metadataBase: new URL(base),
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      images: [{ url: image, width: 1200, height: 630 }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    alternates: { canonical: url },
    icons: { icon: '/favicon.ico' },
  };
}

/** JSON-LD helpers */
export function personJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.author,
    url: siteConfig.url,
    sameAs: [
      siteConfig.links.github,
      siteConfig.links.linkedin,
      siteConfig.links.instagram,
      siteConfig.links.facebook,
    ].filter(Boolean),
  };
}

export function projectJsonLd(project: {
  name: string;
  url?: string;
  description?: string;
  image?: string;
  repo?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareSourceCode',
    name: project.name,
    url: project.url ?? siteConfig.url,
    codeRepository: project.repo,
    description: project.description,
    image: project.image,
    programmingLanguage: 'TypeScript',
    author: { '@type': 'Person', name: siteConfig.author, url: siteConfig.url },
  };
}
