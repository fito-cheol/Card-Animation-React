import type { Meta, StoryObj } from '@storybook/react';
import Line from './Line';

const meta = {
  title: 'Card/Line',
  component: Line,
  decorators: [
    Story => (
      <Story>
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
        ></div>
      </Story>
    ),
  ],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof Line>;

export default meta;
type Story = StoryObj<typeof meta>;

export const 카드: Story = {
  render: args => (
    <Line>
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
      ></div>
    </Line>
  ),
};
