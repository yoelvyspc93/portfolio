import { renderWithProviders } from '@/lib/test/renderWithProviders';
import { InputField } from '..';
import { BasePageClass } from '@/lib/test/BasePageClass.to';
import { FormFieldTO } from '@/lib/test/FormField.to';

import { RenderResult } from '@testing-library/react';

class InputFieldPage extends BasePageClass {
  input: FormFieldTO;
  constructor(result: RenderResult) {
    super(result);
    this.input = new FormFieldTO(result, 'Email');
  }
}

describe('InputField PO', () => {
  it('allows typing', () => {
    const handleChange = jest.fn();
    const page = new InputFieldPage(renderWithProviders(
      <InputField label="Email" id="email" type="email" value="" onChange={handleChange} />,
    ));
    page.input.input.focus();
    page.input.input.dispatchEvent(new Event('change', { bubbles: true }));
    expect(page.input.input).toBeInTheDocument();
  });
});
