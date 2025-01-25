import { ReactNode } from 'react';

import ChromaticIcon from '@/../public/icons/chromatic.svg';
import CssIcon from '@/../public/icons/css.svg';
import CypressIcon from '@/../public/icons/cypress.svg';
import DjangoIcon from '@/../public/icons/django.svg';
import FigmaIcon from '@/../public/icons/figma.svg';
import HtmlIcon from '@/../public/icons/html.svg';
import JavascriptIcon from '@/../public/icons/javascript.svg';
import JestIcon from '@/../public/icons/jest.svg';
import NextJsIcon from '@/../public/icons/nextjs.svg';
import PythonIcon from '@/../public/icons/python.svg';
import ReactNativeIcon from '@/../public/icons/react-native.svg';
import ReactIcon from '@/../public/icons/react.svg';
import ReduxIcon from '@/../public/icons/redux.svg';
import StorybookIcon from '@/../public/icons/storybook.svg';
import TypeScriptIcon from '@/../public/icons/typescript.svg';
import WebflowIcon from '@/../public/icons/webflow.svg';
import WordpressIcon from '@/../public/icons/wordpress.svg';

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
  { name: 'Next.js', favorite: true, icon: <NextJsIcon /> },
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
  { name: 'TypeScript', favorite: false, icon: <TypeScriptIcon /> },
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
  { name: 'Next.js', favorite: true, icon: <NextJsIcon /> },
  { name: 'Redux', favorite: false, icon: <ReduxIcon /> },
  null,
  // 2 row
  { name: 'Figma', favorite: false, icon: <FigmaIcon /> },
  { name: 'Jest', favorite: false, icon: <JestIcon /> },
  { name: 'Storybook', favorite: false, icon: <StorybookIcon /> },
  { name: 'React Native', favorite: false, icon: <ReactNativeIcon /> },
  // 3 row
  { name: 'React', favorite: true, icon: <ReactIcon /> },
  { name: 'TypeScript', favorite: false, icon: <TypeScriptIcon /> },
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
