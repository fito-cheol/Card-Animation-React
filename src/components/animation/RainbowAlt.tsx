import React, { useState } from 'react';
import './RainbowAlt.scss';
import useMouse from '@/hooks/useMouse';

export default function RainbowAlt({ children, dynamicStylesProps, rainbow = true, glitter = true }: any) {
  const { handleMouseMove, handleMouseLeave, dynamicStyles } = useMouse();
  let dynamicStylesValue = dynamicStylesProps || dynamicStyles;

  return (
    <div
      className='rainbowAlt__wrapper'
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={dynamicStylesValue as React.CSSProperties}
    >
      {rainbow && <div className='rainbowAlt' />}
      {glitter && <div className='rainbowAlt rainbowAlt--glitter' />}
      {children}
    </div>
  );
}
