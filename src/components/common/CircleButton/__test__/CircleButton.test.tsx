import { renderWithProviders } from '@/lib/test/renderWithProviders';
import { CircleButton } from '..';
import { screen } from '@testing-library/react';

describe('CircleButton', () => {
  it('renders button with arrow icon', () => {
    renderWithProviders(<CircleButton />);
    expect(screen.getByRole('button', { name: 'circle button' })).toBeInTheDocument();
  });
});
