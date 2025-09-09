'use client';

type Skill = { name: string; icon?: React.ReactNode };

export default function SkillsMarquee({
  skills = [
    { name: 'TypeScript' },
    { name: 'Next.js' },
    { name: 'React' },
    { name: 'Node.js' },
    { name: 'Tailwind CSS' },
    { name: 'PostgreSQL' },
    { name: 'Docker' },
  ],
}: {
  skills?: Skill[];
}) {
  // Duplicate list to create a seamless marquee loop
  const items = [...skills, ...skills];

  return (
    <div className="relative overflow-hidden rounded-xl border">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />

      <ul className="flex animate-marquee whitespace-nowrap">
        {items.map((s, i) => (
          <li
            key={`${s.name}-${i}`}
            className="mx-4 my-3 inline-flex items-center gap-2 rounded-lg border px-3 py-1 text-sm"
          >
            {s.icon ?? '💠'} <span className="opacity-80">{s.name}</span>
          </li>
        ))}
      </ul>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
          will-change: transform;
        }
      `}</style>
    </div>
  );
}
