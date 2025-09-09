type Props = { params: { slug: string } };

function toTitle(slug: string) {
  return slug
    .split('-')
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(' ');
}

export default function ProjectCaseStudy({ params }: Props) {
  const title = toTitle(params.slug);
  return (
    <main className="container mx-auto max-w-3xl px-4 py-16 prose prose-neutral dark:prose-invert">
      <h1>{title}</h1>
      <p>
        Write your case study here following a clear structure:
        <strong> Problem → Approach → Result.</strong>
      </p>
      <h2>Problem</h2>
      <p>What was the user/business problem? Constraints? Metrics?</p>
      <h2>Approach</h2>
      <ul>
        <li>Architecture & key decisions</li>
        <li>Tech stack and trade-offs</li>
        <li>Interesting challenges</li>
      </ul>
      <h2>Result</h2>
      <ul>
        <li>Performance or revenue impact</li>
        <li>User feedback</li>
        <li>What you’d improve next</li>
      </ul>
    </main>
  );
}
