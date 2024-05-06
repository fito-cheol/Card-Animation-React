import React, { useState } from 'react';
import './Line.scss';
import useMouse from '@/hooks/useMouse';

export default function Line({ children, dynamicStylesProps }: any) {
  const { handleMouseMove, handleMouseLeave, dynamicStyles } = useMouse();
  let dynamicStylesValue = dynamicStylesProps || dynamicStyles;

  return (
    <div
      className='line__wrapper'
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={dynamicStylesValue as React.CSSProperties}
    >
      <div className='line' />
      {children}
    </div>
  );
}
