// components/sections/education-timeline.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

type EducationItem = {
  level: 'School' | 'College' | 'University';
  institute: string;
  program?: string;
  start?: string;
  end?: string;
  location?: string;
  media?: { logo?: string; photo?: string; alt?: string };
  highlights?: string[];
  href?: string; // optional explicit link override
};

export default function EducationTimeline({ items }: { items: EducationItem[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {items.map((e, i) => {
        const years = e.start && e.end ? `${e.start} – ${e.end}` : e.start || e.end || '';
        const slug =
          e.institute
            ?.toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^a-z0-9-]/g, '') || '';
        const to = e.href ?? (slug ? `/education/${slug}` : undefined);

        return (
          <motion.article
            key={`${e.level}-${e.institute}-${i}`}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20% 0% -10% 0%' }}
            transition={{ duration: 0.35, delay: i * 0.06 }}
            className="rounded-2xl border p-4"
          >
            <div className="text-xs uppercase text-blue-600">{e.level}</div>

            <h3 className="mt-1 text-lg font-medium">
              {e.institute}
              {e.program ? (
                <span className="ml-2 text-sm text-muted-foreground">• {e.program}</span>
              ) : null}
            </h3>

            {(years || e.location) && (
              <p className="text-sm text-muted-foreground">
                {years}
                {e.location ? ` • ${e.location}` : ''}
              </p>
            )}

            {e.highlights?.length ? (
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                {e.highlights.map((h, j) => (
                  <li key={j}>{h}</li>
                ))}
              </ul>
            ) : null}

            {to && (
              <Link
                href={to as any}
                className="mt-3 inline-block text-sm underline underline-offset-4"
              >
                View details
              </Link>
            )}
          </motion.article>
        );
      })}
    </div>
  );
}
