import { renderWithProviders } from '@/lib/test/renderWithProviders';
import { CircleButton } from '..';
import { screen } from '@testing-library/react';
import { CircleButtonPage } from './CircleButton.test.to';

describe('CircleButton', () => {
  it('renders button with arrow icon', () => {
    const page = new CircleButtonPage(renderWithProviders(<CircleButton />));
    expect(page.button.element).toBeInTheDocument();
  });
});
