import { renderWithProviders } from '@/lib/test/renderWithProviders';
import { CircleButton } from '..';
import { BasePageClass } from '@/lib/test/BasePageClass.to';
import { ButtonTO } from '@/lib/test/Button.to';

import { RenderResult } from '@testing-library/react';

class CircleButtonPage extends BasePageClass {
  button: ButtonTO;
  constructor(result: RenderResult) {
    super(result);
    this.button = new ButtonTO(result, 'circle button');
  }
}

describe('CircleButton PO', () => {
  it('should render and expose button', () => {
    const page = new CircleButtonPage(renderWithProviders(<CircleButton />));
    expect(page.button.element).toBeInTheDocument();
  });
});
