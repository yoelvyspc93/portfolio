import type { Meta, StoryObj } from '@storybook/react';

import { Experience } from './index';

const meta = {
  title: 'Sections/Experience',
  component: Experience,
} satisfies Meta<typeof Experience>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
