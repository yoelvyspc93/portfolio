import type { Meta, StoryObj } from '@storybook/react';

import { InputField } from './index';

const meta = {
  title: 'Components/Form/InputField',
  component: InputField,
  decorators: [
    (Story) => (
      <div style={{ width: 450 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof InputField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'form-mail',
    label: 'Email',
    value: '',
    onChange: () => {},
    type: 'email',
  },
};
