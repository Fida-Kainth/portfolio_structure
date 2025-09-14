import EducationTimeline from '@/components/sections/education-timeline';
import { getEducation } from '@/lib/content';

export const metadata = { title: 'Education' };

export default async function EducationPage() {
  const items = await getEducation();
  return (
    <main className="container mx-auto max-w-4xl px-4 py-16 space-y-8">
      <h1 className="text-3xl font-semibold tracking-tight">Education</h1>
      <EducationTimeline items={items as any} />
    </main>
  );
}
