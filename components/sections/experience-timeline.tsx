// components/sections/experience-timeline.tsx
import { getExperience } from '@/lib/content';

export default async function ExperienceTimeline() {
  const items = await getExperience();

  return (
    <ul className="space-y-6">
      {items.map((x) => (
        <li key={`${x.company}-${x.role}`} className="rounded-xl border p-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-lg font-medium">
              {x.role} <span className="text-muted-foreground">@ {x.company}</span>
            </h3>
            <span className="text-sm text-muted-foreground">
              {x.start} → {x.end}
            </span>
          </div>

          {x.location && <p className="mt-1 text-sm text-muted-foreground">{x.location}</p>}

          <ul className="mt-2 list-disc pl-5">
            {x.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>

          {x.stack?.length ? (
            <p className="mt-3 text-sm text-muted-foreground">Stack: {x.stack.join(' • ')}</p>
          ) : null}
        </li>
      ))}
    </ul>
  );
}
