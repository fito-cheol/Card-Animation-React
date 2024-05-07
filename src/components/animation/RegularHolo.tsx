import React, { useState } from 'react';
import './RegularHolo.scss';
import useMouse from '@/hooks/useMouse';

export default function RegularHolo({ children, dynamicStylesProps }: any) {
  const { handleMouseMove, handleMouseLeave, dynamicStyles } = useMouse();
  let dynamicStylesValue = dynamicStylesProps || dynamicStyles;

  return (
    <div
      className='regularHolo__wrapper'
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={dynamicStylesValue as React.CSSProperties}
    >
      <div className='regularHolo' />
      {children}
    </div>
  );
}
