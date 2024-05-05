import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, expect } from '@storybook/test';
import Glow from './Glow';

const meta = {
  title: 'Example/Glow',
  component: Glow,
  decorators: [
    Story => (
      <div
        style={{
          width: '320px',
          height: '400px',
          borderRadius: '20px',
          background: 'rgba(45,45,45,1)',
          display: 'flex',
          flexWrap: 'wrap',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <Story />
      </div>
    ),
  ],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof Glow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const 카드: Story = {
  args: {},
};
