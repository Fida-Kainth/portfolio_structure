import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="container mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="text-4xl font-semibold">404 — Page not found</h1>
      <p className="mt-3 text-muted-foreground">Sorry, we couldn’t find that page.</p>
      <Link className="mt-6 inline-block rounded-lg border px-4 py-2 hover:bg-accent" href="/">
        Go home
      </Link>
    </main>
  );
}
