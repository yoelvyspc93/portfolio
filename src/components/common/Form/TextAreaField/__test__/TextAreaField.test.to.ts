import { BasePageClass } from '@/lib/test/BasePageClass.to';
import { FormFieldTO } from '@/lib/test/FormField.to';

import { RenderResult } from '@testing-library/react';

export class TextAreaFieldPage extends BasePageClass {
  field: FormFieldTO;
  constructor(result: RenderResult) {
    super(result);
    this.field = new FormFieldTO(result, 'Message');
  }
}
