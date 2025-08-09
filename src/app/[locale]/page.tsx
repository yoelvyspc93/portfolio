import { featureFlags } from '@/constants/featureFlags';
import type { Metadata } from 'next';
import { routing } from '@/i18n/navigation';

import { Header } from '@/components/sections/home/Header';
import { About } from '@/components/sections/home2/About';
import { Contact } from '@/components/sections/home2/Contact';
import { Experience } from '@/components/sections/home2/Experience';
import { Projects } from '@/components/sections/home2/Projects';
import { Skills } from '@/components/sections/home2/Skills';

type Props = { params: { locale: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params;
  const title = 'Home | Yoelvys';
  const description =
    'Portfolio and professional information about Yoelvys Perez Cabrera.';

  const languages: Record<string, string> = {};
  for (const loc of routing.locales) {
    languages[loc] = `/${loc}`;
  }

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}`,
      languages: { ...languages, 'x-default': `/${routing.defaultLocale}` },
    },
    openGraph: {
      title,
      description,
      url: `/${locale}`,
      locale,
      type: 'website',
    },
    twitter: { title, description },
  };
}

export default function HomePage() {
  return (
    <main id="main">
      {featureFlags.showHeader && <Header />}
      {featureFlags.showAbout && <About />}
      {featureFlags.showProjects && <Projects />}
      {featureFlags.showExperience && <Experience />}
      {featureFlags.showSkills && <Skills />}
      {featureFlags.showContact && <Contact />}
    </main>
  );
}
