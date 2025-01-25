import type { Meta, StoryObj } from '@storybook/react';

import { TextAreaField } from './index';

const meta = {
  title: 'Components/Form/TextAreaField',
  component: TextAreaField,
  decorators: [
    (Story) => (
      <div style={{ width: 450 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof TextAreaField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'form-message',
    label: 'Message',
    value: '',
    onChange: () => {},
  },
};
