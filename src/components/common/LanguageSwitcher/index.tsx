'use client';

import { usePathname, useRouter } from '@/navigation';
import styles from './LanguageSwitcher.module.scss';

export const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = (lng: string) => {
    router.replace(pathname, { locale: lng });
  };

  return (
    <div className={styles.languageSwitcher}>
      {['en', 'es'].map((lng) => (
        <button
          key={lng}
          onClick={() => changeLanguage(lng)}
          className={`${styles.langButton} ${
            router.locale === lng ? styles.active : ''
          }`}
          aria-label={`Switch to ${lng === 'en' ? 'English' : 'Spanish'}`}
        >
          {lng.toUpperCase()}
        </button>
      ))}
    </div>
  );
};
