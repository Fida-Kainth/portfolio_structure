// components/sections/skills-marquee.tsx
import { getSkills } from '@/lib/content';
import * as SiIcons from 'react-icons/si';

type Skill = {
  name: string;
  category: 'Language' | 'Framework' | 'Tool' | 'Platform';
  icon?: string;
  level?: 'Beginner' | 'Intermediate' | 'Advanced';
  years?: number;
};

export default async function SkillsMarquee() {
  const skills = (await getSkills()) as Skill[];
  const items = [...skills, ...skills];

  return (
    <section className="relative overflow-hidden rounded-xl border">
      {/* edge fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />

      <ul className="flex animate-marquee whitespace-nowrap">
        {items.map((s, i) => {
          const key = s.icon && `Si${s.icon.charAt(0).toUpperCase()}${s.icon.slice(1)}`;
          const Icon = (key && (SiIcons as any)[key]) || null;

          return (
            <li
              key={`${s.name}-${i}`}
              className="mx-4 my-3 inline-flex items-center gap-2 rounded-lg border px-3 py-1 text-sm"
              title={
                s.level || s.years
                  ? `${s.level ?? ''}${s.level && s.years ? ' • ' : ''}${
                      s.years ? `${s.years} yrs` : ''
                    }`
                  : undefined
              }
            >
              {Icon ? <Icon className="h-4 w-4" /> : '💠'}
              <span className="opacity-80">{s.name}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
