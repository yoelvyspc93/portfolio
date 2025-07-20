import {
  createLocalizedPathnamesNavigation,
  defineRouting,
} from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['es', 'en'],
  defaultLocale: 'en',
  localePrefix: 'as-needed',
});

export const { Link, usePathname, useRouter, redirect } =
  createLocalizedPathnamesNavigation(routing);
