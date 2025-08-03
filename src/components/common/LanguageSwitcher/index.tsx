'use client';

import { usePathname, useRouter } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import styles from './LanguageSwitcher.module.scss';

export const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

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
            locale === lng ? styles.active : ''
          }`}
          aria-label={`Switch to ${lng === 'en' ? 'English' : 'Spanish'}`}
        >
          {lng.toUpperCase()}
        </button>
      ))}
    </div>
  );
};
