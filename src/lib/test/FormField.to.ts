import { RenderResult, fireEvent } from '@testing-library/react';
import { BasePageClass } from './BasePageClass.to';

export class FormFieldTO extends BasePageClass {
  constructor(renderResult: RenderResult, private label: string) {
    super(renderResult);
  }

  get input() {
    return this.renderResult.getByLabelText(this.label);
  }

  type(value: string) {
    fireEvent.change(this.input, { target: { value } });
  }
}
