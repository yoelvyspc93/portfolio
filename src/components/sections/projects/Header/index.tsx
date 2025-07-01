'use client';

import styles from './Header.module.scss';
import { useEffect, useRef } from 'react';

export const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { default: gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      const header = headerRef.current;
      gsap.set(header, { opacity: 0, y: 50 });

      gsap.to(header, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: header,
          start: 'top 80%',
          once: true,
        },
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    })();
  }, []);

  return (
    <section className={styles.section} ref={headerRef}>
      <h1>
        My Main <span>Projects</span>
      </h1>
    </section>
  );
};
