import { renderWithProviders } from '@/lib/test/renderWithProviders';
import { AboutModal } from '..';
import { aboutInfo } from '@/constants/about';
import { screen } from '@testing-library/react';

describe('AboutModal', () => {
  it('renders paragraphs from about info', () => {
    renderWithProviders(<AboutModal />);
    expect(screen.getByText(aboutInfo.detailedDescriptions[0])).toBeInTheDocument();
  });
});
