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
    <div className="relative">
      {/* ✨ UI polish - Left rail with checkpoints */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 opacity-30" />

      <ol className="space-y-8">
        {items.map((e, i) => (
          <li
            key={`${e.level}-${i}`}
            className="relative animate-fade-up"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            {/* ✨ UI polish - Timeline checkpoint */}
            <div className="absolute left-5 top-6 w-3 h-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 border-2 border-background shadow-lg" />

            <div className="ml-12">
              <div className="card p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  {e.media?.logo && (
                    <div className="flex-shrink-0">
                      <Image
                        src={e.media.logo}
                        alt={e.media.alt || e.institute}
                        width={40}
                        height={40}
                        className="h-10 w-10 rounded-full border-2 border-white/20 bg-white/5 object-contain p-1"
                      />
                    </div>
                  )}
                  <div>
                    <h3 className="text-lg font-semibold">
                      {e.level}: <span className="text-muted-foreground">{e.institute}</span>
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {e.program ? `${e.program} • ` : ''}
                      {e.start && e.end ? `${e.start} – ${e.end}` : e.start || e.end}
                      {e.location ? ` • ${e.location}` : ''}
                    </p>
                  </div>
                </div>

                {e.highlights?.length ? (
                  <ul className="space-y-2 mb-4">
                    {e.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}

                {e.media?.photo && (
                  <div className="mt-4 overflow-hidden rounded-xl">
                    <Image
                      src={e.media.photo}
                      alt={e.media.alt || e.institute}
                      width={1000}
                      height={600}
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
