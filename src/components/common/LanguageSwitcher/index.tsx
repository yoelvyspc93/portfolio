'use client';

import { useTranslation } from '../../../hooks/useTranslation';
import styles from './LanguageSwitcher.module.scss';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation('common');

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={styles.languageSwitcher}>
      {['en', 'es'].map((lng) => (
        <button
          key={lng}
          onClick={() => changeLanguage(lng)}
          className={`${styles.langButton} ${
            i18n.language === lng ? styles.active : ''
          }`}
          aria-label={`Switch to ${lng === 'en' ? 'English' : 'Spanish'}`}
        >
          {lng.toUpperCase()}
        </button>
      ))}
    </div>
  );
};
