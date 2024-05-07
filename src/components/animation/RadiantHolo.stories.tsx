import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import RadiantHolo from './RadiantHolo';

const meta = {
  title: 'Card/RadiantHolo',
  component: RadiantHolo,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof RadiantHolo>;

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
    <RadiantHolo {...args}>
      <div
        style={DefaultStyle as React.CSSProperties}
      ></div>
    </RadiantHolo>
  ),args: {
    radiant: true,
    holo: true,
  },
};

export const Radiant: Story = {
  render: args => (
    <RadiantHolo {...args}>
      <div
        style={DefaultStyle as React.CSSProperties}
      ></div>
    </RadiantHolo>
  ),args: {
    radiant: true,
    holo: false,
  },
};

export const Holo: Story = {
  render: args => (
    <RadiantHolo {...args}>
      <div
        style={DefaultStyle as React.CSSProperties}
      ></div>
    </RadiantHolo>
  ),args: {
    radiant: false,
    holo: true,
  },
};
