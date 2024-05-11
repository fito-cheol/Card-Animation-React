import React, { useState } from 'react';
import './Shine.scss';
import useMouse from '../../hooks/useMouse';

export default function Shine({ children, styleVarProps }: any) {
  const { handleMouseMove, handleMouseLeave, styleVar } = useMouse();
  let styleVarValue = styleVarProps || styleVar;

  return (
    <div
      className='shine__wrapper'
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={styleVarValue as React.CSSProperties}
    >
      <div className='shine' />
      {children}
    </div>
  );
}
