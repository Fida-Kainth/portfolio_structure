import { getExperience } from '@/lib/content';

export default async function ExperienceTimeline() {
  const items = await getExperience();

  return (
    <div className="relative">
      {/* ✨ UI polish - Left rail with checkpoints */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 opacity-30" />
      
      <ul className="space-y-8">
        {items.map((x, index) => (
          <li key={`${x.company}-${x.role}`} className="relative animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
            {/* ✨ UI polish - Timeline checkpoint */}
            <div className="absolute left-5 top-6 w-3 h-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 border-2 border-background shadow-lg" />
            
            <div className="ml-12">
              <div className="card p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <h3 className="text-lg font-semibold">
                    {x.role} <span className="text-muted-foreground">@ {x.company}</span>
                  </h3>
                  <span className="pill bg-indigo-500/10 text-indigo-400 border-indigo-500/20">
                    {x.start} → {x.end}
                  </span>
                </div>
                
                {x.location && (
                  <p className="mb-4 text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-current opacity-60" />
                    {x.location}
                  </p>
                )}
                
                <ul className="space-y-2 mb-4">
                  {x.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                
                {x.stack?.length ? (
                  <div className="flex flex-wrap gap-2">
                    {x.stack.map((tech) => (
                      <span key={tech} className="pill bg-purple-500/10 text-purple-400 border-purple-500/20 text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
