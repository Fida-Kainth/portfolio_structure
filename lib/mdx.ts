/**
 * Minimal MDX utilities.
 *
 * This file does NOT compile MDX to React (no extra deps). It exposes helpers
 * you can adapt later if you add a renderer like `next-mdx-remote` or `mdx-bundler`.
 *
 * - `parseFrontmatter` is already implemented in lib/content.ts (extractFrontmatter).
 * - `renderMdxToHtml` below is a placeholder that escapes HTML and wraps in <pre>.
 */

export function escapeHtml(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/** Placeholder: show raw MDX safely (not pretty, but won’t crash). */
export function renderMdxToHtml(rawMdx: string) {
  return `<pre style="white-space:pre-wrap;line-height:1.6">${escapeHtml(rawMdx)}</pre>`;
}

/** If you later add a real MDX renderer: */
// export async function renderMdxToReact(rawMdx: string) {
//   const { MDXRemote } = await import("next-mdx-remote/rsc");
//   return <MDXRemote source={rawMdx} />;
// }
