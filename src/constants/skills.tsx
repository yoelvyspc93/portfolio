import ChromaticIcon from '@/components/common/Icons/ChromaticIcon';
import CssIcon from '@/components/common/Icons/CssIcon';
import CypressIcon from '@/components/common/Icons/CypressIcon';
import DjangoIcon from '@/components/common/Icons/DjangoIcon';
import FigmaIcon from '@/components/common/Icons/FigmaIcon';
import HtmlIcon from '@/components/common/Icons/HtmlIcon';
import JavascriptIcon from '@/components/common/Icons/JavascriptIcon';
import JestIcon from '@/components/common/Icons/JestIcon';
import NextjsIcon from '@/components/common/Icons/NextjsIcon';
import PythonIcon from '@/components/common/Icons/PythonIcon';
import ReactIcon from '@/components/common/Icons/ReactIcon';
import ReactNativeIcon from '@/components/common/Icons/ReactNativeIcon';
import ReduxIcon from '@/components/common/Icons/ReduxIcon';
import StorybookIcon from '@/components/common/Icons/StorybookIcon';
import TypescriptIcon from '@/components/common/Icons/TypescriptIcon';
import WebflowIcon from '@/components/common/Icons/WebflowIcon';
import WordpressIcon from '@/components/common/Icons/WordpressIcon';
import { ReactNode } from 'react';

type Skill = {
  name: string;
  favorite: boolean;
  icon: ReactNode;
};

export const skills: (Skill | null)[] = [
  // 1 row
  null,
  null,
  null,
  { name: 'Next.js', favorite: true, icon: <NextjsIcon /> },
  { name: 'CSS3', favorite: false, icon: <CssIcon /> },
  { name: 'Redux', favorite: false, icon: <ReduxIcon /> },
  null,
  null,
  // 2 row
  null,
  null,
  { name: 'Figma', favorite: false, icon: <FigmaIcon /> },
  { name: 'React', favorite: true, icon: <ReactIcon /> },
  { name: 'Storybook', favorite: false, icon: <StorybookIcon /> },
  { name: 'Jest', favorite: false, icon: <JestIcon /> },
  // 3 row
  null,
  { name: 'React Native', favorite: false, icon: <ReactNativeIcon /> },
  { name: 'Webflow', favorite: true, icon: <WebflowIcon /> },
  { name: 'TypeScript', favorite: false, icon: <TypescriptIcon /> },
  { name: 'Cypress', favorite: false, icon: <CypressIcon /> },
  null,
  // 4 row
  { name: 'WordPress', favorite: false, icon: <WordpressIcon /> },
  { name: 'Python', favorite: false, icon: <PythonIcon /> },
  { name: 'JavaScript', favorite: true, icon: <JavascriptIcon /> },
  { name: 'Chromatic', favorite: false, icon: <ChromaticIcon /> },
  null,
  null,
  // 5 row
  null,
  null,
  { name: 'Django', favorite: false, icon: <DjangoIcon /> },
  { name: 'HTML5', favorite: false, icon: <HtmlIcon /> },
  null,
];

export const skills_mobile: (Skill | null)[] = [
  // 1 row
  null,
  { name: 'CSS3', favorite: false, icon: <CssIcon /> },
  { name: 'Next.js', favorite: true, icon: <NextjsIcon /> },
  { name: 'Redux', favorite: false, icon: <ReduxIcon /> },
  null,
  // 2 row
  { name: 'Figma', favorite: false, icon: <FigmaIcon /> },
  { name: 'Jest', favorite: false, icon: <JestIcon /> },
  { name: 'Storybook', favorite: false, icon: <StorybookIcon /> },
  { name: 'React Native', favorite: false, icon: <ReactNativeIcon /> },
  // 3 row
  { name: 'React', favorite: true, icon: <ReactIcon /> },
  { name: 'TypeScript', favorite: false, icon: <TypescriptIcon /> },
  { name: 'Cypress', favorite: false, icon: <CypressIcon /> },
  { name: 'Webflow', favorite: true, icon: <WebflowIcon /> },
  // 4 row
  { name: 'WordPress', favorite: false, icon: <WordpressIcon /> },
  { name: 'Python', favorite: false, icon: <PythonIcon /> },
  { name: 'Chromatic', favorite: false, icon: <ChromaticIcon /> },
  // 5 row
  { name: 'Django', favorite: false, icon: <DjangoIcon /> },
  { name: 'JavaScript', favorite: true, icon: <JavascriptIcon /> },
  { name: 'HTML5', favorite: false, icon: <HtmlIcon /> },
];
