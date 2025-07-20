import { BasePageClass } from '@/lib/test/BasePageClass.to';
import { workExperiences } from '@/constants/experience';
import { RenderResult } from '@testing-library/react';

export class ExperienceModalPage extends BasePageClass {
  heading: HTMLElement;
  constructor(result: RenderResult) {
    super(result);
    this.heading = result.getByText(workExperiences[0].period);
  }
}
