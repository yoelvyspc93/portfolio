import { projectsData } from '@/constants/projects';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import JsonLdSchema from '@/components/common/JsonLdSchema';
import { routing } from '@/i18n/navigation';

interface Props {
  params: { locale: string; slug: string };
}

export const generateStaticParams = () =>
  projectsData.map((project) => ({ slug: project.slug }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = params;
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) return {};
  const title = `${project.title} | Yoelvys`;
  const description = project.description;
  const languages: Record<string, string> = {};
  for (const loc of routing.locales) {
    languages[loc] = `/${loc}/projects/${slug}`;
  }
  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/projects/${slug}`,
      languages: {
        ...languages,
        'x-default': `/${routing.defaultLocale}/projects/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `/${locale}/projects/${slug}`,
      images: [
        {
          url: project.imageUrl,
          alt: project.title,
        },
      ],
      locale,
      type: 'website',
    },
    twitter: { title, description },
  };
}

export default function ProjectDetailPage({ params }: Props) {
  const { slug, locale } = params;
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) notFound();

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Project',
    name: project.title,
    description: project.description,
    url: `/${locale}/projects/${slug}`,
    image: project.imageUrl,
    inLanguage: locale,
    keywords: project.techStack,
    datePublished: project.datePublished,
    dateModified: project.dateModified || project.datePublished,
    creator: {
      '@type': ['Person', 'SoftwareDeveloper'],
      name: 'Yoelvys Pérez Cabrera',
    },
  };

  return (
    <main id="main">
      <h1>{project.title}</h1>
      <JsonLdSchema schemaData={schema} />
    </main>
  );
}
