import { renderWithProviders } from '@/lib/test/renderWithProviders';
import { ProjectImages } from '..';
import { BasePageClass } from '@/lib/test/BasePageClass.to';
import { RenderResult } from '@testing-library/react';

class ProjectImagesPage extends BasePageClass {
  images: HTMLElement[];
  constructor(result: RenderResult) {
    super(result);
    this.images = result.getAllByRole('img');
  }
}

describe('ProjectImages PO', () => {
  it('exposes images list', () => {
    const page = new ProjectImagesPage(renderWithProviders(<ProjectImages images={["a.png"]} />));
    expect(page.images.length).toBe(1);
  });
});
