import Image from 'next/image';

type Education = {
  level: 'School' | 'College' | 'University';
  institute: string;
  program?: string;
  start?: string;
  end?: string;
  location?: string;
  media?: { logo?: string; photo?: string; alt?: string };
  highlights?: string[];
};

export default function EducationTimeline({ items }: { items: Education[] }) {
  return (
    <ol className="relative border-l pl-6">
      {items.map((e, i) => (
        <li key={`${e.level}-${i}`} className="mb-10 ml-2">
          <div className="absolute -left-2.5 mt-2 h-2.5 w-2.5 rounded-full border bg-background" />

          <div className="flex items-center gap-3">
            {e.media?.logo && (
              <Image
                src={e.media.logo}
                alt={e.media.alt || e.institute}
                width={32}
                height={32}
                className="h-8 w-8 rounded-full border bg-white object-contain p-1"
              />
            )}
            <h3 className="text-lg font-semibold">
              {e.level}: <span className="text-muted-foreground">{e.institute}</span>
            </h3>
          </div>

          <p className="mt-1 text-sm text-muted-foreground">
            {e.program ? `${e.program} • ` : ''}
            {e.start && e.end ? `${e.start} – ${e.end}` : e.start || e.end}
            {e.location ? ` • ${e.location}` : ''}
          </p>

          {e.highlights?.length ? (
            <ul className="mt-2 list-disc pl-6 text-sm text-muted-foreground">
              {e.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          ) : null}

          {e.media?.photo && (
            <Image
              src={e.media.photo}
              alt={e.media.alt || e.institute}
              width={600}
              height={340}
              className="mt-3 rounded-xl border object-cover"
            />
          )}
        </li>
      ))}
    </ol>
  );
}
