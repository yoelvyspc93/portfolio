export interface ProjectData {
  id: string;
  imageUrl: string;
  imagesUrl: string[];
  techStack: string[];
  isFavorite: boolean;
  websiteUrl?: string;
}

export const projectsData: ProjectData[] = [
  {
    id: '01',
    techStack: [
      'Next.js',
      'GSAP',
      'SwiperJS',
      'Lottie',
      'Storybook',
      'Chromatic',
      'React Testing Library',
      'Cypress',
    ],
    imageUrl: '/images/projects/pioneerz.webp',
    imagesUrl: [
      '/images/projects/pioneerz.webp',
      '/images/projects/pioneerz.webp',
      '/images/projects/pioneerz.webp',
    ],
    isFavorite: true,
  },
  {
    id: '02',
    techStack: ['Webflow'],
    imageUrl: '/images/projects/kubeshark.webp',
    imagesUrl: [
      '/images/projects/kubeshark.webp',
      '/images/projects/kubeshark.webp',
      '/images/projects/kubeshark.webp',
    ],
    isFavorite: true,
    websiteUrl: 'https://kubeshark.co/',
  },
  {
    id: '03',
    techStack: ['Webflow'],
    imageUrl: '/images/projects/flowsev.webp',
    imagesUrl: [
      '/images/projects/flowsev.webp',
      '/images/projects/flowsev.webp',
      '/images/projects/flowsev.webp',
    ],
    isFavorite: true,
    websiteUrl: 'https://flowsev.ai/',
  },
  {
    id: '04',
    techStack: ['Webflow', 'GSAP', 'Spline'],
    imageUrl: '/images/projects/henig-diamond.webp',
    imagesUrl: [
      '/images/projects/henig-diamond.webp',
      '/images/projects/henig-diamond.webp',
      '/images/projects/henig-diamond.webp',
    ],
    isFavorite: true,
  },
  {
    id: '05',
    techStack: ['React', 'Websockets'],
    imageUrl: '/images/projects/lanetalk.webp',
    imagesUrl: [
      '/images/projects/lanetalk.webp',
      '/images/projects/lanetalk.webp',
      '/images/projects/lanetalk.webp',
    ],
    isFavorite: false,
  },
];
