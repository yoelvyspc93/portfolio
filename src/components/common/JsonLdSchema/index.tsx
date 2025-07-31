import Script from 'next/script';
import { sanitizeHtml } from '@/utils/sanitizeHtml';

interface JsonLdSchemaProps {
  schemaData: Record<string, unknown>;
}

const JsonLdSchema = ({ schemaData }: JsonLdSchemaProps) => {
  return (
    <Script
      type="application/ld+json"
      id="yoelvys-schema"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: sanitizeHtml(JSON.stringify(schemaData)),
      }}
    />
  );
};

export default JsonLdSchema;
