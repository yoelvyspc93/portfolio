'use client';

import styles from './Footer.module.scss';

import { getNavigationItems } from '@/constants/navigator';
import { useRef, useEffect } from 'react';
import { useTranslation } from '../../../hooks/useTranslation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePathname, useRouter } from 'next/navigation';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { CustomImage } from '../CustomImage';

export const Footer = () => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const pathname = usePathname();
  const prefersReducedMotion = usePrefersReducedMotion();

  const footerRef = useRef<HTMLDivElement | null>(null);
  const navLinksRef = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    if (prefersReducedMotion) return;
    gsap.registerPlugin(ScrollTrigger);
    const footer = footerRef.current;

    for (const link of navLinksRef.current) {
      if (link) gsap.set(link, { opacity: 0, y: 20 });
    }

    for (const [index, link] of navLinksRef.current.entries()) {
      if (!link) continue;
      gsap.to(link, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: index * 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: footer!,
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
      <div className={styles.background} aria-hidden>
        <CustomImage
          src="/images/footer/yoelvys.svg"
          alt="Yoelvys"
          fill
          priority
          className={styles.bgImage}
        />
      </div>

      <div className={styles.content}>
        <p className={styles.copyrightText}>{t('footer.copyright')}</p>

        <nav className={styles.navMenu} aria-label="Footer navigation">
          <ul>
            {getNavigationItems(t)
              .filter(
                (link) =>
                  link.name !== t('nav.home') && link.name !== t('nav.contact'),
              )
              .map((link, index) => (
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
      </div>
    </footer>
  );
};
