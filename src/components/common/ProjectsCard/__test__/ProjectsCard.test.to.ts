import { renderWithProviders } from '@/lib/test/renderWithProviders';
import { ProjectsCard } from '..';
import { BasePageClass } from '@/lib/test/BasePageClass.to';
import { ButtonTO } from '@/lib/test/Button.to';
import { RenderResult } from '@testing-library/react';

class ProjectsCardPage extends BasePageClass {
  btn: ButtonTO;
  constructor(result: RenderResult) {
    super(result);
    this.btn = new ButtonTO(result, 'circle button');
  }
}

describe('ProjectsCard PO', () => {
  it('exposes circle button', () => {
    const page = new ProjectsCardPage(renderWithProviders(<ProjectsCard number="01" title="t" content="c" />));
    expect(page.btn.element).toBeInTheDocument();
  });
});
