import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import RainbowHolo from './RainbowHolo';

const meta = {
  title: 'Card/RainbowHolo',
  component: RainbowHolo,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof RainbowHolo>;

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
    <RainbowHolo {...args}>
      <div style={DefaultStyle as React.CSSProperties}></div>
    </RainbowHolo>
  ),
  args: {
    rainbow: true,
    holo: true,
  },
};

export const Rainbow: Story = {
  render: args => (
    <RainbowHolo {...args}>
      <div style={DefaultStyle as React.CSSProperties}></div>
    </RainbowHolo>
  ),
  args: {
    rainbow: true,
    glitter: false,
    holo: false,
  },
};

export const Glitter: Story = {
  render: args => (
    <RainbowHolo {...args}>
      <div style={DefaultStyle as React.CSSProperties}></div>
    </RainbowHolo>
  ),
  args: {
    rainbow: false,
    glitter: true,
    holo: false,
  },
};

export const Holo: Story = {
  render: args => (
    <RainbowHolo {...args}>
      <div style={DefaultStyle as React.CSSProperties}></div>
    </RainbowHolo>
  ),
  args: {
    rainbow: false,
    glitter: false,
    holo: true,
  },
};
