import React, { useState } from 'react';
import './AmazingRare.scss';
import useMouse from '@/hooks/useMouse';

export default function AmazingRare({ children, styleVarProps, shine = true, grad = true, holo = true }: any) {
  const { handleMouseMove, handleMouseLeave, styleVar } = useMouse();
  let styleVarValue = styleVarProps || styleVar;

  return (
    <div
      className='amazingRare__wrapper'
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={styleVarValue as React.CSSProperties}
    >
      {shine && <div className='amazing amazing--shine' />}
      {grad && <div className='amazing amazing--grad' />}
      {holo && <div className='amazing amazing--holo' />}
      {children}
    </div>
  );
}
