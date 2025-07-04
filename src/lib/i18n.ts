import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import all translation files
import commonEn from '../../public/locales/en/common.json';
import commonEs from '../../public/locales/es/common.json';
import aboutEn from '../../public/locales/en/about.json';
import aboutEs from '../../public/locales/es/about.json';
import contactEn from '../../public/locales/en/contact.json';
import contactEs from '../../public/locales/es/contact.json';
import experienceEn from '../../public/locales/en/experience.json';
import experienceEs from '../../public/locales/es/experience.json';
import projectsEn from '../../public/locales/en/projects.json';
import projectsEs from '../../public/locales/es/projects.json';

// Translation resources
const resources = {
  en: {
    common: commonEn,
    about: aboutEn,
    contact: contactEn,
    experience: experienceEn,
    projects: projectsEn,
  },
  es: {
    common: commonEs,
    about: aboutEs,
    contact: contactEs,
    experience: experienceEs,
    projects: projectsEs,
  },
};

// Get saved language from localStorage (client-side only)
const getSavedLanguage = (): string => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('language') || 'en';
  }
  return 'en';
};

// Detect browser language
const detectBrowserLanguage = (): string => {
  if (typeof window !== 'undefined') {
    const browserLang = navigator.language.split('-')[0];
    return ['en', 'es'].includes(browserLang) ? browserLang : 'en';
  }
  return 'en';
};

i18n.use(initReactI18next).init({
  resources,
  lng: getSavedLanguage() || detectBrowserLanguage(),
  fallbackLng: 'en',
  debug: false,

  interpolation: {
    escapeValue: false, // React already escapes values
  },

  react: {
    useSuspense: false, // Important for static export
  },

  // Save language preference
  saveMissing: false,
});

// Save language changes to localStorage
i18n.on('languageChanged', (lng) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('language', lng);
  }
});

export default i18n;
