'use client';
import { usePathname } from 'next/navigation';

export default function NotFound() {
  const pathname = usePathname();
  const match = pathname.match(/^\/(es)\b/);
  const locale = match ? 'es' : 'en';

  console.log('locale', locale);

  return (
    <html lang={locale}>
      <body>
        <div>
          <h1>Página no encontrada</h1>
          <p>Ruta: {pathname}</p>
        </div>
      </body>
    </html>
  );
}
