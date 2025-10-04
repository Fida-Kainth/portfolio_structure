import LeafPen from '@/components/animations/leaf-pen';
import ContactForm from '@/components/sections/contact-form';
import EducationTimeline from '@/components/sections/education-timeline';
import ExperienceTimeline from '@/components/sections/experience-timeline';
import Hero from '@/components/sections/hero';
import ProjectsGrid from '@/components/sections/projects-grid';
import SkillsMarquee from '@/components/sections/skills-marquee';
import { getEducation } from '@/lib/content';
import { Bug, Code, FileText, GitBranch, Palette, Settings, TestTube } from 'lucide-react';

export default async function HomePage() {
  const educationItems = await getEducation();

  const categories: {
    name: string;
    tools: string[];
    icon: React.ComponentType<{ className?: string }>;
  }[] = [
    {
      name: 'Documentation & Design',
      tools: ['Figma', 'Draw.io', 'Lucid Chart', 'Canva', 'Mermaid Chart', 'PlantUML'],
      icon: Palette,
    },
    {
      name: 'SQE & SQA Testing',
      tools: [
        'Selenium',
        'Jira',
        'Postman',
        'JUnit',
        'PyCharm',
        'Eclipse',
        'Unit testing',
        'TestRail',
        'SoapUI (API Testing)',
        'SDLC: Waterfall, Agile, Iterative, Spiral',
      ],
      icon: TestTube,
    },
    {
      name: 'Web Dev & Coding',
      tools: [
        'Visual Studio',
        'VS Code',
        'Jupyter Notebook/Lab',
        'IDLE',
        'GitLab',
        'Eclipse',
        'IntelliJ IDEA',
        'Others related',
      ],
      icon: Code,
    },
  ];

  const getToolIcon = (tool: string) => {
    const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
      Figma: Palette,
      'Draw.io': FileText,
      Selenium: Bug,
      Jira: Settings,
      JUnit: TestTube,
      PyCharm: Code,
      Eclipse: Code,
      'Visual Studio': Code,
      'VS Code': Code,
      'Jupyter Notebook/Lab': Code,
      GitLab: GitBranch,
      'IntelliJ IDEA': Code,
      TestRail: TestTube,
      'SoapUI (API Testing)': TestTube,
      Canva: Palette,
      'Mermaid Chart': FileText,
      PlantUML: FileText,
    };
    return iconMap[tool] || Settings;
  };

  const projects = [
    {
      title: 'AI-Knowledge-Hub',
      slug: 'ai-knowledge-hub',
      cover: '/images/projects/sample-cover.webp',
      tags: ['Web Based', 'Full Stack'],
      summary:
        'AI Knowledge Hub — A full-stack web platform built with React, Next.js, and Django REST, featuring authentication, knowledge sharing, AI-powered search, role-based dashboards, and containerized deployment with Docker and CI/CD integration.',
    },
    {
      title: 'EHealthMedAI',
      slug: 'ehealthmedai',
      cover: '/images/projects/sample-cover.webp',
      tags: ['Web Based', 'Full Stack', 'AI/ML'],
      summary:
        'EHealthMedAI — A backend API service built with Node.js and Express, designed for healthcare applications with features like user authentication, data management, and integration with third-party services.',
    },
    {
      title: 'Boardroom_app',
      slug: 'boardroom_app',
      cover: '/images/projects/sample-cover.webp',
      tags: ['Flutter', 'Backend'],
      summary:
        'Boardroom App — A Flutter application with secure authentication, meeting scheduling, collaborative dashboards, role-based access, and integrated payment and admin management features.',
    },
    {
      title: 'Blockchain Based Voting System using Python Streamlit',
      slug: 'blockchain-voting-system',
      cover: '/images/projects/sample-cover.webp',
      tags: ['web', 'frontend', 'collaboration'],
      summary:
        'Collaborative voting platform leveraging blockchain technology for secure and transparent elections.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center">
        <Hero />
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-semibold mb-8 text-center">Skills</h2>
          <SkillsMarquee />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-semibold mb-8">About</h2>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p>
              I'm a software engineer who loves building fast, accessible web apps. I focus on clean
              architecture, delightful UX, and measurable impact.
            </p>
            <h3>Highlights</h3>
            <ul>
              <li>Performance-minded: ships Lighthouse 95+ and Core Web Vitals green</li>
              <li>Strong frontend foundations: React, Next.js, TypeScript, Tailwind</li>
              <li>Comfortable with backend: APIs, databases, auth, CI/CD</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-semibold mb-8">Experience</h2>
          <ExperienceTimeline />
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-semibold mb-8">Education</h2>
          <EducationTimeline items={educationItems as any} />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-semibold mb-8">Projects</h2>
          <ProjectsGrid projects={projects} />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-semibold mb-8">Get in touch</h2>

          <div className="relative rounded-2xl card p-6" data-pen-area>
            {/* Fixed Ink Pot - separate from movable pen */}
            <div data-ink-pot className="pointer-events-none absolute bottom-6 right-6 z-10">
              <svg
                width="40"
                height="50"
                viewBox="0 0 40 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)]"
              >
                {/* Ink pot body - teal/turquoise */}
                <rect
                  x="8"
                  y="15"
                  width="24"
                  height="25"
                  rx="4"
                  fill="#14B8A6"
                  stroke="#0F766E"
                  strokeWidth="2"
                />

                {/* Ink pot cap - black with ridges */}
                <rect
                  x="6"
                  y="8"
                  width="28"
                  height="12"
                  rx="3"
                  fill="#1F2937"
                  stroke="#111827"
                  strokeWidth="2"
                />
                <rect x="8" y="10" width="24" height="2" rx="1" fill="#374151" />
                <rect x="8" y="13" width="24" height="2" rx="1" fill="#374151" />
                <rect x="8" y="16" width="24" height="2" rx="1" fill="#374151" />

                {/* Beige neck ring */}
                <rect
                  x="10"
                  y="20"
                  width="20"
                  height="6"
                  rx="2"
                  fill="#D2B48C"
                  stroke="#A0522D"
                  strokeWidth="1.5"
                />

                {/* Red label with golden leaf */}
                <rect
                  x="12"
                  y="26"
                  width="16"
                  height="8"
                  rx="2"
                  fill="#DC2626"
                  stroke="#991B1B"
                  strokeWidth="1.5"
                />

                {/* Golden leaf on label */}
                <path
                  d="M16 28C18 26 20 25 22 24C24 22 26 21 28 20C26 22 24 24 22 26C20 28 18 30 16 28Z"
                  fill="#FCD34D"
                  stroke="#F59E0B"
                  strokeWidth="1"
                />
                <path d="M18 26L20 28L22 26" stroke="#F59E0B" strokeWidth="1" fill="none" />
                <path d="M19 27L20 29L21 27" stroke="#F59E0B" strokeWidth="1" fill="none" />
              </svg>
            </div>

            <LeafPen />

            <ContactForm />
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            Prefer email?{' '}
            <a className="underline" href="mailto:fidakainth@gmail.com">
              fidakainth@gmail.com
            </a>
          </p>
        </div>
      </section>

      {/* Uses Section */}
      <section id="uses" className="py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-semibold mb-8">Tools I Use</h2>
          <div className="animate-fade-up">
            <p className="text-muted-foreground mb-8">
              A comprehensive list of tools and technologies I use for development, testing, and
              design.
            </p>

            {/* ✨ UI polish - 2-col .card grid */}
            <div className="grid gap-6 md:grid-cols-2">
              {categories.map((cat, index) => (
                <div
                  key={cat.name}
                  className="card p-6 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                      <cat.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold">{cat.name}</h3>
                  </div>

                  {/* ✨ UI polish - Each tool as .pill w/ icon */}
                  <ul className="flex flex-wrap gap-2">
                    {cat.tools.map((t, index) => {
                      const ToolIcon = getToolIcon(t);
                      return (
                        <li
                          key={`${cat.name}-${t}-${index}`}
                          className="pill bg-muted/50 hover:bg-muted transition-colors duration-200 group"
                        >
                          <ToolIcon className="h-3 w-3 group-hover:scale-110 transition-transform duration-200" />
                          <span>{t}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
