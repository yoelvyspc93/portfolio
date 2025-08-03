import { redirect } from 'next/navigation';
import { routing } from '@/i18n/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Yoelvys Perez Cabrera - Frontend Developer',
  description:
    'Frontend Developer passionate about technology and innovation. Specializing in React, Next.js, and modern web development.',
  alternates: {
    canonical: `/${routing.defaultLocale}`,
    languages: {
      es: '/es',
      en: '/en',
      'x-default': `/${routing.defaultLocale}`,
    },
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Yoelvys Perez Cabrera - Frontend Developer',
    description:
      'Frontend Developer passionate about technology and innovation',
    url: `/${routing.defaultLocale}`,
    siteName: 'Yoelvys Perez Cabrera Portfolio',
    locale: routing.defaultLocale,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yoelvys Perez Cabrera - Frontend Developer',
    description:
      'Frontend Developer passionate about technology and innovation',
  },
};

export default function RootPage() {
  redirect(`/${routing.defaultLocale}`);
}
