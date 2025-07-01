import { Metadata } from 'next';

const SITE_URL =
  process.env?.NEXT_PUBLIC_SITE_URL ||
  'https://yoelvyspc93.github.io/portfolio';

const description =
  'I am Yoelvys, a frontend developer specialized in Next.js, React, and modern technologies. Explore my portfolio featuring innovative projects, advanced animations, and scalable solutions.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Yoelvys | Frontend Developer',
  description,
  authors: [{ name: 'Yoelvys Perez Cabrera' }],
  // themeColor: "#1D212C",
  icons: {
    icon: '/portfolio/favicon.ico',
    shortcut: '/portfolio/favicon.png',
    apple: '/portfolio/favicon.png',
    // apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: 'Yoelvys | Frontend Developer',
    description,
    url: SITE_URL || '',
    siteName: 'Yoelvys Portfolio',
    images: [
      {
        url: SITE_URL + '/images/seo/og-image.png',
        width: 1000,
        height: 500,
        alt: 'Yoelvys Portfolio Open Graph Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yoelvys | Frontend Developer',
    description,
    images: [
      {
        url: SITE_URL + '/images/seo/twitter-card.png',
        alt: 'Yoelvys Portfolio Twitter Card Image',
      },
    ],
  },
};

export const schemaData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Yoelvys Pérez Cabrera',
  url: SITE_URL,
  image: SITE_URL + '/images/seo/og-image.png',
  jobTitle: 'Frontend Developer',
  worksFor: {
    '@type': 'Organization',
    name: 'Dspot Sp. z o.o.',
    url: 'https://www.dspot.com.pl',
  },
  sameAs: [SITE_URL, 'https://linkedin.com/in/yoelvys'],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Villa Clara',
    addressRegion: 'Cuba',
    addressCountry: 'CU',
  },
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'Universidad Central de Las Villas',
  },
  knowsAbout: [
    'JavaScript',
    'TypeScript',
    'Next.js',
    'React',
    'Figma',
    'Storybook',
    'Chromatic',
    'Cypress',
    'React Native',
    'Webflow',
    'Python',
    'GSAP',
    'Jest',
    'React Testing Library',
    'Tailwind CSS',
    'CSS3',
    'HTML5',
    'Git',
  ],
  description,
};
