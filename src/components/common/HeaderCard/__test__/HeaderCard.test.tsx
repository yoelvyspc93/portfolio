import { renderWithProviders } from '@/lib/test/renderWithProviders';
import { HeaderCard } from '..';
import { screen } from '@testing-library/react';

describe('HeaderCard', () => {
  it('renders number and label', () => {
    renderWithProviders(<HeaderCard number="01" label="Label" />);
    expect(screen.getByText('01')).toBeInTheDocument();
    expect(screen.getByText('Label')).toBeInTheDocument();
  });
});
