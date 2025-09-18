'use client';

import { useEffect, useRef } from 'react';

/**
 * Lightweight Lottie player using dynamic import of `lottie-web`.
 * If the library isn't installed yet, it silently skips animation.
 *
 * Install later when ready:
 *   pnpm add lottie-web
 */
export default function LottiePlayer({
  src = '/lottie/check.json',
  loop = false,
  autoplay = true,
  className = 'h-10 w-10',
}: {
  src?: string;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let anim: any;
    (async () => {
      try {
        const lottie = await import('lottie-web');
        const res = await fetch(src);
        const json = await res.json();
        if (ref.current) {
          anim = (lottie as any).loadAnimation({
            container: ref.current,
            renderer: 'svg',
            loop,
            autoplay,
            animationData: json,
          });
        }
      } catch {
        // lottie-web not installed or fetch failed; ignore for now
      }
    })();
    return () => anim?.destroy?.();
  }, [src, loop, autoplay]);

  return <div aria-hidden className={className} ref={ref} />;
}
