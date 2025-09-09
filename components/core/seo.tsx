/**
 * Lightweight JSON-LD helper to embed structured data.
 * Use per-page for Person/Project/etc. Place inside the page component.
 *
 * Example:
 *   <SEO
 *     jsonLd={{
 *       "@context":"https://schema.org",
 *       "@type":"Person",
 *       name:"Your Name",
 *       url:"https://your-domain.example",
 *       sameAs:["https://github.com/you","https://linkedin.com/in/you"]
 *     }}
 *   />
 */
export default function SEO({ jsonLd }: { jsonLd: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify with spacing for readability
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd, null, 2) }}
    />
  );
}
