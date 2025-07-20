import { renderWithProviders } from '@/lib/test/renderWithProviders';
import { ExperienceCard } from '..';
import { screen } from '@testing-library/react';
import { ExperienceCardPage } from './ExperienceCard.test.to';

describe('ExperienceCard', () => {
  it('renders card details', () => {
    const page = new ExperienceCardPage(
      renderWithProviders(
        <ExperienceCard number="01" title="Dev" description="desc" />,
      ),
    );
    expect(screen.getByText('Dev')).toBeInTheDocument();
    expect(screen.getByText('desc')).toBeInTheDocument();
    expect(page.button.element).toBeInTheDocument();
  });
});
