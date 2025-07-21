import { renderWithProviders } from '@/lib/test/renderWithProviders';
import { CustomImage } from '..';
import { screen } from '@testing-library/react';
import { CustomImagePage } from './CustomImage.test.to';

describe('CustomImage', () => {
  it('renders img with provided src', () => {
    const page = new CustomImagePage(renderWithProviders(<CustomImage src="/img.png" alt="logo" />));
    expect(page.img).toHaveAttribute('src', '/img.png');
  });
});
