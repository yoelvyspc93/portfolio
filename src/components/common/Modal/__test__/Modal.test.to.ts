import { renderWithProviders } from '@/lib/test/renderWithProviders';
import { Modal } from '..';
import { BasePageClass } from '@/lib/test/BasePageClass.to';
import { RenderResult } from '@testing-library/react';

class ModalPage extends BasePageClass {
  title: HTMLElement;
  constructor(result: RenderResult) {
    super(result);
    this.title = result.getByText('T');
  }
}

describe('Modal PO', () => {
  it('exposes title element when open', () => {
    const page = new ModalPage(renderWithProviders(<Modal isOpen title="T">C</Modal>));
    expect(page.title).toBeInTheDocument();
  });
});
