import { RenderResult } from '@testing-library/react';
import { BasePageClass } from './BasePageClass.to';

export class DialogTO extends BasePageClass {
  constructor(renderResult: RenderResult, private title: string) {
    super(renderResult);
  }

  get element() {
    return this.renderResult.getByRole('dialog', { name: this.title });
  }
}
