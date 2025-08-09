import { useTranslations } from 'next-intl';

type TranslationNamespace =
  | 'common'
  | 'header'
  | 'about'
  | 'contact'
  | 'experience'
  | 'projects'
  | 'skills';

// Interface for type mapping (used for type inference)
// interface TranslationMap {
//   common: CommonTranslations;
//   about: AboutTranslations;
//   contact: ContactTranslations;
//   experience: ExperienceTranslations;
//   projects: ProjectTranslations;
//   skills: SkillsTranslations;
// }

export function useTranslation<T extends TranslationNamespace>(namespace: T) {
  const t = useTranslations(namespace);
  return { t };
}

// Re-export for convenience
export { useTranslations as default } from 'next-intl';
