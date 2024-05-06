import React, { useState } from 'react';
import './Holo.scss';
import useMouse from '@/hooks/useMouse';

export default function Holo({ children, rotationProps, positionProps, dynamicStylesProps }: any) {
  const { handleMouseMove, handleMouseLeave, dynamicStyles } = useMouse();
  let dynamicStylesValue = dynamicStylesProps || dynamicStyles;

  return (
    <div
      className='holo__wrapper'
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={dynamicStylesValue as React.CSSProperties}
    >
      <div className='holo' />
      {children}
    </div>
  );
}
