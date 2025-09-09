import Link from 'next/link';

type Project = { title: string; slug: string; tags: string[] };

const projects: Project[] = [
  { title: 'Sample Project', slug: 'sample-project', tags: ['web', 'frontend'] },
  { title: 'Another Project', slug: 'another-project', tags: ['backend'] },
];

export default function ProjectsPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-semibold">Projects</h1>
      <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <li key={p.slug} className="rounded-xl border p-4">
            <h2 className="text-xl font-medium">{p.title}</h2>
            <p className="text-sm text-muted-foreground">{p.tags.join(' • ')}</p>
            <Link className="mt-2 inline-block underline" href={`/projects/${p.slug}`}>
              View case study
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
