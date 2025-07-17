import { renderWithProviders } from '@/lib/test/renderWithProviders';
import JsonLdSchema from '..';
import { BasePageClass } from '@/lib/test/BasePageClass.to';
import { RenderResult } from '@testing-library/react';

class JsonLdSchemaPage extends BasePageClass {
  script: HTMLElement | null;
  constructor(result: RenderResult) {
    super(result);
    this.script = document.getElementById('yoelvys-schema');
  }
}

describe('JsonLdSchema PO', () => {
  it('exposes script element', () => {
    const page = new JsonLdSchemaPage(renderWithProviders(<JsonLdSchema schemaData={{ name: 'Test' }} />));
    expect(page.script).toBeInTheDocument();
  });
});
