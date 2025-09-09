'use client';

import { useEffect, useState } from 'react';

/**
 * Returns true when the media query matches.
 * Example: const isMdUp = useMediaQuery("(min-width: 768px)");
 */
export default function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);
    onChange();
    mql.addEventListener?.('change', onChange);
    return () => mql.removeEventListener?.('change', onChange);
  }, [query]);

  return matches;
}
