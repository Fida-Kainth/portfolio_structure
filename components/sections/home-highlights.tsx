// components/sections/home-highlights.tsx
import { getEducation, getExperience } from '@/lib/content';
import Link from 'next/link';

export default async function HomeHighlights() {
  const [edu, exp] = await Promise.all([getEducation(), getExperience()]);
  const eduFirst = edu.slice(0, 1);
  const expFirst = exp.slice(0, 1);

  return (
    <section className="mt-10 grid gap-6 md:grid-cols-2">
      {/* Education preview */}
      <article className="rounded-2xl border p-5">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Latest Education</h2>
          <Link href="/education" className="text-sm underline">
            View all
          </Link>
        </div>
        {eduFirst.map((e, i) => (
          <div key={i}>
            <div className="font-medium">
              {e.level}: {e.institute}
            </div>
            <div className="text-sm text-muted-foreground">
              {e.program ? `${e.program} • ` : ''}
              {e.start?.slice(0, 4)}–{e.end?.slice(0, 4)}
              {e.location ? ` • ${e.location}` : ''}
            </div>
            {e.highlights?.length ? (
              <p className="mt-2 text-sm text-muted-foreground">{e.highlights[0]}</p>
            ) : null}
          </div>
        ))}
      </article>

      {/* Experience preview */}
      <article className="rounded-2xl border p-5">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Latest Experience</h2>
          <Link href="/experience" className="text-sm underline">
            View all
          </Link>
        </div>
        {expFirst.map((x, i) => (
          <div key={i}>
            <div className="font-medium">
              {x.role} @ {x.company}
            </div>
            <div className="text-sm text-muted-foreground">
              {x.start}–{x.end}
              {x.location ? ` • ${x.location}` : ''}
            </div>
            {x.bullets?.length ? (
              <p className="mt-2 text-sm text-muted-foreground">{x.bullets[0]}</p>
            ) : null}
          </div>
        ))}
      </article>
    </section>
  );
}
