import React from 'react';

/**
 * Safe no-op analytics that won’t crash builds if you haven't installed anything.
 * Swap with real providers later (Vercel Analytics, Plausible, GA4).
 */

export function VercelAnalytics() {
  // If you later add: import { Analytics } from '@vercel/analytics/react';
  // return <Analytics />;
  return null;
}

export function Plausible({ domain }: { domain?: string }) {
  if (!domain) return null;
  return <script defer data-domain={domain} src="https://plausible.io/js/script.js" />;
}

export function GoogleAnalytics({ id }: { id?: string }) {
  if (!id) return null;
  return (
    <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${id}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${id}');
          `,
        }}
      />
    </>
  );
}
