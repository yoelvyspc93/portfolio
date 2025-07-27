import { renderWithProviders } from '@/lib/test/renderWithProviders';
import { CustomImage } from '..';
import { screen } from '@testing-library/react';

describe('CustomImage', () => {
  it('renders img with provided src', () => {
    renderWithProviders(<CustomImage src="/img.png" alt="logo" />);
    expect(screen.getByAltText('logo')).toHaveAttribute('src', '/img.png');
  });
});
