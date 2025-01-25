import type { Meta, StoryObj } from '@storybook/react';

import { ProjectItem } from './index';

import ChromaticIcon from '@/../public/icons/chromatic.svg';
import CssIcon from '@/../public/icons/css.svg';
import CypressIcon from '@/../public/icons/cypress.svg';
import DjangoIcon from '@/../public/icons/django.svg';

const meta = {
  title: 'Components/ProjectItem',
  component: ProjectItem,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 1164 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ProjectItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Right: Story = {
  args: {
    title: 'Pioneerz',
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pulvinar sapien ac ex ullamcorper, non elementum velit eleifend. ',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pulvinar sapien ac ex ullamcorper, non elementum velit eleifend. ',
    ],
    technologies: [
      <CssIcon key="css1" />,
      <DjangoIcon key="django1" />,
      <CypressIcon key="cypress1" />,
      <ChromaticIcon key="chromatic1" />,
    ],
    imageUrl: '/images/about_project_1.png',
    align: 'right',
    id: 'pioneerz',
    website: 'https://example.com',
  },
};

export const Left: Story = {
  args: {
    title: 'Pioneerz',
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pulvinar sapien ac ex ullamcorper, non elementum velit eleifend. ',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pulvinar sapien ac ex ullamcorper, non elementum velit eleifend. ',
    ],
    technologies: [
      <CssIcon key="css1" />,
      <DjangoIcon key="django1" />,
      <CypressIcon key="cypress1" />,
      <ChromaticIcon key="chromatic1" />,
    ],
    imageUrl: '/images/about_project_1.png',
    align: 'left',
    id: 'pioneerz',
    website: 'https://example.com',
  },
};
