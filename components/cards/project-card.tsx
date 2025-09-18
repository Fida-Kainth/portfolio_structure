import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectCard({
  title,
  slug,
  summary = 'Short one-liner about the project.',
  cover = '/images/projects/sample-cover.webp',
  tags = [],
  repoUrl,
  liveUrl,
}: {
  title: string;
  slug: string;
  summary?: string;
  cover?: string;
  tags?: string[];
  repoUrl?: string;
  liveUrl?: string;
}) {
  return (
    <div className="card group overflow-hidden hover:shadow-xl transition-all duration-300">
      <Link href={`/projects/${slug}`} className="block">
        {/* ✨ UI polish - Card hover lift */}
        <div className="aspect-[16/9] overflow-hidden bg-muted relative">
          <Image
            src={cover}
            alt={title}
            width={640}
            height={360}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        <div className="p-4">
          <h3 className="text-lg font-semibold group-hover:text-indigo-400 transition-colors duration-200">{title}</h3>
          <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{summary}</p>
          
          {/* ✨ UI polish - Tags as pills */}
          {tags.length ? (
            <div className="mt-3 flex flex-wrap gap-2">
              {tags.map((t) => (
                <span key={t} className="pill bg-indigo-500/10 text-indigo-400 border-indigo-500/20 text-xs">
                  {t}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </Link>
      
      {/* ✨ UI polish - Repo/live as icons */}
      <div className="px-4 pb-4 flex items-center gap-2">
        {repoUrl && (
          <a
            href={repoUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <Github className="h-3 w-3" />
            <span>Repo</span>
          </a>
        )}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink className="h-3 w-3" />
            <span>Live</span>
          </a>
        )}
      </div>
    </div>
  );
}
