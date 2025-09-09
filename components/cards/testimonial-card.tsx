type Props = {
  quote: string;
  author: string;
  role?: string;
  avatarUrl?: string;
};

export default function TestimonialCard({ quote, author, role, avatarUrl }: Props) {
  return (
    <figure className="rounded-xl border p-5">
      <blockquote className="text-base">“{quote}”</blockquote>
      <figcaption className="mt-3 text-sm text-muted-foreground">
        <div className="font-medium text-foreground">{author}</div>
        {role ? <div>{role}</div> : null}
      </figcaption>
    </figure>
  );
}
