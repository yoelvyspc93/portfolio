import { renderWithProviders } from '@/lib/test/renderWithProviders';
import { AboutModal } from '..';
import { BasePageClass } from '@/lib/test/BasePageClass.to';
import { aboutInfo } from '@/constants/about';
import { RenderResult } from '@testing-library/react';

class AboutModalPage extends BasePageClass {
  first: HTMLElement;
  constructor(result: RenderResult) {
    super(result);
    this.first = result.getByText(aboutInfo.detailedDescriptions[0]);
  }
}

describe('AboutModal PO', () => {
  it('exposes first paragraph', () => {
    const page = new AboutModalPage(renderWithProviders(<AboutModal />));
    expect(page.first).toBeInTheDocument();
  });
});
