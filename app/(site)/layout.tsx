import Header from '@/components/core/header';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-site-gradient text-foreground antialiased">
      <Header />
      <main>{children}</main>
    </div>
  );
}
