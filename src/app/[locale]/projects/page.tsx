import { Header } from '@/components/sections/projects/Header';
import { ProjectsList } from '@/components/sections/projects/ProjectsList';
import { featureFlags } from '@/constants/featureFlags';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { routing } from '@/i18n/navigation';
import JsonLdSchema from '@/components/common/JsonLdSchema';

type Props = { params: { locale: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params;
  const title = 'Projects | Yoelvys';
  const description = 'Showcase of projects by Yoelvys Perez Cabrera.';
  const languages: Record<string, string> = {};
  for (const loc of routing.locales) {
    languages[loc] = `/${loc}/projects`;
  }
  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/projects`,
      languages: {
        ...languages,
        'x-default': `/${routing.defaultLocale}/projects`,
      },
    },
    openGraph: {
      title,
      description,
      url: `/${locale}/projects`,
      locale,
      type: 'website',
    },
    twitter: { title, description },
  };
}

export default function AllProjectsPage({ params }: Props) {
  if (!featureFlags.showProjects) {
    notFound();
  }
  const { locale } = params;
  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `/${locale}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Projects',
        item: `/${locale}/projects`,
      },
    ],
  };
  const collection = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Projects',
    description: 'List of projects built by Yoelvys Perez Cabrera',
  };
  return (
    <main id="main">
      <Header />
      <ProjectsList />
      <JsonLdSchema schemaData={breadcrumbs} />
      <JsonLdSchema schemaData={collection} />
    </main>
  );
}
