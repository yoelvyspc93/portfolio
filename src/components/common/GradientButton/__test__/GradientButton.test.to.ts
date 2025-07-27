import { renderWithProviders } from '@/lib/test/renderWithProviders';
import { GradientButton } from '..';
import { BasePageClass } from '@/lib/test/BasePageClass.to';
import { ButtonTO } from '@/lib/test/Button.to';

import { RenderResult } from '@testing-library/react';

class GradientButtonPage extends BasePageClass {
  button: ButtonTO;
  constructor(result: RenderResult) {
    super(result);
    this.button = new ButtonTO(result, 'gradient button');
  }
}

describe('GradientButton PO', () => {
  it('should render and interact', () => {
    const handleClick = jest.fn();
    const page = new GradientButtonPage(renderWithProviders(
      <GradientButton onClick={handleClick}>Text</GradientButton>,
    ));
    page.button.element.click();
    expect(handleClick).toHaveBeenCalled();
  });
});
