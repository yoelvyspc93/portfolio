import { BasePageClass } from '@/lib/test/BasePageClass.to';
import { ButtonTO } from '@/lib/test/Button.to';
import { RenderResult } from '@testing-library/react';

export class ExperienceCardPage extends BasePageClass {
  button: ButtonTO;
  constructor(result: RenderResult) {
    super(result);
    this.button = new ButtonTO(result, 'gradient button');
  }
}
