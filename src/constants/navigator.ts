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
