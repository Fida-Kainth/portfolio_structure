type Experience = {
  company: string;
  role: string;
  start: string;
  end: string;
  location?: string;
  bullets: string[];
  stack?: string[];
};

const experiences: Experience[] = [
  {
    company: 'Tech Co.',
    role: 'Software Engineering Intern',
    start: '2024-06',
    end: '2024-09',
    location: 'Remote',
    bullets: [
      'Built analytics dashboard; reduced load time by 25%',
      'Implemented CI checks and increased test coverage to 85%',
      'Collaborated with design to ship 3 features to production',
    ],
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'Node.js'],
  },
];

export default function ExperiencePage() {
  return (
    <main className="container mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-semibold">Experience</h1>
      <div className="mt-8 space-y-6">
        {experiences.map((x) => (
          <section key={x.company} className="rounded-xl border p-5">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-xl font-medium">
                {x.role} <span className="text-muted-foreground">@ {x.company}</span>
              </h2>
              <span className="text-sm text-muted-foreground">
                {x.start} → {x.end}
              </span>
            </div>
            {x.location && <p className="mt-1 text-sm text-muted-foreground">{x.location}</p>}
            <ul className="mt-3 list-disc pl-5">
              {x.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
            {x.stack?.length ? (
              <p className="mt-3 text-sm text-muted-foreground">Stack: {x.stack.join(' • ')}</p>
            ) : null}
          </section>
        ))}
      </div>
    </main>
  );
}
