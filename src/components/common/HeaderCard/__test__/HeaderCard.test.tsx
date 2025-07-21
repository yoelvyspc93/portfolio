import { renderWithProviders } from '@/lib/test/renderWithProviders';
import { HeaderCard } from '..';
import { screen } from '@testing-library/react';
import { HeaderCardPage } from './HeaderCard.test.to';

describe('HeaderCard', () => {
  it('renders number and label', () => {
    const page = new HeaderCardPage(renderWithProviders(<HeaderCard number="01" label="Label" />));
    expect(page.number).toBeInTheDocument();
    expect(screen.getByText('Label')).toBeInTheDocument();
  });
});
