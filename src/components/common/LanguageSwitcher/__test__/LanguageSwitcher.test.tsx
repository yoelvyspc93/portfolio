import { renderWithProviders } from '@/lib/test/renderWithProviders';
import { LanguageSwitcher } from '..';
import { screen } from '@testing-library/react';
import { LanguageSwitcherPage } from './LanguageSwitcher.test.to';

describe('LanguageSwitcher', () => {
  it('renders buttons for languages', () => {
    const page = new LanguageSwitcherPage(renderWithProviders(<LanguageSwitcher />));
    expect(page.en.element).toBeInTheDocument();
    expect(page.es.element).toBeInTheDocument();
  });
});
