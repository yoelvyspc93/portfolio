import { renderWithProviders } from '@/lib/test/renderWithProviders';
import { LanguageSwitcher } from '..';
import { screen } from '@testing-library/react';

describe('LanguageSwitcher', () => {
  it('renders buttons for languages', () => {
    renderWithProviders(<LanguageSwitcher />);
    expect(screen.getByRole('button', { name: /english/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /spanish/i })).toBeInTheDocument();
  });
});
