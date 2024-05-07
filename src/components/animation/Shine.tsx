import React, { useState } from 'react';
import './Shine.scss';
import useMouse from '../../hooks/useMouse';

export default function Shine({ children, dynamicStylesProps }: any) {
  const { handleMouseMove, handleMouseLeave, dynamicStyles } = useMouse();
  let dynamicStylesValue = dynamicStylesProps || dynamicStyles;

  return (
    <div
      className='shine__wrapper'
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={dynamicStylesValue as React.CSSProperties}
    >
      <div className='shine' />
      {children}
    </div>
  );
}
