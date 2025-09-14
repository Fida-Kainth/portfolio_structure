// app/(site)/experience/page.tsx
import ExperienceTimeline from '@/components/sections/experience-timeline';

export default function ExperiencePage() {
  return (
    <main className="container mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-semibold">Experience</h1>
      <div className="mt-8">
        <ExperienceTimeline />
      </div>
    </main>
  );
}
