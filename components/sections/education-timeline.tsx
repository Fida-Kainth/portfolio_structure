type Education = {
  level: 'School' | 'College' | 'University';
  institute: string;
  years: string;
  href?: string;
  highlights?: string[];
};

export default function EducationTimeline({
  items = [
    { level: 'School', institute: 'ABC High School', years: '2014–2016' },
    { level: 'College', institute: 'XYZ College', years: '2016–2018' },
    { level: 'University', institute: 'DEF University', years: '2018–2022' },
  ],
}: {
  items?: Education[];
}) {
  return (
    <ol className="relative border-l pl-6">
      {items.map((e, i) => (
        <li key={`${e.level}-${i}`} className="mb-8">
          <div className="absolute -left-2.5 mt-1.5 h-2.5 w-2.5 rounded-full border bg-background" />
          <h3 className="text-lg font-medium">
            {e.level}: <span className="text-muted-foreground">{e.institute}</span>
          </h3>
          <p className="text-sm text-muted-foreground">{e.years}</p>
          {e.highlights?.length ? (
            <ul className="mt-2 list-disc pl-6 text-sm">
              {e.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          ) : null}
          {e.href ? (
            <a className="mt-2 inline-block text-sm underline" href={e.href}>
              View details
            </a>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
