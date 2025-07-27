import { renderWithProviders } from '@/lib/test/renderWithProviders';
import { ProjectItem } from '..';
import { screen } from '@testing-library/react';

describe('ProjectItem', () => {
  it('renders title and description', () => {
    renderWithProviders(
      <ProjectItem id="1" title="Proj" description={['desc']} technologies={[]} imagesUrl={[]} align="left" />
    );
    expect(screen.getByText('Proj')).toBeInTheDocument();
    expect(screen.getByText('desc')).toBeInTheDocument();
  });
});
