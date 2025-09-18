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
    <>
      {/* ✨ UI polish - Responsive masonry grid */}
      <ul className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {projects.map((p, index) => (
          <li key={p.slug} className="break-inside-avoid animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
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
    </>
  );
}
