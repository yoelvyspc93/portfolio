interface Project {
  id: string;
  title: string;
  shortDescription: string;
  detailedDescription: string[];
  imageUrl: string;
  techStack: string[];
  isFavorite: boolean;
  websiteUrl?: string;
}

export const projectList: Project[] = [
  {
    id: '01',
    title: 'Projects',
    shortDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pulvinar sapien ac ex ullamcorper.',
    detailedDescription: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pulvinar sapien ac ex ullamcorper, non elementum velit eleifend. Nulla efficitur, justo eget dictum dapibus, nunc justo consectetur sem, id finibus urna dolor sed arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pulvinar sapien ac ex ullamcorper, non elementum velit eleifend. Nulla efficitur.',
    ],
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
    imageUrl: '/images/images.webp',
    isFavorite: true,
  },
  {
    id: '02',
    title: 'Projects',
    shortDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pulvinar sapien ac ex ullamcorper.',
    detailedDescription: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pulvinar sapien ac ex ullamcorper, non elementum velit eleifend. Nulla efficitur, justo eget dictum dapibus, nunc justo consectetur sem, id finibus urna dolor sed arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pulvinar sapien ac ex ullamcorper, non elementum velit eleifend. Nulla efficitur.',
    ],
    techStack: ['Webflow'],
    imageUrl: '/images/images.webp',
    isFavorite: true,
  },
  {
    id: '03',
    title: 'Projects',
    shortDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pulvinar sapien ac ex ullamcorper.',
    detailedDescription: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pulvinar sapien ac ex ullamcorper, non elementum velit eleifend. Nulla efficitur, justo eget dictum dapibus, nunc justo consectetur sem, id finibus urna dolor sed arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pulvinar sapien ac ex ullamcorper, non elementum velit eleifend. Nulla efficitur.',
    ],
    techStack: ['Webflow'],
    imageUrl: '/images/images.webp',
    isFavorite: true,
  },
  {
    id: '04',
    title: 'Projects',
    shortDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pulvinar sapien ac ex ullamcorper.',
    detailedDescription: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pulvinar sapien ac ex ullamcorper, non elementum velit eleifend. Nulla efficitur, justo eget dictum dapibus, nunc justo consectetur sem, id finibus urna dolor sed arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pulvinar sapien ac ex ullamcorper, non elementum velit eleifend. Nulla efficitur.',
    ],
    techStack: ['Webflow', 'GSAP', 'Spline'],
    imageUrl: '/images/images.webp',
    isFavorite: true,
  },
  {
    id: '05',
    title: 'Projects',
    shortDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pulvinar sapien ac ex ullamcorper.',
    detailedDescription: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pulvinar sapien ac ex ullamcorper, non elementum velit eleifend. Nulla efficitur, justo eget dictum dapibus, nunc justo consectetur sem, id finibus urna dolor sed arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pulvinar sapien ac ex ullamcorper, non elementum velit eleifend. Nulla efficitur.',
    ],
    techStack: ['React', 'Websockets'],
    imageUrl: '/images/images.webp',
    isFavorite: false,
  },
];
