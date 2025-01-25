import { useState, useEffect } from 'react';

interface Dimensions {
  width: number;
  height: number;
  breakpoint: 'mobile' | 'tablet' | 'desktop';
}

const breakpoints = {
  mobile: 393,
  tablet: 834,
  desktop: 1440,
  widescreen: 1920,
};

export const useViewports = (): Dimensions => {
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
    breakpoint: 'desktop',
  });

  useEffect(() => {
    function getBreakpoint(width: number): Dimensions['breakpoint'] {
      if (width < breakpoints.mobile) return 'mobile';
      if (width < breakpoints.tablet) return 'mobile';
      if (width < breakpoints.desktop) return 'tablet';
      if (width < breakpoints.widescreen) return 'desktop';
      return 'desktop';
    }

    function handleResize() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const breakpoint = getBreakpoint(width);
      setDimensions({ width, height, breakpoint });
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return dimensions;
};
