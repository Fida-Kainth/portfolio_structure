import { getProfile } from '@/lib/content';
import { Code, Database, Globe, Palette, Smartphone, Zap } from 'lucide-react';

export default async function AboutPage() {
  const profile = await getProfile();

  const skills = [
    {
      category: 'Frontend Development',
      icon: Globe,
      items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'HTML5', 'CSS3'],
    },
    {
      category: 'Backend Development',
      icon: Database,
      items: [
        'Node.js',
        'Express.js',
        'MongoDB',
        'PostgreSQL',
        'REST APIs',
        'GraphQL',
        'Authentication',
      ],
    },
    {
      category: 'Tools & Technologies',
      icon: Code,
      items: ['Git', 'Docker', 'AWS', 'Vercel', 'VS Code', 'Jupyter Notebook/Lab', 'Jira', 'Azure'],
    },
    {
      category: 'Mobile & Responsive',
      icon: Smartphone,
      items: [
        'Responsive Design',
        'PWA',
        'Mobile-First',
        'Cross-Browser',
        'Performance Optimization',
      ],
    },
    {
      category: 'UI/UX Design',
      icon: Palette,
      items: [
        'User Experience',
        'Interface Design',
        'Prototyping',
        'Accessibility',
        'Design Systems',
      ],
    },
    {
      category: 'Performance & Quality',
      icon: Zap,
      items: ['Core Web Vitals', 'SEO', 'Testing', 'Code Quality', 'Agile Development'],
    },
  ];

  return (
    <main className="container mx-auto max-w-6xl px-4 py-16">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-fuchsia-400 via-indigo-400 to-sky-400 bg-clip-text text-transparent">
          About {profile.name}
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          {profile.tagline}
        </p>
        {profile.availability && (
          <div className="mt-6">
            <span className="inline-block pill bg-green-500/10 text-green-400 border-green-500/20">
              {profile.availability}
            </span>
          </div>
        )}
      </section>

      {/* Main Content */}
      <section className="grid gap-12 lg:grid-cols-2 mb-16">
        {/* Personal Story */}
        <div className="card p-8">
          <h2 className="text-2xl font-semibold mb-6">My Story</h2>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm a passionate software engineer who loves building fast, accessible web
              applications. My journey in technology started with curiosity about how things work,
              and that curiosity has driven me to become a full-stack developer focused on creating
              meaningful digital experiences.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I believe in clean architecture, delightful user experiences, and measurable impact.
              Every project I work on is an opportunity to solve real problems and make technology
              more accessible to everyone.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to
              open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <section>
          <h2 className="text-3xl font-semibold text-center mb-12">Technical Skills</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill, index) => (
              <div
                key={skill.category}
                className="card p-6 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                    <skill.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="pill bg-muted/50 hover:bg-muted transition-colors duration-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
      </section>

      <section className="text-center mt-16">
        <div className="card p-8">
          <h2 className="text-2xl font-semibold mb-4">Let's Work Together</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            I'm always excited to work on new projects and collaborate with amazing people. Whether
            you need a full-stack application, a frontend makeover, or technical consultation, I'm
            here to help bring your ideas to life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="btn-primary">
              Get In Touch
            </a>
            <a href="/projects" className="btn-secondary">
              View My Work
            </a>
            {profile.resumeUrl && (
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="btn-ghost"
              >
                Download Resume
              </a>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
