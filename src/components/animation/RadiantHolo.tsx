import React, { useState } from 'react';
import './RadiantHolo.scss';
import useMouse from '@/hooks/useMouse';

export default function RadiantHolo({ children, styleVarProps, radiant = true, holo = true }: any) {
  const { handleMouseMove, handleMouseLeave, styleVar } = useMouse();
  let styleVarValue = styleVarProps || styleVar;

  return (
    <div
      className='radiantHolo__wrapper'
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={styleVarValue as React.CSSProperties}
    >
      {radiant && <div className='radiant' />}
      {holo && <div className='radiant radiant--holo' />}
      {children}
    </div>
  );
}
