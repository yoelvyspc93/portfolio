import { renderWithProviders } from '@/lib/test/renderWithProviders';
import { ProjectItem } from '..';
import { screen } from '@testing-library/react';
import { ProjectItemPage } from './ProjectItem.test.to';

describe('ProjectItem', () => {
  it('renders title and description', () => {
    const page = new ProjectItemPage(
      renderWithProviders(
        <ProjectItem id="1" title="Proj" description={['desc']} technologies={[]} imagesUrl={[]} align="left" />,
      ),
    );
    expect(page.title).toBeInTheDocument();
    expect(screen.getByText('desc')).toBeInTheDocument();
  });
});
