import { renderWithProviders } from '@/lib/test/renderWithProviders';
import { AboutModal } from '..';
import { screen } from '@testing-library/react';
import { AboutModalPage } from './AboutModal.test.to';

describe('AboutModal', () => {
  it('renders paragraphs from about info', () => {
    const page = new AboutModalPage(renderWithProviders(<AboutModal />));
    expect(page.first).toBeInTheDocument();
  });
});
