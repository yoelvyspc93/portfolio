'use client';

import styles from './Footer.module.scss';

import { getNavigationItems } from '@/constants/navigator';
import { socialLinks } from '@/constants/social';
import { useRef, useEffect } from 'react';
import { useTranslation } from '../../../hooks/useTranslation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePathname, useRouter } from 'next/navigation';
import { usePrefersReducedMotion } from '@/hook/usePrefersReducedMotion';

export const Footer = () => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const pathname = usePathname();
  const prefersReducedMotion = usePrefersReducedMotion();

  const footerRef = useRef(null);
  const navLinksRef = useRef<(HTMLLIElement | null)[]>([]);
  const socialLinksRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    if (prefersReducedMotion) return;
    gsap.registerPlugin(ScrollTrigger);
    const footer = footerRef.current;

    // Hide elements initially
    for (const link of navLinksRef.current) {
      if (link) gsap.set(link, { opacity: 0, y: 20 });
    }
    for (const icon of socialLinksRef.current) {
      if (icon) gsap.set(icon, { opacity: 0, y: 20 });
    }

    // Animate navigation links
    for (const [index, link] of navLinksRef.current.entries()) {
      if (!link) continue;
      gsap.to(link, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: index * 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: footer,
          start: 'top 100%',
          once: true,
        },
      });
    }

    // Animate social icons
    for (const [index, icon] of socialLinksRef.current.entries()) {
      if (!icon) continue;
      gsap.to(icon, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: navLinksRef.current.length * 0.1 + index * 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: footer,
          start: 'top 100%',
          once: true,
        },
      });
    }

    return () => {
      for (const trigger of ScrollTrigger.getAll()) trigger.kill();
    };
  }, [prefersReducedMotion]);

  const handleClickItem = (href: string) => {
    if (pathname === '/') {
      gsap.to(globalThis, { duration: 1, scrollTo: href });
    } else {
      router.push(`/${href}`);
    }
  };

  return (
    <footer className={styles.footer} ref={footerRef}>
      <div className={styles.divider}></div>
      <nav className={styles.navMenu}>
        <ul>
          {getNavigationItems(t).map((link, index) => (
            <li
              key={link.name}
              ref={(el) => {
                navLinksRef.current[index] = el;
              }}
            >
              <button
                type="button"
                onClick={() => handleClickItem(link.path)}
                className={styles.linkButton}
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.socialLinks}>
        {socialLinks.map((sm, index) => (
          <a
            aria-label={`link to ${sm.platform}`}
            key={sm.platform}
            href={sm.url}
            target="_blank"
            rel="noopener noreferrer"
            ref={(el) => {
              socialLinksRef.current[index] = el;
            }}
          >
            {sm.icon}
          </a>
        ))}
      </div>
    </footer>
  );
};
