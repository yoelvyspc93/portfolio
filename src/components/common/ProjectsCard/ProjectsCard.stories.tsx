import type { Meta, StoryObj } from '@storybook/react';

import { ProjectsCard } from './index';

const meta = {
  title: 'Components/ProjectsCard',
  component: ProjectsCard,
} satisfies Meta<typeof ProjectsCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    number: '01',
    title: 'Pioneerz',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pulvinar sapien ac ex ullamcorper, non elementum velit eleifend.',
  },
};
