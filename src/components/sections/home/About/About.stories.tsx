import type { Meta, StoryObj } from '@storybook/react';

import { About } from './index';

const meta = {
  title: 'Sections/About',
  component: About,
} satisfies Meta<typeof About>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
