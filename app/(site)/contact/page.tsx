export default function ContactPage() {
  return (
    <main className="container mx-auto max-w-lg px-4 py-16">
      <h1 className="text-3xl font-semibold">Contact</h1>
      <form className="mt-8 space-y-4">
        <input className="w-full rounded-lg border p-3" placeholder="Your name" />
        <input type="email" className="w-full rounded-lg border p-3" placeholder="Email" />
        <textarea className="w-full rounded-lg border p-3" rows={6} placeholder="How can I help?" />
        <button className="rounded-lg border px-4 py-2 hover:bg-accent" type="button">
          Send
        </button>
      </form>
      <p className="mt-6 text-sm text-muted-foreground">
        Or email me at{' '}
        <a className="underline" href="mailto:you@gmail.com">
          you@gmail.com
        </a>
      </p>
    </main>
  );
}
