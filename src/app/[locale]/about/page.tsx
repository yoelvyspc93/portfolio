import { About } from '@/components/sections/home/About';
import type { Metadata } from 'next';
import { routing } from '@/i18n/navigation';

interface Props {
  params: { locale: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params;
  const title = 'About | Yoelvys';
  const description = 'About Yoelvys Perez Cabrera.';
  const languages: Record<string, string> = {};
  for (const loc of routing.locales) {
    languages[loc] = `/${loc}/about`;
  }
  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/about`,
      languages: {
        ...languages,
        'x-default': `/${routing.defaultLocale}/about`,
      },
    },
    openGraph: {
      title,
      description,
      url: `/${locale}/about`,
      locale,
      type: 'profile',
    },
    twitter: { title, description },
  };
}

export default function AboutPage() {
  return (
    <main id="main">
      <About />
    </main>
  );
}
