import React, { useState } from 'react';
import './RainbowHolo.scss';
import useMouse from '@/hooks/useMouse';

export default function RainbowHolo({ children, styleVarProps, rainbow = true, glitter = true, holo = true }: any) {
  const { handleMouseMove, handleMouseLeave, styleVar } = useMouse();
  let styleVarValue = styleVarProps || styleVar;

  return (
    <div
      className='rainbowHolo__wrapper'
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={styleVarValue as React.CSSProperties}
    >
      {rainbow && <div className='rainbowGrad' />}
      {glitter && <div className='rainbowGrad rainbowGrad--glitter' />}
      {holo && <div className='rainbowGrad rainbowGrad--holo' />}
      {children}
    </div>
  );
}
