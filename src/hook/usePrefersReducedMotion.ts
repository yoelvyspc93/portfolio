import { useEffect, useState } from 'react';

const QUERY = '(prefers-reduced-motion: reduce)';

export const usePrefersReducedMotion = (): boolean => {
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const mediaQuery = globalThis.matchMedia(QUERY);
    setPrefersReduced(mediaQuery.matches);
    const handler = (event: MediaQueryListEvent) => {
      setPrefersReduced(event.matches);
    };
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return prefersReduced;
};
