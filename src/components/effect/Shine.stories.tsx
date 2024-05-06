import type { Meta, StoryObj } from '@storybook/react';
import Shine from './Shine';

const meta = {
  title: 'Card/Shine',
  component: Shine,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof Shine>;

export default meta;
type Story = StoryObj<typeof meta>;

export const 카드: Story = {
  render: args => (
    <>
      <Shine>
        <div
          style={{
            width: '320px',
            height: '400px',
            borderRadius: '20px',
            background: 'rgba(250,180,20,1)',
            display: 'flex',
            flexWrap: 'wrap',
            overflow: 'hidden',
            position: 'relative',
          }}
        ></div>
      </Shine>
      <div
        style={{
          width: '320px',
          height: '400px',
          borderRadius: '20px',
          background: 'rgba(250,180,20,1)',
          display: 'flex',
          flexWrap: 'wrap',
          overflow: 'hidden',
          position: 'relative',
        }}
      ></div>
    </>
  ),
};
