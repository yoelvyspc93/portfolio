import { renderWithProviders } from '@/lib/test/renderWithProviders';
import { Footer } from '..';
import { BasePageClass } from '@/lib/test/BasePageClass.to';
import { RenderResult } from '@testing-library/react';

class FooterPage extends BasePageClass {
  nav: HTMLElement;
  constructor(result: RenderResult) {
    super(result);
    this.nav = result.getByRole('navigation');
  }
}

describe('Footer PO', () => {
  it('exposes nav element', () => {
    const page = new FooterPage(renderWithProviders(<Footer />));
    expect(page.nav).toBeInTheDocument();
  });
});
