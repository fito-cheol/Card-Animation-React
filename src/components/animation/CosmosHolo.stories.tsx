import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import CosmosHolo from './CosmosHolo';

const meta = {
  title: 'Card/CosmosHolo',
  component: CosmosHolo,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof CosmosHolo>;

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
    <CosmosHolo {...args}>
      <div style={DefaultStyle as React.CSSProperties}></div>
    </CosmosHolo>
  ),
  args: {
    shine: true,
    grad: true,
    holo: true,
  },
};

export const Shine: Story = {
  render: args => (
    <CosmosHolo {...args}>
      <div style={DefaultStyle as React.CSSProperties}></div>
    </CosmosHolo>
  ),
  args: {
    shine: true,
    grad: false,
    holo: false,
  },
};

export const Grad: Story = {
  render: args => (
    <CosmosHolo {...args}>
      <div style={DefaultStyle as React.CSSProperties}></div>
    </CosmosHolo>
  ),
  args: {
    shine: false,
    grad: true,
    holo: false,
  },
};

export const Holo: Story = {
  render: args => (
    <CosmosHolo {...args}>
      <div style={DefaultStyle as React.CSSProperties}></div>
    </CosmosHolo>
  ),
  args: {
    shine: false,
    grad: false,
    holo: true,
  },
};
