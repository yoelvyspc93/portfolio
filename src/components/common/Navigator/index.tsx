'use client';

import { usePathname, useRouter } from '@/utils/navigation';
import styles from './Navigator.module.scss';
import { getNavigationItems } from '@/constants/navigator';
import { socialLinks } from '@/constants/social';
import { featureFlags } from '@/constants/featureFlags';
import { useState, useEffect } from 'react';

import { clsx } from 'clsx';
import { useViewports } from '@/hooks/useViewports';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useTranslation } from '@/hooks/useTranslation';

export const Navigator = () => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const pathname = usePathname();
  const { breakpoint } = useViewports();
  const [open, setOpen] = useState(false);

  const changeLanguage = (lang: string) => {
    router.replace(pathname, { locale: lang });
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin);
    const handler = (e: KeyboardEvent) => {
      if (e.altKey && e.key.toLowerCase() === 'm') {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    document.addEventListener('keydown', handler);
    return () => {
      document.removeEventListener('keydown', handler);
    };
  }, []);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClickLink = () => {
    if (breakpoint === 'mobile') setOpen(false);
  };

  const handleClickItem = (href: string) => {
    if (pathname === '/') {
      gsap.to(globalThis, { duration: 1, scrollTo: href });
    } else {
      router.push(href);
    }
    handleClickLink();
  };

  return (
    <nav className={styles.nav}>
      <div
        id="main-navigation"
        className={clsx(styles.wrapper, open && styles.open)}
      >
        <div className={styles.navigator}>
          <ul>
            {getNavigationItems(t).map((link) => (
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
            {breakpoint === 'mobile' && (
              <li>
                <ul className={styles.social}>
                  {socialLinks.map((sm) => (
                    <li key={sm.platform}>
                      <a
                        aria-label={`link to ${sm.platform}`}
                        href={sm.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleClickLink}
                      >
                        {sm.icon}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            )}
          </ul>
        </div>
        <div className={styles.navigator}>
          <ul>
            {socialLinks.map((sm) => (
              <li key={sm.platform}>
                <a
                  aria-label={`link to ${sm.platform}`}
                  href={sm.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {sm.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {featureFlags.showLanguage && (
          <div className={styles.navigator}>
            <ul>
              {['en', 'es'].map((lng) => (
                <li key={lng}>
                  <button
                    type="button"
                    onClick={() => changeLanguage(lng)}
                    className={styles.linkButton}
                  >
                    {t(`lang.${lng}`)}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <button
        type="button"
        className={styles.button}
        onClick={handleClick}
        aria-label="Toggle navigation"
        aria-expanded={open}
        aria-controls="main-navigation"
        aria-keyshortcuts="Alt+M"
      ></button>
    </nav>
  );
};
