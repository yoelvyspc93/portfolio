export interface NavigationItem {
  name: string;
  path: string;
}

export const navigationItems: NavigationItem[] = [
  { name: 'Home', path: '#main' },
  { name: 'About', path: '#about' },
  { name: 'Projects', path: '#projects' },
  { name: 'Experience', path: '#experience' },
  { name: 'Skills', path: '#skills' },
  { name: 'Contact', path: '#contact' },
];

// Function that uses translation function
export const getNavigationItems = (
  t?: (key: string) => string,
): NavigationItem[] => {
  if (!t) return navigationItems;

  return [
    { name: t('nav.home'), path: '#main' },
    { name: t('nav.about'), path: '#about' },
    { name: t('nav.projects'), path: '#projects' },
    { name: t('nav.experience'), path: '#experience' },
    { name: t('nav.skills'), path: '#skills' },
    { name: t('nav.contact'), path: '#contact' },
  ];
};
