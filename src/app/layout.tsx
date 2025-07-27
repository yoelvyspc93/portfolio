import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable}`}>
        <a href="#main" className="sr-only focus:not-sr-only skip-link">
          Skip to content
        </a>
        <I18nProvider>
          <div className="page">
            <Navigator />
            {children}
            <Footer />
          </div>
          <JsonLdSchema schemaData={schemaData} />
        </I18nProvider>
      </body>
    </html>
  );
}
