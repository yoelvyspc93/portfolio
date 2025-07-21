import { renderWithProviders } from '@/lib/test/renderWithProviders';
import { ProjectsCard } from '..';
import { screen } from '@testing-library/react';
import { ProjectsCardPage } from './ProjectsCard.test.to';

describe('ProjectsCard', () => {
  it('renders content', () => {
    const page = new ProjectsCardPage(renderWithProviders(<ProjectsCard number="01" title="t" content="c" />));
    expect(screen.getByText('t')).toBeInTheDocument();
    expect(screen.getByText('c')).toBeInTheDocument();
    expect(page.btn.element).toBeInTheDocument();
  });
});
