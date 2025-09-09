import { NextResponse } from 'next/server';

export async function GET() {
  const site = 'https://your-domain.example';

  // Replace this with your real projects/posts data source.
  const items = [
    {
      title: 'Sample Project',
      link: `${site}/projects/sample-project`,
      description: 'A short summary of the project.',
      pubDate: new Date().toUTCString(),
    },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>Portfolio Feed</title>
    <link>${site}</link>
    <description>Recent projects and updates</description>
    ${items
      .map(
        (i) => `<item>
      <title>${escapeXml(i.title)}</title>
      <link>${i.link}</link>
      <description>${escapeXml(i.description)}</description>
      <pubDate>${i.pubDate}</pubDate>
    </item>`,
      )
      .join('')}
  </channel>
</rss>`;

  return new NextResponse(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
}

function escapeXml(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
