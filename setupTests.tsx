import '@testing-library/jest-dom';
import React from 'react';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';

jest.mock('next/router', () => ({ useRouter: jest.fn() }));
jest.mock('next/navigation', () => ({ usePathname: jest.fn(), useRouter: jest.fn() }));

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: function Image(props: any) {
    return <img {...props} />;
  },
}));


// Mock gsap and plugins
jest.mock('gsap', () => {
  const gsapMock = {
    registerPlugin: jest.fn(),
    to: jest.fn(),
    from: jest.fn(),
    fromTo: jest.fn(),
    set: jest.fn(),
    timeline: jest.fn(() => ({ fromTo: jest.fn().mockReturnThis() })),
  };
  return { __esModule: true, default: gsapMock, gsap: gsapMock };
});
jest.mock('gsap/ScrollTrigger', () => ({ ScrollTrigger: { getAll: jest.fn(() => []) } }));
jest.mock('gsap/ScrollToPlugin', () => ({ ScrollToPlugin: {} }));

// Mock swiper
jest.mock('swiper/react', () => ({ Swiper: ({ children }: any) => <div>{children}</div>, SwiperSlide: ({ children }: any) => <div>{children}</div> }));
jest.mock('swiper/modules', () => ({ Navigation: {}, Autoplay: {} }));
