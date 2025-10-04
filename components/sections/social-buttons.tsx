'use client';

import { trackSocialClick } from '@/lib/analytics';
import {
  DollarSign,
  Facebook,
  Github,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  Phone,
} from 'lucide-react';

interface SocialButton {
  label: string;
  url: string;
}

interface SocialButtonsProps {
  social: SocialButton[];
}

export default function SocialButtons({ social }: SocialButtonsProps) {
  if (!Array.isArray(social) || social.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
      {social.map((s, i) => {
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
          fiverr: DollarSign,
        };

        const Icon = iconMap[label];

        return (
          <a
            key={i}
            href={s.url}
            target="_blank"
            rel="noreferrer noopener"
            className={`group relative inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/30 transition-all duration-200 hover:scale-110 hover:shadow-lg social-sparkle social-glow ${
              Icon ? 'hover:shadow-indigo-500/25' : ''
            }`}
            aria-label={s.label}
            title={s.label}
            onClick={() => trackSocialClick(s.label)}
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
  );
}
