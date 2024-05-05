import React, { useState } from 'react';
import './Line.scss';
import useMouse from '../../hooks/useMouse';

export default function Line({ children, rotationProps, positionProps }: any) {
  const { rotation, position, handleMouseMove, handleMouseLeave } = useMouse();
  let rotationValue = rotationProps || rotation;
  let positionValue = positionProps || position;
  return (
    <div className='line__wrapper' onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <div className='line' style={{ backgroundPosition: (rotationValue.x + rotationValue.y) * 2 }}></div>
      {children}
    </div>
  );
}
