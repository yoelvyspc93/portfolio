import { renderWithProviders } from '@/lib/test/renderWithProviders';
import { Navigator } from '..';
import { screen } from '@testing-library/react';

describe('Navigator', () => {
  it('renders navigation container', () => {
    renderWithProviders(<Navigator />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });
});
