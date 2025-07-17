import { renderWithProviders } from '@/lib/test/renderWithProviders';
import { ExperienceCard } from '..';
import { screen } from '@testing-library/react';

describe('ExperienceCard', () => {
  it('renders card details', () => {
    renderWithProviders(
      <ExperienceCard number="01" title="Dev" description="desc" />
    );
    expect(screen.getByText('Dev')).toBeInTheDocument();
    expect(screen.getByText('desc')).toBeInTheDocument();
  });
});
