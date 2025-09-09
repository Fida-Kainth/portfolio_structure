import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <section className="grid items-center gap-8 md:grid-cols-[1fr,320px]">
        <div>
          <h1 className="text-4xl font-bold sm:text-5xl">Hi, I’m Your Name</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Software Engineer • Building fast, delightful web apps.
          </p>
          <div className="mt-6 flex gap-3">
            <Link className="rounded-lg border px-4 py-2 hover:bg-accent" href="/projects">
              View Projects
            </Link>
            <Link className="rounded-lg border px-4 py-2 hover:bg-accent" href="/contact">
              Hire Me
            </Link>
          </div>
        </div>
        <div className="justify-self-center">
          <Image
            src="/images/profile/avatar.webp"
            alt="Profile"
            width={240}
            height={240}
            className="rounded-2xl"
          />
        </div>
      </section>
    </main>
  );
}
