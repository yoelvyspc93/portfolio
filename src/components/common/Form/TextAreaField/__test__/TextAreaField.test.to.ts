import { renderWithProviders } from '@/lib/test/renderWithProviders';
import { TextAreaField } from '..';
import { BasePageClass } from '@/lib/test/BasePageClass.to';
import { FormFieldTO } from '@/lib/test/FormField.to';

import { RenderResult } from '@testing-library/react';

class TextAreaFieldPage extends BasePageClass {
  field: FormFieldTO;
  constructor(result: RenderResult) {
    super(result);
    this.field = new FormFieldTO(result, 'Message');
  }
}

describe('TextAreaField PO', () => {
  it('exposes textarea', () => {
    const page = new TextAreaFieldPage(renderWithProviders(
      <TextAreaField label="Message" id="msg" value="" onChange={jest.fn()} />,
    ));
    expect(page.field.input).toBeInTheDocument();
  });
});
