import '@/styles/app.scss';

import { Montserrat } from 'next/font/google';
import { ReactNode } from 'react';
import { schemaData, metadata as seo } from '@/constants/metadata';
import { Metadata } from 'next';
import { Navigator } from '@/components/common/Navigator';
import { Footer } from '@/components/common/Footer';
import { appWithTranslation, useTranslation } from 'next-i18next';
import nextI18nConfig from '../../next-i18next.config';
import JsonLdSchema from '@/components/common/JsonLdSchema';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = seo;

function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const { i18n } = useTranslation('common');
  return (
    <html lang={i18n.language}>
      <body className={`${montserrat.variable}`}>
        <div className="page">
          <Navigator />
          {children}
          <Footer />
        </div>
        <JsonLdSchema schemaData={schemaData} />
      </body>
    </html>
  );
}

export default appWithTranslation(RootLayout, nextI18nConfig);
