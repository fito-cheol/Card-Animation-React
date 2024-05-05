import type { Meta, StoryObj } from '@storybook/react';

import PlayerCard from './PlayerCard';

const meta = {
  title: 'Card/PlayerCard',
  component: PlayerCard,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof PlayerCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const 카드: Story = {
  args: {
    player: {
      nickName: '손흥민',
      role: 0,
      picture:
        'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcT8lnTegzfhRU7K4n1y2VgQhUyVmFZWCnyNPFQnVT6Iw4ScgKoIoGPvNvmmoGTg2NSAzdAXifddiiumynE',
    },
  },
};
