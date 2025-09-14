// app/(site)/education/page.tsx
import { getEducation } from '@/lib/content';
import Link from 'next/link';

export default async function EducationPage() {
  const edu = await getEducation();

  return (
    <main className="container mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-semibold">Education</h1>
      <ol className="mt-8 space-y-4">
        {edu.map((e, i) => (
          <li key={`${e.level}-${i}`} className="rounded-xl border p-4">
            <div className="flex items-center gap-3">
              {e.media?.logo && (
                <img src={e.media.logo} alt={`${e.institute} logo`} className="h-8 w-8" />
              )}
              <h2 className="text-xl font-medium">
                {e.level}: <span className="text-muted-foreground">{e.institute}</span>
              </h2>
            </div>
            <p className="text-sm text-muted-foreground">
              {e.program} • {e.start?.slice(0, 4)}–{e.end?.slice(0, 4)}
            </p>
            <Link
              className="mt-2 inline-block underline"
              href={`/education/${e.institute.toLowerCase()}`}
            >
              View details
            </Link>
          </li>
        ))}
      </ol>
    </main>
  );
}
