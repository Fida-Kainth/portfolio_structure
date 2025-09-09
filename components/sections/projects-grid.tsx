import ProjectCard from '../cards/project-card';

type Project = {
  title: string;
  slug: string;
  summary?: string;
  cover?: string;
  tags?: string[];
};

export default function ProjectsGrid({
  projects = [
    {
      title: 'Sample Project',
      slug: 'sample-project',
      cover: '/images/projects/sample-cover.webp',
      tags: ['web', 'frontend'],
    },
    {
      title: 'Another Project',
      slug: 'another-project',
      cover: '/images/projects/sample-cover.webp',
      tags: ['backend'],
    },
  ],
}: {
  projects?: Project[];
}) {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((p) => (
        <li key={p.slug}>
          <ProjectCard
            title={p.title}
            slug={p.slug}
            summary={p.summary}
            cover={p.cover}
            tags={p.tags}
          />
        </li>
      ))}
    </ul>
  );
}
