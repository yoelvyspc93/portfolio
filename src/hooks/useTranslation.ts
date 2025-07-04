import { useTranslation as useI18nTranslation } from 'react-i18next';

type TranslationNamespace =
  | 'common'
  | 'about'
  | 'contact'
  | 'experience'
  | 'projects';

export function useTranslation(namespace: TranslationNamespace) {
  return useI18nTranslation(namespace);
}

// Re-export for convenience
export { useTranslation as default } from 'react-i18next';
