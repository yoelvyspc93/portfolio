'use client';

import Link from 'next/link';
import { useTranslation } from 'next-i18next';

export default function NotFound() {
  const { t } = useTranslation('common');
  return (
    <div>
      <h2>{t('notFound.title')}</h2>
      <p>{t('notFound.description')}</p>
      <Link href="/">{t('notFound.link')}</Link>
    </div>
  );
}
