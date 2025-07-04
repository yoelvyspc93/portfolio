interface Project {
  id: string;
  title: string;
  shortDescription: string;
  detailedDescription: string[];
  imageUrl: string;
  imagesUrl: string[];
  techStack: string[];
  isFavorite: boolean;
  websiteUrl?: string;
}

export const projectList: Project[] = [
  {
    id: '01',
    title: 'Pioneerz',
    shortDescription:
      'Modern platform for selling NFTs with advanced animations and seamless experience.',
    detailedDescription: [
      'I developed a modern platform for selling NFTs, built with Next.js. The website features advanced animations using GSAP, SwiperJS, and Lottie, delivering an interactive and seamless user experience. The project was meticulously tested and iterated using tools such as Storybook, Chromatic, React Testing Library, and Cypress.',
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
    title: 'Kubeshark',
    shortDescription:
      "Landing page designed to highlight Kubeshark's main features with a clean and responsive design.",
    detailedDescription: [
      "I developed the official landing page for Kubeshark using Webflow. The site was created to highlight the main features of the tool, with a clean, responsive design focused on user experience. Animations and smooth transitions were implemented to enhance interaction and capture visitors' attention.",
    ],
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
    title: 'FlowSev',
    shortDescription:
      "Modern and responsive landing page created to showcase FlowSev.ai's features.",
    detailedDescription: [
      "I developed the landing page for FlowSev.ai using Webflow, focusing on a modern and responsive design. The page integrates transitions and animations to highlight the service's features and provide an engaging and intuitive user experience.",
    ],
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
    title: 'Henig Diamond',
    shortDescription:
      'Informational landing page with 3D animations, an interactive map, and an intelligent chatbot.',
    detailedDescription: [
      "I developed the informational landing page for Henig Diamond, a company dedicated to diamond sales, using Webflow. The page incorporates advanced animations with GSAP and 3D elements created with Spline, along with an interactive map for office locations. I also integrated an intelligent chatbot designed to answer questions related to the company's services and products.",
    ],
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
    title: 'Lanetalk',
    shortDescription:
      'Real-time platform to display bowling scores using web-sockets.',
    detailedDescription: [
      'I developed Lanetalk, a platform built in React to display real-time bowling game scores. The application uses web-sockets to ensure continuous and seamless score updates, providing users with a dynamic and precise experience.',
    ],
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
