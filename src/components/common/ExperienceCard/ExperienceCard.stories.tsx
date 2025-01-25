import type { Meta, StoryObj } from '@storybook/react';

import { ExperienceCard } from './index';

const meta = {
  title: 'Components/ExperienceCard',
  component: ExperienceCard,
} satisfies Meta<typeof ExperienceCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    number: '01',
    title: 'Dspot Team',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pulvinar sapien ac ex ullamcorper, non elementum velit eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pulvinar sapien ac ex ullamcorper, non elementum velit eleifend.',
  },
};
