import type { Meta, StoryObj } from '@storybook/react';
import Holo from './Holo';

const meta = {
  title: 'Card/Holo',
  component: Holo,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof Holo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const 카드: Story = {
  render: args => (
    <>
      <Holo>
        <div
          style={{
            width: '320px',
            height: '400px',
            borderRadius: '20px',
            background: 'rgba(45,45,45,0.3)',
            display: 'flex',
            flexWrap: 'wrap',
            overflow: 'hidden',
            position: 'relative',
          }}
        ></div>
      </Holo>
    </>
  ),
};
