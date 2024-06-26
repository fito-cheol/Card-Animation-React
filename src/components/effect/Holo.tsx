import React, { useState } from 'react';
import './Holo.scss';
import useMouse from '@/hooks/useMouse';

export default function Holo({ children, rotationProps, positionProps, styleVarProps }: any) {
  const { handleMouseMove, handleMouseLeave, styleVar } = useMouse();
  let styleVarValue = styleVarProps || styleVar;

  return (
    <div
      className='holo__wrapper'
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={styleVarValue as React.CSSProperties}
    >
      <div className='holo' />
      {children}
    </div>
  );
}
