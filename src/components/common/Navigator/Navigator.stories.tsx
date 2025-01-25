import type { Meta, StoryObj } from '@storybook/react';

import { Navigator } from './index';

const meta = {
  title: 'Components/Navigator',
  component: Navigator,
} satisfies Meta<typeof Navigator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
