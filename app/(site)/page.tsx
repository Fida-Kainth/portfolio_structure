import Hero from '@/components/sections/hero';
import HomeHighlights from '@/components/sections/home-highlights';
import SkillsMarquee from '@/components/sections/skills-marquee';

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="mt-10">
        <SkillsMarquee />
      </div>
      <HomeHighlights />
    </>
  );
}
