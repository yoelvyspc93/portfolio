import { redirect } from 'next/navigation';
import { routing } from '@/navigation';

export default function RootPage() {
  redirect(`/${routing.defaultLocale}`);
}
