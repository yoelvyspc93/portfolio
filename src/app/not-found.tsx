import { NextIntlClientProvider, useTranslations } from 'next-intl';
import { routing } from '@/navigation';
import { loadMessages } from '../i18n/request';
import { Link } from '@/navigation';

function NotFoundContent() {
  const t = useTranslations('common.notFound');
  return (
    <div>
      <h2>{t('title')}</h2>
      <p>{t('description')}</p>
      <Link href={`/${routing.defaultLocale}`}>{t('link')}</Link>
    </div>
  );
}

export default async function NotFoundPage() {
  const locale = routing.defaultLocale;
  const messages = await loadMessages(locale);
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <NotFoundContent />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
