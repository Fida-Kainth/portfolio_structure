export default function UsesPage() {
  const items = [
    { label: 'Editor', value: 'VS Code' },
    { label: 'Theme', value: 'Catppuccin Mocha' },
    { label: 'Terminal', value: 'WezTerm + zsh' },
    { label: 'Browser', value: 'Arc' },
  ];
  return (
    <main className="container mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-semibold">Uses</h1>
      <dl className="mt-8 grid gap-4 sm:grid-cols-2">
        {items.map((i) => (
          <div key={i.label} className="rounded-xl border p-4">
            <dt className="font-medium">{i.label}</dt>
            <dd className="text-muted-foreground">{i.value}</dd>
          </div>
        ))}
      </dl>
    </main>
  );
}
