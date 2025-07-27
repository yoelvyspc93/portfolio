import { BasePageClass } from '@/lib/test/BasePageClass.to';
import { FormFieldTO } from '@/lib/test/FormField.to';

import { RenderResult } from '@testing-library/react';

export class InputFieldPage extends BasePageClass {
  input: FormFieldTO;
  constructor(result: RenderResult, label: string = 'Email') {
    super(result);
    this.input = new FormFieldTO(result, label);
  }
}

