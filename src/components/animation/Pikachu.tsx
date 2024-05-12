import React, { useState } from 'react';
import './Pikachu.scss';
import useMouse from '@/hooks/useMouse';

export default function Pikachu({ children, styleVarProps, shine = true, grad = true, holo = true }: any) {
  const { handleMouseMove, handleMouseLeave, styleVar } = useMouse();
  let styleVarValue = styleVarProps || styleVar;

  return (
    <div
      className='pikachu__wrapper'
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={styleVarValue as React.CSSProperties}
    >
      {shine && <div className='pikachu pikachu--shine' />}
      {grad && <div className='pikachu pikachu--grad' />}
      {holo && <div className='pikachu pikachu--holo' />}
      {children}
    </div>
  );
}
