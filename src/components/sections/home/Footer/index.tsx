'use client';

import styles from './Footer.module.scss';

import { navigationItems } from '@/constants/navigator';
import { socialLinks } from '@/constants/social';
import Link from 'next/link';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const Footer = () => {
  const footerRef = useRef(null);
  const navLinksRef = useRef<(HTMLLIElement | null)[]>([]);
  const socialLinksRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const footer = footerRef.current;

    // Hide elements initially
    navLinksRef.current.forEach((link) => {
      if (link) gsap.set(link, { opacity: 0, y: 20 });
    });
    socialLinksRef.current.forEach((icon) => {
      if (icon) gsap.set(icon, { opacity: 0, y: 20 });
    });

    // Animate navigation links
    navLinksRef.current.forEach((link, index) => {
      if (!link) return;
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
    });

    // Animate social icons
    socialLinksRef.current.forEach((icon, index) => {
      if (!icon) return;
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
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <footer className={styles.footer} ref={footerRef}>
      <div className={styles.divider}></div>
      <nav className={styles.navMenu}>
        <ul>
          {navigationItems.map((link, index) => (
            <li
              key={link.name}
              ref={(el) => {
                navLinksRef.current[index] = el;
              }}
            >
              <Link href={link.path}>{link.name}</Link>
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
