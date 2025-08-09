export interface ProjectData {
  id: string;
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  imagesUrl: string[];
  techStack: string[];
  isFavorite: boolean;
  websiteUrl?: string;
  datePublished?: string;
  dateModified?: string;
}

export const projectsData: ProjectData[] = [
  {
    id: '01',
    slug: 'pioneerz',
    title: 'Pioneerz',
    description: 'Blockchain game landing page.',
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
    datePublished: '2023-01-01',
  },
  {
    id: '02',
    slug: 'kubeshark',
    title: 'Kubeshark',
    description: 'Webflow marketing site for Kubeshark.',
    techStack: ['Webflow'],
    imageUrl: '/images/projects/kubeshark.webp',
    imagesUrl: [
      '/images/projects/kubeshark.webp',
      '/images/projects/kubeshark.webp',
      '/images/projects/kubeshark.webp',
    ],
    isFavorite: true,
    websiteUrl: 'https://kubeshark.co/',
    datePublished: '2023-01-01',
  },
  {
    id: '03',
    slug: 'flowsev',
    title: 'Flowsev',
    description: 'AI service landing built with Webflow.',
    techStack: ['Webflow'],
    imageUrl: '/images/projects/flowsev.webp',
    imagesUrl: [
      '/images/projects/flowsev.webp',
      '/images/projects/flowsev.webp',
      '/images/projects/flowsev.webp',
    ],
    isFavorite: true,
    websiteUrl: 'https://flowsev.ai/',
    datePublished: '2023-01-01',
  },
  {
    id: '04',
    slug: 'henig-diamond',
    title: 'Henig Diamond',
    description: 'Jewelry store website with animations.',
    techStack: ['Webflow', 'GSAP', 'Spline'],
    imageUrl: '/images/projects/henig-diamond.webp',
    imagesUrl: [
      '/images/projects/henig-diamond.webp',
      '/images/projects/henig-diamond.webp',
      '/images/projects/henig-diamond.webp',
    ],
    isFavorite: true,
    datePublished: '2023-01-01',
  },
  {
    id: '05',
    slug: 'lanetalk',
    title: 'Lanetalk',
    description: 'Real-time bowling analytics app.',
    techStack: ['React', 'Websockets'],
    imageUrl: '/images/projects/lanetalk.webp',
    imagesUrl: [
      '/images/projects/lanetalk.webp',
      '/images/projects/lanetalk.webp',
      '/images/projects/lanetalk.webp',
    ],
    isFavorite: false,
    datePublished: '2023-01-01',
  },
];
