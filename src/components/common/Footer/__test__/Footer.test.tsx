import { renderWithProviders } from '@/lib/test/renderWithProviders';
import { Footer } from '..';
import { FooterPage } from './Footer.test.to';

describe('Footer', () => {
  it('renders navigation links', () => {
    const page = new FooterPage(renderWithProviders(<Footer />));
    expect(page.nav).toBeInTheDocument();
  });
});
