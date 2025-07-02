import { TFunction } from 'i18next';

export interface NavigationItem {
  name: string;
  path: string;
}

export const getNavigationItems = (t: TFunction): NavigationItem[] => [
  { name: t('nav.home'), path: '#main' },
  { name: t('nav.about'), path: '#about' },
  { name: t('nav.projects'), path: '#projects' },
  { name: t('nav.experience'), path: '#experience' },
  { name: t('nav.skills'), path: '#skills' },
  { name: t('nav.contact'), path: '#contact' },
];
