import { renderWithProviders } from '@/lib/test/renderWithProviders';
import { CustomImage } from '..';
import { BasePageClass } from '@/lib/test/BasePageClass.to';
import { RenderResult } from '@testing-library/react';

class CustomImagePage extends BasePageClass {
  img: HTMLElement;
  constructor(result: RenderResult) {
    super(result);
    this.img = result.getByAltText('logo');
  }
}

describe('CustomImage PO', () => {
  it('exposes img element', () => {
    const page = new CustomImagePage(renderWithProviders(<CustomImage src="/img.png" alt="logo" />));
    expect(page.img).toBeInTheDocument();
  });
});
