import {
  Bug, Code,
  FileText,
  GitBranch,
  Palette,
  Settings,
  TestTube
} from 'lucide-react';

export default function UsesPage() {
  const categories: { name: string; tools: string[]; icon: React.ComponentType<{ className?: string }> }[] = [
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

  // Icon mapping for tools
  const getToolIcon = (tool: string) => {
    const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
      'Figma': Palette,
      'Draw.io': FileText,
      'Selenium': Bug,
      'Jira': Settings,
      'JUnit': TestTube,
      'PyCharm': Code,
      'Eclipse': Code,
      'Visual Studio': Code,
      'VS Code': Code,
      'Jupyter Notebook/Lab': Code,
      'GitLab': GitBranch,
      'IntelliJ IDEA': Code,
      'TestRail': TestTube,
      'SoapUI (API Testing)': TestTube,
      'Canva': Palette,
      'Mermaid Chart': FileText,
      'PlantUML': FileText,
    };
    return iconMap[tool] || Settings;
  };

  return (
    <main className="container mx-auto max-w-4xl px-4 py-16">
      <div className="animate-fade-up">
        <h1 className="text-3xl font-semibold mb-2">Tools I Use</h1>
        <p className="text-muted-foreground mb-8">
          A comprehensive list of tools and technologies I use for development, testing, and design.
        </p>
        
        {/* ✨ UI polish - 2-col .card grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {categories.map((cat, index) => (
            <div key={cat.name} className="card p-6 animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                  <cat.icon className="h-5 w-5" />
                </div>
                <h2 className="text-lg font-semibold">{cat.name}</h2>
              </div>
              
              {/* ✨ UI polish - Each tool as .pill w/ icon */}
              <ul className="flex flex-wrap gap-2">
                {cat.tools.map((t) => {
                  const ToolIcon = getToolIcon(t);
                  return (
                    <li key={t} className="pill bg-muted/50 hover:bg-muted transition-colors duration-200 group">
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
    </main>
  );
}
