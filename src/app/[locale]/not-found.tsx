import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';

export default function NotFound() {
  const t = useTranslations('common.notFound');
  return (
    <div>
      <h2>{t('title')}</h2>
      <p>{t('description')}</p>
      <Link href="/">{t('link')}</Link>
    </div>
  );
}
