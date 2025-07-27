import { renderWithProviders } from '@/lib/test/renderWithProviders';
import { ProjectItem } from '..';
import { BasePageClass } from '@/lib/test/BasePageClass.to';
import { RenderResult } from '@testing-library/react';

class ProjectItemPage extends BasePageClass {
  title: HTMLElement;
  constructor(result: RenderResult) {
    super(result);
    this.title = result.getByText('Proj');
  }
}

describe('ProjectItem PO', () => {
  it('exposes title element', () => {
    const page = new ProjectItemPage(renderWithProviders(
      <ProjectItem id="1" title="Proj" description={['desc']} technologies={[]} imagesUrl={[]} align="left" />
    ));
    expect(page.title).toBeInTheDocument();
  });
});
