import { renderWithProviders } from '@/lib/test/renderWithProviders';
import { ProjectImages } from '..';
import { screen } from '@testing-library/react';

describe('ProjectImages', () => {
  it('renders all images', () => {
    renderWithProviders(<ProjectImages images={["a.png", "b.png"]} />);
    expect(screen.getAllByRole('img')).toHaveLength(2);
  });
});
