import React, { useState } from 'react';
import './RainbowAlt.scss';
import useMouse from '@/hooks/useMouse';

export default function RainbowAlt({ children, styleVarProps, rainbow = true, glitter = true, foil = true }: any) {
  const { handleMouseMove, handleMouseLeave, styleVar } = useMouse();
  let styleVarValue = styleVarProps || styleVar;

  return (
    <div
      className='rainbowAlt__wrapper'
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={styleVarValue as React.CSSProperties}
    >
      {rainbow && <div className='rainbowAlt rainbowAlt--shine' />}
      {glitter && <div className='rainbowAlt rainbowAlt--glitter' />}
      {foil && <div className='rainbowAlt rainbowAlt--foil' />}
      {children}
    </div>
  );
}
