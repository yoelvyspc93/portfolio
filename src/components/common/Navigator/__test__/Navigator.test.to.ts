import { renderWithProviders } from '@/lib/test/renderWithProviders';
import { Navigator } from '..';
import { BasePageClass } from '@/lib/test/BasePageClass.to';
import { RenderResult } from '@testing-library/react';

class NavigatorPage extends BasePageClass {
  nav: HTMLElement;
  constructor(result: RenderResult) {
    super(result);
    this.nav = result.getByRole('navigation');
  }
}

describe('Navigator PO', () => {
  it('exposes navigation element', () => {
    const page = new NavigatorPage(renderWithProviders(<Navigator />));
    expect(page.nav).toBeInTheDocument();
  });
});
