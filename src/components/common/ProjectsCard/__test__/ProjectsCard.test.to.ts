import { BasePageClass } from '@/lib/test/BasePageClass.to';
import { ButtonTO } from '@/lib/test/Button.to';
import { RenderResult } from '@testing-library/react';

export class ProjectsCardPage extends BasePageClass {
  btn: ButtonTO;
  constructor(result: RenderResult) {
    super(result);
    this.btn = new ButtonTO(result, 'circle button');
  }
}
