/** Merge class names (tiny version of clsx + tailwind-merge idea) */
export function cn(...args: Array<string | false | null | undefined>) {
  return args.filter(Boolean).join(' ');
}

/** Slugify a string for URLs */
export function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

/** Format YYYY-MM to "MMM YYYY" */
export function formatYearMonth(ym?: string) {
  if (!ym) return '';
  const [y, m] = ym.split('-').map(Number);
  if (!y || !m) return ym;
  const d = new Date(Date.UTC(y, m - 1, 1));
  return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' });
}
