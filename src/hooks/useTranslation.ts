import { useTranslations } from 'next-intl';

type TranslationNamespace =
  | 'common'
  | 'about'
  | 'contact'
  | 'experience'
  | 'projects';

export function useTranslation(namespace: TranslationNamespace) {
  const t = useTranslations(namespace);
  return { t };
}

// Re-export for convenience
export { useTranslations as default } from 'next-intl';
