import { renderWithProviders } from '@/lib/test/renderWithProviders';
import { ProjectImages } from '..';
import { screen } from '@testing-library/react';
import { ProjectImagesPage } from './ProjectImages.test.to';

describe('ProjectImages', () => {
  it('renders all images', () => {
    const page = new ProjectImagesPage(
      renderWithProviders(<ProjectImages images={["a.png", "b.png"]} />),
    );
    expect(page.images.length).toBe(2);
  });

  it('renders navigation buttons', () => {
    renderWithProviders(<ProjectImages images={["a.png"]} />);
    expect(screen.getByRole('button', { name: 'previous image' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'next image' })).toBeInTheDocument();
    screen.getByRole('button', { name: 'next image' }).click();
    screen.getByRole('button', { name: 'previous image' }).click();
  });
});
