import Image from 'next/image';
import Link from 'next/link';

export default function ProjectCard({
  title,
  slug,
  summary = 'Short one-liner about the project.',
  cover = '/images/projects/sample-cover.webp',
  tags = [],
}: {
  title: string;
  slug: string;
  summary?: string;
  cover?: string;
  tags?: string[];
}) {
  return (
    <Link
      href={`/projects/${slug}`}
      className="group block rounded-xl border p-3 transition hover:shadow-md"
    >
      <div className="aspect-[16/9] overflow-hidden rounded-lg bg-muted">
        <Image
          src={cover}
          alt={title}
          width={640}
          height={360}
          className="h-full w-full object-cover transition group-hover:scale-[1.02]"
        />
      </div>
      <h3 className="mt-3 text-lg font-medium group-hover:underline">{title}</h3>
      <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{summary}</p>
      {tags.length ? (
        <div className="mt-2 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="rounded-md border px-2 py-0.5 text-xs text-muted-foreground">
              {t}
            </span>
          ))}
        </div>
      ) : null}
    </Link>
  );
}
