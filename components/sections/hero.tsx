// components/sections/hero.tsx
import { getProfile } from '@/lib/content';
import { Facebook, Github, Globe, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default async function Hero() {
  const profile = await getProfile();

  return (
    <section className="relative isolate overflow-hidden rounded-3xl card p-8 md:p-12 animate-fade-up">
      {/* ✨ UI polish - Light radial background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-radial from-indigo-500/10 via-purple-500/5 to-transparent" />

      <div className="flex flex-col items-center gap-6 text-center md:flex-row md:items-start md:text-left">
        <div className="relative">
          {/* ✨ UI polish - Gradient halo avatar */}
          <div className="absolute -inset-4 rounded-full bg-gradient-conic from-indigo-500 via-purple-500 to-pink-500 opacity-75 blur-2xl animate-pulse-soft" />
          <div className="absolute -inset-2 rounded-full bg-gradient-conic from-indigo-400 via-purple-400 to-pink-400 opacity-50 blur-xl" />
          <Image
            src={profile.photo || '/images/profile/avatar.webp'}
            alt={profile.name || 'Avatar'}
            width={148}
            height={148}
            className="relative h-36 w-36 rounded-full border-2 border-white/20 shadow-2xl ring-4 ring-white/10 md:h-40 md:w-40"
            priority
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
            <Link
              href="/projects"
              className="btn-primary text-sm"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="btn-secondary text-sm"
            >
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
          {Array.isArray(profile.social) && profile.social.length > 0 && (
            <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
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
                    className={`group relative inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/30 transition-all duration-200 hover:scale-110 hover:shadow-lg ${
                      Icon ? 'hover:shadow-indigo-500/25' : ''
                    }`}
                    aria-label={s.label}
                    title={s.label}
                  >
                    {Icon ? (
                      <Icon className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                    ) : (
                      <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                        {s.label.charAt(0).toUpperCase()}
                      </span>
                    )}
                    {/* Tooltip */}
                    <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                      {s.label}
                    </span>
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
