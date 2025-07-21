import { renderWithProviders } from '@/lib/test/renderWithProviders';
import { Navigator } from '..';
import { screen, fireEvent } from '@testing-library/react';
import { NavigatorPage } from './Navigator.test.to';
import { useRouter, usePathname } from 'next/navigation';
jest.mock('@/hook/useViewports', () => ({ useViewports: jest.fn() }));
import { useViewports } from '@/hook/useViewports';
import gsap from 'gsap';

describe('Navigator', () => {
  it('renders navigation container', () => {
    (useViewports as jest.Mock).mockReturnValue({ breakpoint: 'desktop' });
    const page = new NavigatorPage(renderWithProviders(<Navigator />));
    expect(page.nav).toBeInTheDocument();
  });

  it('toggles menu open on button click', () => {
    (useRouter as jest.Mock).mockReturnValue({ push: jest.fn() });
    (usePathname as jest.Mock).mockReturnValue('/');
    (useViewports as jest.Mock).mockReturnValue({ breakpoint: 'mobile' });
    const page = new NavigatorPage(renderWithProviders(<Navigator />));
    const button = page.container.querySelector('.button') as HTMLElement;
    fireEvent.click(button);
    expect(page.container.querySelector('.open')).toBeInTheDocument();
  });

  it('scrolls when link clicked on home page', () => {
    (useRouter as jest.Mock).mockReturnValue({ push: jest.fn() });
    (usePathname as jest.Mock).mockReturnValue('/');
    (useViewports as jest.Mock).mockReturnValue({ breakpoint: 'desktop' });
    const page = new NavigatorPage(renderWithProviders(<Navigator />));
    const firstLink = page.container.querySelector('li') as HTMLElement;
    fireEvent.click(firstLink);
    expect(gsap.to).toHaveBeenCalled();
  });
});
