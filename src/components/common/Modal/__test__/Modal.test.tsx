import { renderWithProviders } from '@/lib/test/renderWithProviders';
import { Modal } from '..';
import { screen } from '@testing-library/react';
import { ModalPage } from './Modal.test.to';

describe('Modal', () => {
  it('renders when open', () => {
    const page = new ModalPage(renderWithProviders(<Modal isOpen title="T">Content</Modal>));
    expect(page.title).toBeInTheDocument();
  });

  it('does not render when closed', () => {
    const { container } = renderWithProviders(<Modal isOpen={false} title="T">C</Modal>);
    expect(container.firstChild).toBeNull();
  });
});
