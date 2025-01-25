import '@/styles/app.scss';

import { Montserrat } from 'next/font/google';
import { ReactNode } from 'react';
import { metadata as seo } from '@/constants/metadata';
import { Metadata } from 'next';
// import { Navigator } from '@/components/common/Navigator';
import { Footer } from '@/components/sections/home/Footer';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = seo;

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable}`}>
        <div className="page">
          {/* <Navigator /> */}
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
