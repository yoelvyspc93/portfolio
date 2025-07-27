import { renderWithProviders } from '@/lib/test/renderWithProviders';
import { ProjectsCard } from '..';
import { screen } from '@testing-library/react';

describe('ProjectsCard', () => {
  it('renders content', () => {
    renderWithProviders(<ProjectsCard number="01" title="t" content="c" />);
    expect(screen.getByText('t')).toBeInTheDocument();
    expect(screen.getByText('c')).toBeInTheDocument();
  });
});
