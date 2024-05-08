import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import RegularHolo from './RegularHolo';

const meta = {
  title: 'Card/RegularHolo',
  component: RegularHolo,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof RegularHolo>;

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

export const 원본: Story = {
  render: args => (
    <RegularHolo {...args}>
      <div style={DefaultStyle as React.CSSProperties}></div>
    </RegularHolo>
  ),
  args: {
    regular: true,
    mask: true,
    shine: true,
  },
};

export const Regular: Story = {
  render: args => (
    <RegularHolo {...args}>
      <div style={DefaultStyle as React.CSSProperties}></div>
    </RegularHolo>
  ),
  args: {
    regular: true,
    mask: false,
    shine: false,
  },
};

export const Mask: Story = {
  render: args => (
    <RegularHolo {...args}>
      <div style={DefaultStyle as React.CSSProperties}></div>
    </RegularHolo>
  ),
  args: {
    regular: false,
    mask: true,
    shine: false,
  },
};

export const Shine: Story = {
  render: args => (
    <RegularHolo {...args}>
      <div style={DefaultStyle as React.CSSProperties}></div>
    </RegularHolo>
  ),
  args: {
    regular: false,
    mask: false,
    shine: true,
  },
};
