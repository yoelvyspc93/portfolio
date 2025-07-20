import { RenderResult } from '@testing-library/react';
import { BasePageClass } from './BasePageClass.to';

export class ButtonTO extends BasePageClass {
  constructor(renderResult: RenderResult, private name: string) {
    super(renderResult);
  }

  get element() {
    return this.renderResult.getByRole('button', { name: this.name });
  }

  click() {
    this.element.click();
  }

  get disabled() {
    return (this.element as HTMLButtonElement).disabled;
  }
}
