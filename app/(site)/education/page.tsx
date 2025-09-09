import Link from 'next/link';

const edu = [
  { level: 'School', slug: 'school', institute: 'ABC High School', years: '2014–2016' },
  { level: 'College', slug: 'college', institute: 'XYZ College', years: '2016–2018' },
  { level: 'University', slug: 'university', institute: 'DEF University', years: '2018–2022' },
];

export default function EducationPage() {
  return (
    <main className="container mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-semibold">Education</h1>
      <ol className="mt-8 space-y-4">
        {edu.map((e) => (
          <li key={e.slug} className="rounded-xl border p-4">
            <h2 className="text-xl font-medium">
              {e.level}: <span className="text-muted-foreground">{e.institute}</span>
            </h2>
            <p className="text-sm text-muted-foreground">{e.years}</p>
            <Link className="mt-2 inline-block underline" href={`/education/${e.slug}`}>
              View details
            </Link>
          </li>
        ))}
      </ol>
    </main>
  );
}
