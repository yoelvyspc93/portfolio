import { renderWithProviders } from '@/lib/test/renderWithProviders';
import JsonLdSchema from '..';

describe('JsonLdSchema', () => {
  it('renders script tag', () => {
    const schema = { name: 'Test' };
    renderWithProviders(<JsonLdSchema schemaData={schema} />);
    const script = document.getElementById('yoelvys-schema');
    expect(script).toBeInTheDocument();
  });
});
