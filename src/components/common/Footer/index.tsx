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
  const listRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    if (prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const items = [...(listRef.current?.querySelectorAll('li') ?? [])];
      if (items.length === 0) return;

      gsap.set(items, { autoAlpha: 0, y: 16 });

      const tl = gsap.timeline({ paused: true });
      tl.to(items, {
        autoAlpha: 1,
        y: 0,
        duration: 0.5,
        ease: 'power2.out',
        stagger: 0.08,
      });

      const trigger = ScrollTrigger.create({
        trigger: footerRef.current!,
        start: 'top bottom',
        once: true,
        onEnter: () => tl.play(0),
        onEnterBack: () => tl.play(0),
      });

      // si ya está visible al montar, anima inmediatamente
      if (footerRef.current && ScrollTrigger.isInViewport(footerRef.current)) {
        tl.play(0);
      }

      requestAnimationFrame(() => ScrollTrigger.refresh());
      return () => trigger.kill();
    }, footerRef);

    return () => ctx.revert();
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
          <ul ref={listRef}>
            {getNavigationItems(t)
              .filter(
                (link) =>
                  link.name !== t('nav.home') && link.name !== t('nav.contact'),
              )
              .map((link) => (
                <li key={link.name}>
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
