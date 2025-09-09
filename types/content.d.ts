export type Social = {
  label: 'Website' | 'Facebook' | 'Instagram' | 'LinkedIn' | 'GitHub' | 'Gmail' | 'Phone';
  url: string; // supports mailto:, tel:
  username?: string;
  icon?: string; // devicon/simple-icons slug (optional)
};

export type Profile = {
  name: string;
  title: string;
  location?: string;
  photo?: string;
  tagline?: string;
  availability?: string;
  languagesSpoken?: string[];
  social?: Social[];
  resumeUrl?: string;
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
