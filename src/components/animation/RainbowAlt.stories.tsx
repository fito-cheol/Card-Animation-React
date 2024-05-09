import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import RainbowAlt from './RainbowAlt';

const meta = {
  title: 'Card/RainbowAlt',
  component: RainbowAlt,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof RainbowAlt>;

export default meta;
type Story = StoryObj<typeof meta>;

const DefaultStyle = {
  width: '320px',
  height: '400px',
  borderRadius: '20px',
  background: 'rgba(45,45,45,1)',
  display: 'flex',
  flexWrap: 'wrap',
  overflow: 'hidden',
  position: 'relative',
};

export const 카드: Story = {
  render: args => (
    <RainbowAlt {...args}>
      <div style={DefaultStyle as React.CSSProperties}></div>
    </RainbowAlt>
  ),
  args: {
    rainbow: true,
    holo: true,
    foil: true,
  },
};

// export const Rainbow: Story = {
//   render: args => (
//     <RainbowAlt {...args}>
//       <div style={DefaultStyle as React.CSSProperties}></div>
//     </RainbowAlt>
//   ),
//   args: {
//     rainbow: true,
//     glitter: false,
//     foil: false,
//   },
// };

// export const Glitter: Story = {
//   render: args => (
//     <RainbowAlt {...args}>
//       <div style={DefaultStyle as React.CSSProperties}></div>
//     </RainbowAlt>
//   ),
//   args: {
//     rainbow: false,
//     glitter: true,
//     foil: false,
//   },
// };

// export const Foil: Story = {
//   render: args => (
//     <RainbowAlt {...args}>
//       <div style={DefaultStyle as React.CSSProperties}></div>
//     </RainbowAlt>
//   ),
//   args: {
//     rainbow: false,
//     glitter: false,
//     foil: true,
//   },
// };
