import { Contact } from '@/components/sections/home/Contact';
import type { Metadata } from 'next';
import { routing } from '@/i18n/navigation';
import JsonLdSchema from '@/components/common/JsonLdSchema';

interface Props {
  params: { locale: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params;
  const title = 'Contact | Yoelvys';
  const description = 'Get in touch with Yoelvys Perez Cabrera.';
  const languages: Record<string, string> = {};
  for (const loc of routing.locales) {
    languages[loc] = `/${loc}/contact`;
  }
  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/contact`,
      languages: {
        ...languages,
        'x-default': `/${routing.defaultLocale}/contact`,
      },
    },
    openGraph: {
      title,
      description,
      url: `/${locale}/contact`,
      locale,
      type: 'website',
    },
    twitter: { title, description },
  };
}

export default function ContactPage({ params }: Props) {
  const { locale } = params;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: `/${locale}`,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: 'yoelvyspc93@gmail.com',
      availableLanguage: routing.locales,
    },
  };
  return (
    <main id="main">
      <Contact />
      <JsonLdSchema schemaData={schema} />
    </main>
  );
}
