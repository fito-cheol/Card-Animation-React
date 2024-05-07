import React, { useState } from 'react';
import './RadiantHolo.scss';
import useMouse from '@/hooks/useMouse';

export default function RadiantHolo({ children, dynamicStylesProps, radiant = true, holo = true, }: any) {
  const { handleMouseMove, handleMouseLeave, dynamicStyles } = useMouse();
  let dynamicStylesValue = dynamicStylesProps || dynamicStyles;

  return (
    <div
      className='radiantHolo__wrapper'
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={dynamicStylesValue as React.CSSProperties}
    >
      {radiant && <div className='radiant' />}
      {holo && <div className='radiant radiant--holo' />}
      {children}
    </div>
  );
}
