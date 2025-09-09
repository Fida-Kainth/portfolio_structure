import fs from 'fs/promises';
import path from 'path';
import { cache } from 'react';

/** Resolve a path inside /content */
function contentPath(...segments: string[]) {
  return path.join(process.cwd(), 'content', ...segments);
}

/** Read and parse a JSON file from /content */
async function readJson<T>(relPath: string): Promise<T> {
  const full = contentPath(relPath);
  const raw = await fs.readFile(full, 'utf8');
  return JSON.parse(raw) as T;
}

/** Minimal frontmatter extractor for .mdx files (YAML-like key: value) */
function extractFrontmatter(src: string) {
  const FRONT = /^---\n([\s\S]*?)\n---\n?/;
  const match = src.match(FRONT);
  if (!match) return { meta: {} as Record<string, any>, body: src };

  const yaml = match[1];
  const body = src.slice(match[0].length);

  const meta: Record<string, any> = {};
  // very tiny parser: key: value, arrays via [a,b], strings quoted or plain
  yaml.split(/\r?\n/).forEach((line) => {
    const m = line.match(/^\s*([A-Za-z0-9_-]+)\s*:\s*(.+)\s*$/);
    if (!m) return;
    const key = m[1];
    let val = m[2].trim();
    // handle multiline YAML (very basic) and nested objects are not supported here
    if (val.startsWith('[') && val.endsWith(']')) {
      meta[key] = val
        .slice(1, -1)
        .split(',')
        .map((s) =>
          s
            .trim()
            .replace(/^"(.*)"$/, '$1')
            .replace(/^'(.*)'$/, '$1'),
        )
        .filter(Boolean);
    } else if (/^".*"$|^'.*'$/.test(val)) {
      meta[key] = val.replace(/^"(.*)"$/, '$1').replace(/^'(.*)'$/, '$1');
    } else {
      meta[key] = val;
    }
  });

  return { meta, body };
}

/** PROFILE */
export const getProfile = cache(async () => {
  type Profile = {
    name: string;
    title: string;
    location?: string;
    photo?: string;
    tagline?: string;
    availability?: string;
    languagesSpoken?: string[];
    social?: { label: string; url: string }[];
    resumeUrl?: string;
  };
  return readJson<Profile>('profile.json');
});

/** EDUCATION */
export const getEducation = cache(async () => {
  type Education = {
    level: 'School' | 'College' | 'University';
    institute: string;
    program?: string;
    start?: string;
    end?: string;
    location?: string;
    media?: { logo?: string; photo?: string; alt?: string };
    highlights?: string[];
  };
  return readJson<Education[]>('education.json');
});

/** EXPERIENCE */
export const getExperience = cache(async () => {
  type Experience = {
    company: string;
    role: string;
    type: 'Internship' | 'Full-time' | 'Freelance';
    start: string;
    end: string;
    location?: string;
    bullets: string[];
    stack?: string[];
  };
  return readJson<Experience[]>('experience.json');
});

/** SKILLS */
export const getSkills = cache(async () => {
  type Skill = {
    name: string;
    category: 'Language' | 'Framework' | 'Tool' | 'Platform';
    icon?: string;
    level?: 'Beginner' | 'Intermediate' | 'Advanced';
    years?: number;
  };
  return readJson<Skill[]>('skills.json');
});

/** PROJECTS INDEX */
export const getProjectsIndex = cache(async () => {
  type ProjectIndex = {
    title: string;
    slug: string;
    summary?: string;
    cover?: string;
    tags?: string[];
    stack?: string[];
    links?: { live?: string; repo?: string; caseStudy?: string };
    start?: string;
    end?: string;
  };
  return readJson<ProjectIndex[]>('projects/index.json');
});

/** PROJECT CASE STUDY (.mdx) — returns meta + raw body (not compiled) */
export async function getProjectMdx(slug: string) {
  const full = contentPath('projects', `${slug}.mdx`);
  const src = await fs.readFile(full, 'utf8');
  const { meta, body } = extractFrontmatter(src);
  return { meta, body };
}
