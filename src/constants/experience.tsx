import { ReactNode } from 'react';

import TypescriptIcon from '@/components/common/Icons/TypescriptIcon';
import WebflowIcon from '@/components/common/Icons/WebflowIcon';
import WordpressIcon from '@/components/common/Icons/WordpressIcon';

export interface ExperienceData {
  id: string;
  techStack: ReactNode[];
}

export const experiencesData: ExperienceData[] = [
  {
    id: '01',
    techStack: [
      <TypescriptIcon key="typescript" />,
      <WebflowIcon key="webflow" />,
      <WordpressIcon key="wordpress" />,
    ],
  },
  {
    id: '02',
    techStack: [
      <TypescriptIcon key="typescript" />,
      <WebflowIcon key="webflow" />,
      <WordpressIcon key="wordpress" />,
    ],
  },
];
