// app/(site)/page.tsx
import Hero from '@/components/sections/hero';
import SkillsMarquee from '@/components/sections/skills-marquee';
// (optionally) import ProjectsGrid, etc.

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="mt-10">
        <SkillsMarquee />
      </div>
      {/* <ProjectsGrid /> ... */}
    </>
  );
}
