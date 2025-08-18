import { useTranslations } from 'next-intl';

type TranslationNamespace =
  | 'common'
  | 'header'
  | 'about'
  | 'contact'
  | 'experience'
  | 'projects'
  | 'skills';

export function useTranslation<T extends TranslationNamespace>(namespace: T) {
  const t = useTranslations(namespace);
  return { t };
}

export { useTranslations as default } from 'next-intl';
