import { renderWithProviders } from '@/lib/test/renderWithProviders';
import { ExperienceCard } from '..';
import { BasePageClass } from '@/lib/test/BasePageClass.to';
import { ButtonTO } from '@/lib/test/Button.to';
import { RenderResult } from '@testing-library/react';

class ExperienceCardPage extends BasePageClass {
  button: ButtonTO;
  constructor(result: RenderResult) {
    super(result);
    this.button = new ButtonTO(result, 'See More');
  }
}

describe('ExperienceCard PO', () => {
  it('exposes see more button', () => {
    const page = new ExperienceCardPage(renderWithProviders(
      <ExperienceCard number="01" title="Dev" description="desc" />
    ));
    expect(page.button.element).toBeInTheDocument();
  });
});
