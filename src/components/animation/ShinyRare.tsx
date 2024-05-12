import React, { useState } from 'react';
import './ShinyRare.scss';
import useMouse from '@/hooks/useMouse';

export default function ShinyRare({ children, styleVarProps, shine = true, grad = true, holo = true }: any) {
  const { handleMouseMove, handleMouseLeave, styleVar } = useMouse();
  let styleVarValue = styleVarProps || styleVar;

  return (
    <div
      className='shinyRare__wrapper'
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={styleVarValue as React.CSSProperties}
    >
      {shine && <div className='shiny shiny--shine' />}
      {grad && <div className='shiny shiny--grad' />}
      {holo && <div className='shiny shiny--holo' />}
      {children}
    </div>
  );
}
