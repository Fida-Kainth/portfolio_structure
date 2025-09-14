export type Social = {
  label: 'Website' | 'Facebook' | 'Instagram' | 'LinkedIn' | 'GitHub' | 'Gmail' | 'Phone';
  url: string; // supports mailto:, tel:
  username?: string;
  icon?: string; // devicon/simple-icons slug (optional)
};

// types/content.d.ts
export type Profile = {
  name: string;
  title: string; // job title (e.g., Software Engineer)
  location: string;
  photo: string; // avatar path (e.g., /images/profile/avatar.webp)
  tagline?: string; // short summary line
  availability?: string; // e.g., "Open to work"
  languagesSpoken?: string[];
  social?: { label: string; url: string }[];
  resumeUrl?: string;
};

// keep your other types below if they already exist:
export type Institute = {
  slug: string;
  name: string;
  degree?: string;
  field?: string;
  period: string;
  logo: string;
  cover?: string;
  highlights?: string[];
};

export type Job = {
  company: string;
  role: string;
  period: string;
  logo?: string;
  summary: string;
  bullets?: string[];
};

export type Skill = { name: string; level?: 'beginner' | 'intermediate' | 'advanced' | 'expert' };

export type ProjectIndexItem = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  cover: string;
  featured?: boolean;
  date?: string;
};

export type Education = {
  level: 'School' | 'College' | 'University';
  institute: string;
  program?: string;
  start?: string; // YYYY-MM
  end?: string; // YYYY-MM | "Present"
  location?: string;
  media?: { logo?: string; photo?: string; alt?: string };
  highlights?: string[];
};

export type Experience = {
  company: string;
  role: string;
  type: 'Internship' | 'Full-time' | 'Freelance';
  start: string; // YYYY-MM
  end: string; // YYYY-MM | "Present"
  location?: string;
  bullets: string[];
  stack?: string[];
};

export type Project = {
  title: string;
  slug: string;
  summary?: string;
  description?: string;
  cover?: string;
  links?: { live?: string; repo?: string; caseStudy?: string };
  tags?: string[];
  stack?: string[];
  start?: string;
  end?: string;
};

export type Skill = {
  name: string;
  category: 'Language' | 'Framework' | 'Tool' | 'Platform';
  icon?: string;
  level?: 'Beginner' | 'Intermediate' | 'Advanced';
  years?: number;
};
