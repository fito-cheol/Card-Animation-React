import React, { useState } from 'react';
import './Glow.scss';
import useMouse from '../../hooks/useMouse';

export default function Glow({ children, rotationProps, positionProps }: any) {
  const { rotation, position, handleMouseMove, handleMouseLeave } = useMouse();
  let rotationValue = rotationProps || rotation;
  let positionValue = positionProps || position;
  return (
    <div className='glow__wrapper' onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <div className='glow' style={{ left: positionValue.x, top: positionValue.y }}></div>
      {children}
    </div>
  );
}
