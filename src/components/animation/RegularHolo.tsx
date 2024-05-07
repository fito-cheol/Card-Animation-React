import React, { useState } from 'react';
import './RegularHolo.scss';
import useMouse from '@/hooks/useMouse';

export default function RegularHolo({ children, dynamicStylesProps, rainbow = true, mask = true, shine = true }: any) {
  const { handleMouseMove, handleMouseLeave, dynamicStyles } = useMouse();
  let dynamicStylesValue = dynamicStylesProps || dynamicStyles;

  return (
    <div
      className='regularHolo__wrapper'
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={dynamicStylesValue as React.CSSProperties}
    >
      {/* <div className={className} /> */}
      {rainbow && <div className='rainbow' />}
      {mask && <div className='rainbow rainbow--mask' />}
      {shine && <div className='rainbow rainbow--shine' />}
      {children}
    </div>
  );
}
