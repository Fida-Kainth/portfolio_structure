// components/sections/hero.tsx
import { getProfile } from '@/lib/content';
import { Facebook, Github, Globe, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default async function Hero() {
  const profile = await getProfile();

  return (
    <section className="relative isolate overflow-hidden rounded-3xl border p-8 md:p-12">
      {/* subtle backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60rem_30rem_at_50%_-10%,rgba(59,130,246,.10),transparent)]" />

      <div className="flex flex-col items-center gap-6 text-center md:flex-row md:items-start md:text-left">
        <Image
          src={profile.photo || '/images/profile/avatar.webp'}
          alt={profile.name || 'Avatar'}
          width={128}
          height={128}
          className="h-28 w-28 rounded-full ring-2 ring-blue-200 md:h-32 md:w-32"
          priority
        />

        <div className="space-y-4 md:mt-2">
          {profile.availability && (
            <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
              {profile.availability}
            </span>
          )}

          <h1 className="text-balance text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
            Hi, I’m{' '}
            <span className="underline decoration-blue-400 decoration-4 underline-offset-4">
              {profile.name}
            </span>
          </h1>

          <p className="max-w-2xl text-pretty text-[15px] text-muted-foreground md:text-base">
            {profile.title}
            {profile.tagline ? ` • ${profile.tagline}` : ''}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <Link
              href="/projects"
              className="rounded-full bg-black px-4 py-2 text-sm text-white transition hover:opacity-90"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="rounded-full border px-4 py-2 text-sm transition hover:bg-muted"
            >
              Hire Me
            </Link>
            {profile.resumeUrl && (
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="rounded-full border px-4 py-2 text-sm transition hover:bg-muted"
              >
                Download Résumé
              </a>
            )}
          </div>

          {Array.isArray(profile.social) && profile.social.length > 0 && (
            <div className="flex flex-wrap items-center justify-center gap-2 md:justify-start">
              {profile.social.map((s, i) => {
                const label = (s.label || '').toLowerCase();

                // Map labels to icon components
                const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
                  website: Globe,
                  gmail: Mail,
                  phone: Phone,
                  github: Github,
                  linkedin: Linkedin,
                  instagram: Instagram,
                  facebook: Facebook,
                };

                const Icon = iconMap[label];

                return (
                  <a
                    key={i}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className={
                      Icon
                        ? 'inline-flex h-9 w-9 items-center justify-center rounded-full border hover:bg-muted'
                        : 'rounded-full border px-3 py-1.5 text-xs text-muted-foreground hover:bg-muted'
                    }
                    aria-label={s.label}
                    title={s.label}
                  >
                    {Icon ? <Icon className="h-4 w-4" /> : s.label}
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
