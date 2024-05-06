import React, { useState } from 'react';
import './Glow.scss';
import useMouse from '../../hooks/useMouse';

export default function Glow({ children, dynamicStylesProps }: any) {
  const { handleMouseMove, handleMouseLeave, dynamicStyles } = useMouse();
  let dynamicStylesValue = dynamicStylesProps || dynamicStyles;

  return (
    <div
      className='glow__wrapper'
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={dynamicStylesValue as React.CSSProperties}
    >
      <div className='glow' />
      {children}
    </div>
  );
}
