import React, { useState } from 'react';
import './RadiantHolo.scss';
import useMouse from '@/hooks/useMouse';

export default function RadiantHolo({ children, dynamicStylesProps }: any) {
  const { handleMouseMove, handleMouseLeave, dynamicStyles } = useMouse();
  let dynamicStylesValue = dynamicStylesProps || dynamicStyles;

  return (
    <div
      className='radiantHolo__wrapper'
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={dynamicStylesValue as React.CSSProperties}
    >
      <div className='radiantHolo' />
      {children}
    </div>
  );
}
