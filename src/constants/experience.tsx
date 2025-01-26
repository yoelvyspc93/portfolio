import { ReactNode } from 'react';

import TypescriptIcon from '@/components/common/Icons/TypescriptIcon';
import WebflowIcon from '@/components/common/Icons/WebflowIcon';
import WordpressIcon from '@/components/common/Icons/WordpressIcon';

export interface WorkExperience {
  id: string;
  period: string;
  company: string;
  summary: string;
  details: string[];
  techStack: ReactNode[];
}

export const workExperiences: WorkExperience[] = [
  {
    id: '01',
    period: '2022 - Present',
    company: 'Dspot Team',
    summary:
      'I contributed to over 10 projects, including landing pages with advanced animations and optimized SEO, as well as complex applications handling large data volumes. Using tools like Next.js, I delivered innovative solutions and unique visual experiences.',
    details: [
      'I contributed to over 10 projects, including landing pages with advanced animations and optimized SEO, as well as complex applications handling large data volumes. Using tools like Next.js, I delivered innovative solutions and unique visual experiences.',
      'I also collaborated on enhancing the technical infrastructure, ensuring performance and reliability across diverse projects.',
    ],
    techStack: [
      <TypescriptIcon key="typescript" />,
      <WebflowIcon key="webflow" />,
      <WordpressIcon key="wordpress" />,
    ],
  },
  {
    id: '02',
    period: '2020 - 2022',
    company: 'Datazucar',
    summary:
      'I contributed to designing and developing critical business solutions for economic planning and management, utilized by over 60% of the country’s companies. I focused on building advanced Ext JS interfaces and robust backend systems with Django, optimizing operational efficiency.',
    details: [
      'I contributed to designing and developing critical business solutions for economic planning and management, utilized by over 60% of the country’s companies.',
      'Additionally, I implemented performance enhancements and ensured system scalability to meet high-volume demands.',
    ],
    techStack: [
      <TypescriptIcon key="typescript" />,
      <WebflowIcon key="webflow" />,
      <WordpressIcon key="wordpress" />,
    ],
  },
];
