import type { Meta, StoryObj } from '@storybook/react';

import { HeaderCard } from './index';

const meta = {
  title: 'Components/HeaderCard',
  component: HeaderCard,
} satisfies Meta<typeof HeaderCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    number: '12+',
    label: 'years of experience',
  },
};
