import { renderWithProviders } from '@/lib/test/renderWithProviders';
import { Footer } from '..';
import { screen } from '@testing-library/react';

describe('Footer', () => {
  it('renders navigation links', () => {
    renderWithProviders(<Footer />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });
});
