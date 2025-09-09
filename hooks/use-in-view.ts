'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Simple IntersectionObserver hook.
 * Returns a ref to attach and a boolean for inView.
 */
export default function useInView<T extends Element = HTMLElement>(
  options: IntersectionObserverInit = { root: null, rootMargin: '0px', threshold: 0.2 },
) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === 'undefined') return;

    const obs = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), options);
    obs.observe(node);
    return () => obs.disconnect();
  }, [options.root, options.rootMargin, JSON.stringify(options.threshold)]);

  return { ref, inView } as const;
}
