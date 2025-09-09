import Image from 'next/image';
import Link from 'next/link';

type Props = {
  name?: string;
  title?: string;
  subtitle?: string;
  avatarSrc?: string;
};

export default function Hero({
  name = 'Your Name',
  title = 'Software Engineer',
  subtitle = 'I build fast, accessible web apps with a focus on great UX.',
  avatarSrc = '/images/profile/avatar.webp',
}: Props) {
  return (
    <section className="grid items-center gap-8 md:grid-cols-[1fr,280px]">
      <div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Hi, I’m {name}</h1>
        <p className="mt-2 text-xl text-muted-foreground">{title}</p>
        <p className="mt-4 max-w-prose text-lg text-muted-foreground">{subtitle}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link className="rounded-lg border px-4 py-2 hover:bg-muted" href="/projects">
            View Projects
          </Link>
          <Link className="rounded-lg border px-4 py-2 hover:bg-muted" href="/contact">
            Hire Me
          </Link>
        </div>
      </div>
      <div className="justify-self-center">
        <Image
          src={avatarSrc}
          alt={`${name} photo`}
          width={220}
          height={220}
          className="rounded-2xl border"
          priority
        />
      </div>
    </section>
  );
}
