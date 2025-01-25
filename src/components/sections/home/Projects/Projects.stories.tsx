import type { Meta, StoryObj } from '@storybook/react';

import { Projects } from './index';

const meta = {
  title: 'Sections/Projects',
  component: Projects,
} satisfies Meta<typeof Projects>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
