import { renderWithProviders } from '@/lib/test/renderWithProviders';
import { Modal } from '..';
import { screen } from '@testing-library/react';

describe('Modal', () => {
  it('renders when open', () => {
    renderWithProviders(<Modal isOpen title="T">Content</Modal>);
    expect(screen.getByText('T')).toBeInTheDocument();
  });

  it('does not render when closed', () => {
    const { container } = renderWithProviders(<Modal isOpen={false} title="T">C</Modal>);
    expect(container.firstChild).toBeNull();
  });
});
