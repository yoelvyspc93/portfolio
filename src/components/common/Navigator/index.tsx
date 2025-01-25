'use client';

import Link from 'next/link';
import styles from './Navigator.module.scss';
import { navigationItems } from '@/constants/navigator';
import { socialLinks } from '@/constants/social';
import { useState, useEffect } from 'react';
import HamburgerIcon from '@/../public/icons/hamburger.svg';
// import CloseIcon from '@/../public/icons/close-outline.svg';
import { clsx } from 'clsx';
import { useViewports } from '@/hook/useViewports';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useRouter, usePathname } from 'next/navigation';

export const Navigator = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { breakpoint } = useViewports();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin);
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
      <div className={clsx(styles.wrapper, open && styles.open)}>
        <div className={styles.navigator}>
          <ul>
            {navigationItems.map((link) => (
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
      </div>
      <div className={styles.button} onClick={handleClick}>
        {/* {open ? <CloseIcon /> : <HamburgerIcon />} */}
        <HamburgerIcon />
      </div>
    </nav>
  );
};
