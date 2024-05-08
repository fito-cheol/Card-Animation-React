import React, { useState } from 'react';
import './RainbowHolo.scss';
import useMouse from '@/hooks/useMouse';

export default function RainbowHolo({
  children,
  dynamicStylesProps,
  rainbow = true,
  glitter = true,
  holo = true,
}: any) {
  const { handleMouseMove, handleMouseLeave, dynamicStyles } = useMouse();
  let dynamicStylesValue = dynamicStylesProps || dynamicStyles;

  return (
    <div
      className='rainbowHolo__wrapper'
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={dynamicStylesValue as React.CSSProperties}
    >
      {rainbow && <div className='rainbow' />}
      {glitter && <div className='rainbow rainbow--glitter' />}
      {holo && <div className='rainbow rainbow--holo' />}
      {children}
    </div>
  );
}
