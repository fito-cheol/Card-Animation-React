import React, { useState } from 'react';
import './RegularHolo.scss';
import useMouse from '@/hooks/useMouse';

export default function RegularHolo({ children, styleVarProps, rainbow = true, mask = true, shine = true }: any) {
  const { handleMouseMove, handleMouseLeave, styleVar } = useMouse();
  let styleVarValue = styleVarProps || styleVar;

  return (
    <div
      className='regularHolo__wrapper'
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={styleVarValue as React.CSSProperties}
    >
      {rainbow && <div className='rainbowBar' />}
      {mask && <div className='rainbowBar rainbowBar--mask' />}
      {shine && <div className='rainbowBar rainbowBar--shine' />}
      {children}
    </div>
  );
}
