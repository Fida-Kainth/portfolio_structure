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
    <section className="relative overflow-hidden rounded-xl card animate-fade-up">
      {/* ✨ UI polish - Edge fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

      <ul className="flex animate-marquee whitespace-nowrap">
        {items.map((s, i) => {
          const key = s.icon && `Si${s.icon.charAt(0).toUpperCase()}${s.icon.slice(1)}`;
          const Icon = (key && (SiIcons as any)[key]) || null;

          return (
            <li
              key={`${s.name}-${i}`}
              className={`group mx-4 my-3 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                s.category === 'Language' 
                  ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20 hover:bg-blue-500/20 hover:shadow-blue-500/25'
                  : s.category === 'Framework'
                  ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20 hover:bg-purple-500/20 hover:shadow-purple-500/25'
                  : s.category === 'Tool'
                  ? 'bg-green-500/10 text-green-400 border border-green-500/20 hover:bg-green-500/20 hover:shadow-green-500/25'
                  : 'bg-orange-500/10 text-orange-400 border border-orange-500/20 hover:bg-orange-500/20 hover:shadow-orange-500/25'
              }`}
              title={
                s.level || s.years
                  ? `${s.category} • ${s.level ?? ''}${s.level && s.years ? ' • ' : ''}${
                      s.years ? `${s.years} yrs` : ''
                    }`
                  : s.category
              }
            >
              {Icon ? (
                <Icon className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
              ) : (
                <span className="h-4 w-4 rounded-full bg-current opacity-50 group-hover:opacity-100 transition-opacity duration-200" />
              )}
              <span className="opacity-90 group-hover:opacity-100 transition-opacity duration-200">{s.name}</span>
              {/* ✨ UI polish - Micro interaction indicator */}
              <span className="opacity-0 group-hover:opacity-60 transition-opacity duration-200 text-xs">
                {s.level === 'Advanced' ? '★' : s.level === 'Intermediate' ? '●' : '○'}
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
