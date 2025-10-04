// components/sections/hero.tsx
import { getProfile } from '@/lib/content';
import Image from 'next/image';
import Link from 'next/link';
import SocialButtons from './social-buttons';

export default async function Hero() {
  const profile = await getProfile();

  return (
    <section className="relative isolate overflow-hidden rounded-3xl card p-8 md:p-12 animate-fade-up">
      {/* ✨ UI polish - Light radial background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-radial from-indigo-500/10 via-purple-500/5 to-transparent" />

      <div className="flex flex-col items-center gap-6 text-center md:flex-row md:items-start md:text-left">
        <div className="relative">
          {/* ✨ Enhanced glowing border effect */}
          <div className="absolute -inset-6 rounded-full bg-gradient-conic from-indigo-500 via-purple-500 to-pink-500 opacity-80 blur-3xl animate-pulse-soft" />
          <div className="absolute -inset-4 rounded-full bg-gradient-conic from-indigo-400 via-purple-400 to-pink-400 opacity-60 blur-2xl" />
          <div className="absolute -inset-2 rounded-full bg-gradient-conic from-indigo-300 via-purple-300 to-pink-300 opacity-40 blur-xl" />
          <div className="absolute -inset-1 rounded-full bg-gradient-conic from-indigo-200 via-purple-200 to-pink-200 opacity-30 blur-lg" />
          <Image
            src={profile.photo || '/images/profile/avatar.webp'}
            alt={`${profile.name || 'Fida Hussain Kainth'} - Software Engineer Profile Picture`}
            width={200}
            height={200}
            className="relative h-48 w-48 rounded-full border-4 border-white/30 shadow-2xl ring-8 ring-white/20 md:h-56 md:w-56 lg:h-64 lg:w-64"
            priority
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            sizes="(max-width: 768px) 192px, (max-width: 1024px) 224px, 256px"
          />
        </div>

        <div className="space-y-4 md:mt-2">
          {profile.availability && (
            <span className="inline-block pill bg-green-500/10 text-green-400 border-green-500/20">
              {profile.availability}
            </span>
          )}

          <h1 className="text-balance text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-fuchsia-400 via-indigo-400 to-sky-400 bg-clip-text text-transparent">
              {profile.name}
            </span>
          </h1>

          <p className="max-w-2xl text-pretty text-[15px] text-muted-foreground md:text-lg">
            {profile.title}
            {profile.tagline ? ` • ${profile.tagline}` : ''}
          </p>

          {/* ✨ UI polish - Improved CTA buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <Link href="/projects" className="btn-primary text-sm">
              View Projects
            </Link>
            <Link href="/contact" className="btn-secondary text-sm">
              Hire Me
            </Link>
            {profile.resumeUrl && (
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="btn-ghost text-sm"
              >
                Download Résumé
              </a>
            )}
          </div>

          {/* ✨ UI polish - Round social icons with tooltips */}
          <SocialButtons social={profile.social || []} />
        </div>
      </div>
    </section>
  );
}
