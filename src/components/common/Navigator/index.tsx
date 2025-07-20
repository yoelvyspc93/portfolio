'use client';

import Link from 'next/link';
import styles from './Navigator.module.scss';
import { getNavigationItems } from '@/constants/navigator';
import { socialLinks } from '@/constants/social';
import { useState, useEffect } from 'react';
import { useTranslation } from '../../../hooks/useTranslation';
// import HamburgerIcon from '@/../public/icons/hamburger.svg';
// import CloseIcon from '@/../public/icons/close-outline.svg';
import { clsx } from 'clsx';
import { useViewports } from '@/hook/useViewports';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useRouter, usePathname } from 'next/navigation';

export const Navigator = () => {
  const { t, i18n } = useTranslation('common');
  const router = useRouter();
  const pathname = usePathname();
  const { breakpoint } = useViewports();
  const [open, setOpen] = useState(false);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang as 'en' | 'es');
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
      gsap.to(window, { duration: 1, scrollTo: href });
    } else {
      router.push(`/${href}`);
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
              <li onClick={() => handleClickItem(link.path)} key={link.name}>
                <Link href={'#'}>{link.name}</Link>
              </li>
            ))}
            {breakpoint === 'mobile' && (
              <li>
                <ul className={styles.social}>
                  {socialLinks.map((sm) => (
                    <li onClick={handleClickLink} key={sm.platform}>
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
        <div className={styles.navigator}>
          <ul>
            {['en', 'es'].map((lng) => (
              <li key={lng} onClick={() => changeLanguage(lng)}>
                {t(`lang.${lng}`)}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <button
        type="button"
        className={styles.button}
        onClick={handleClick}
        aria-label="Toggle navigation"
        aria-expanded={open}
        aria-controls="main-navigation"
        aria-keyshortcuts="Alt+M"
      >
        {/* {open ? <CloseIcon /> : <HamburgerIcon />} */}
        {/* <HamburgerIcon /> */}
      </button>
    </nav>
  );
};
