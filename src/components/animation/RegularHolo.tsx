import React, { useState } from 'react';
import './RegularHolo.scss';
import useMouse from '@/hooks/useMouse';

export default function RegularHolo({ children, dynamicStylesProps, regular = true, mask = true, shine = true }: any) {
  const { handleMouseMove, handleMouseLeave, dynamicStyles } = useMouse();
  let dynamicStylesValue = dynamicStylesProps || dynamicStyles;

  return (
    <div
      className='regularHolo__wrapper'
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={dynamicStylesValue as React.CSSProperties}
    >
      {regular && <div className='regular' />}
      {mask && <div className='regular regular--mask' />}
      {shine && <div className='regular regular--shine' />}
      {children}
    </div>
  );
}
