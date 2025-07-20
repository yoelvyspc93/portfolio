import { renderWithProviders } from '@/lib/test/renderWithProviders';
import { HeaderCard } from '..';
import { BasePageClass } from '@/lib/test/BasePageClass.to';
import { RenderResult } from '@testing-library/react';

class HeaderCardPage extends BasePageClass {
  number: HTMLElement;
  constructor(result: RenderResult) {
    super(result);
    this.number = result.getByText('01');
  }
}

describe('HeaderCard PO', () => {
  it('exposes number element', () => {
    const page = new HeaderCardPage(renderWithProviders(<HeaderCard number="01" label="Label" />));
    expect(page.number).toBeInTheDocument();
  });
});
