import Image from 'next/image';

type Props = { params: { institute: string } };

const MAP: Record<string, { title: string; photo: string; desc: string; highlights?: string[] }> = {
  school: {
    title: 'ABC High School',
    photo: '/images/institutes/school.webp',
    desc: 'Matriculation with science electives and robotics club participation.',
    highlights: ['Top 5% in mathematics', 'Robotics club lead', 'Inter-school coding contest'],
  },
  college: {
    title: 'XYZ College',
    photo: '/images/institutes/college.webp',
    desc: 'FSc Pre-Engineering with focus on calculus and physics. Active in tech societies.',
    highlights: ['STEM society volunteer', 'Physics olympiad participant'],
  },
  university: {
    title: 'DEF University',
    photo: '/images/institutes/university.webp',
    desc: 'BS Computer Science with specialization in Web Systems and Human-Computer Interaction.',
    highlights: ['Graduated with distinction', 'Capstone in Next.js', 'Teaching assistant'],
  },
};

export default function InstitutePage({ params }: Props) {
  const data = MAP[params.institute];
  if (!data) {
    return (
      <main className="container mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-3xl font-semibold">Institute</h1>
        <p className="mt-2 text-muted-foreground">We don’t have details for this institute.</p>
      </main>
    );
  }
  return (
    <main className="container mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-semibold">{data.title}</h1>
      <div className="mt-4">
        <Image
          src={data.photo}
          alt={data.title}
          width={960}
          height={540}
          className="rounded-xl"
          priority
        />
        <p className="mt-4 text-muted-foreground">{data.desc}</p>
        {data.highlights?.length ? (
          <>
            <h2 className="mt-6 text-xl font-medium">Highlights</h2>
            <ul className="mt-2 list-disc pl-5">
              {data.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </>
        ) : null}
      </div>
    </main>
  );
}
