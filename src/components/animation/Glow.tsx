import React, { useState } from 'react';
import './Glow.scss';
import useMouse from '../../hooks/useMouse';

export default function Glow({ children, rotationProps, positionProps }: any) {
  const { rotation, position, handleMouseMove, handleMouseLeave, dynamicStyles } = useMouse();
  let rotationValue = rotationProps || rotation;
  let positionValue = positionProps || position;
  return (
    <div
      className='glow__wrapper'
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={dynamicStyles as React.CSSProperties}
    >
      <div className='glow' />
      {children}
    </div>
  );
}
