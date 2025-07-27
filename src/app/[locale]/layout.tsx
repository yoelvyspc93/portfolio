import '@/styles/app.scss';

import { ReactNode } from 'react';
import { schemaData, metadata as seo } from '@/constants/metadata';
import { Metadata } from 'next';
import { Navigator } from '@/components/common/Navigator';
import { Footer } from '@/components/common/Footer';
import JsonLdSchema from '@/components/common/JsonLdSchema';
import { NextIntlClientProvider } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { routing } from '@/navigation';
import { loadMessages } from '../../i18n/request';

export const metadata: Metadata = seo;

export const generateStaticParams = () =>
  routing.locales.map((locale: string) => ({ locale }));

export default async function LocaleLayout({
  children,
  params: { locale },
}: Readonly<{ children: ReactNode; params: { locale: string } }>) {
  setRequestLocale(locale);
  const messages = await loadMessages(locale);

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className="page">
            <Navigator />
            {children}
            <Footer />
          </div>
          <JsonLdSchema schemaData={schemaData} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
