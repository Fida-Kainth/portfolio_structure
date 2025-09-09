export default function ContactPanel({
  email = 'you@gmail.com',
  phone = '+1234567890',
  location = 'City, Country',
}: {
  email?: string;
  phone?: string;
  location?: string;
}) {
  return (
    <div className="rounded-xl border p-6">
      <h2 className="text-xl font-semibold">Get in touch</h2>
      <p className="mt-2 text-muted-foreground">
        I’m open to internships, junior roles, and freelance projects.
      </p>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        <a
          href={`mailto:${email}`}
          className="rounded-lg border px-4 py-2 text-center hover:bg-muted"
        >
          Email
        </a>
        <a href={`tel:${phone}`} className="rounded-lg border px-4 py-2 text-center hover:bg-muted">
          Call
        </a>
        <span className="rounded-lg border px-4 py-2 text-center text-muted-foreground">
          {location}
        </span>
      </div>
    </div>
  );
}
