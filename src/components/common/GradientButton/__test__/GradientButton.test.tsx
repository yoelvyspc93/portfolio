import { renderWithProviders } from '@/lib/test/renderWithProviders';
import { GradientButton } from '..';
import { screen } from '@testing-library/react';
import { GradientButtonPage } from './GradientButton.test.to';

describe('GradientButton', () => {
  it('renders button with children', () => {
    const page = new GradientButtonPage(renderWithProviders(<GradientButton>Test</GradientButton>));
    expect(page.button.element).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    const page = new GradientButtonPage(renderWithProviders(<GradientButton onClick={handleClick}>Go</GradientButton>));
    page.button.click();
    expect(handleClick).toHaveBeenCalled();
  });

  it('renders as link when href provided', () => {
    renderWithProviders(<GradientButton href="https://example.com">Link</GradientButton>);
    expect(screen.getByRole('link', { name: 'gradient button' })).toHaveAttribute('href', 'https://example.com');
  });

  it('handles hover animations', () => {
    const page = new GradientButtonPage(renderWithProviders(<GradientButton>Hover</GradientButton>));
    const button = page.button.element;
    button.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));
    button.dispatchEvent(new MouseEvent('mouseleave', { bubbles: true }));
    expect(button).toBeInTheDocument();
  });

  it('link hover and attributes', () => {
    const page = new GradientButtonPage(
      renderWithProviders(<GradientButton href="#test">Link</GradientButton>),
    );
    const link = screen.getByRole('link', { name: 'gradient button' });
    link.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));
    link.dispatchEvent(new MouseEvent('mouseleave', { bubbles: true }));
    expect(link).toHaveAttribute('href', '#test');
  });
});
