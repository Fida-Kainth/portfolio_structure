import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://your-domain.example';
  const now = new Date();

  const routes = ['', '/about', '/experience', '/education', '/projects', '/contact', '/uses'];

  return routes.map((r) => ({
    url: `${base}${r}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: r === '' ? 1 : 0.7,
  }));
}
