import { renderWithProviders } from '@/lib/test/renderWithProviders';
import { GradientButton } from '..';
import { screen } from '@testing-library/react';

describe('GradientButton', () => {
  it('renders button with children', () => {
    renderWithProviders(<GradientButton>Test</GradientButton>);
    expect(screen.getByRole('button', { name: 'gradient button' })).toBeInTheDocument();
  });
});
