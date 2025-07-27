import { renderWithProviders } from '@/lib/test/renderWithProviders';
import { ExperienceModal } from '..';
import { BasePageClass } from '@/lib/test/BasePageClass.to';
import { workExperiences } from '@/constants/experience';
import { RenderResult } from '@testing-library/react';

class ExperienceModalPage extends BasePageClass {
  heading: HTMLElement;
  constructor(result: RenderResult) {
    super(result);
    this.heading = result.getByText(workExperiences[0].period);
  }
}

describe('ExperienceModal PO', () => {
  it('exposes period', () => {
    const page = new ExperienceModalPage(renderWithProviders(
      <ExperienceModal experience={workExperiences[0]} />
    ));
    expect(page.heading).toBeInTheDocument();
  });
});
