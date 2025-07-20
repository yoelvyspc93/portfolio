import { renderWithProviders } from '@/lib/test/renderWithProviders';
import JsonLdSchema from '..';
import { JsonLdSchemaPage } from './JsonLdSchema.test.to';

describe('JsonLdSchema', () => {
  it('renders script tag', () => {
    const schema = { name: 'Test' };
    const page = new JsonLdSchemaPage(renderWithProviders(<JsonLdSchema schemaData={schema} />));
    expect(page.script).toBeInTheDocument();
  });
});
