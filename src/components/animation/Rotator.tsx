import React, { useState } from 'react';
import './Rotator.scss';
import useMouse from '../../hooks/useMouse';

export default function Rotator({ children, rotationProps, positionProps }: any) {
  const { rotation, position, handleMouseMove, handleMouseLeave } = useMouse();
  let rotationValue = rotationProps || rotation;
  let positionValue = positionProps || position;

  const rotateStyle = {
    transform: `perspective(450px) rotateX(${rotationValue.x}deg) rotateY(${rotationValue.y}deg)`,
  };

  return (
    <div className='rotator__wrapper' onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <div style={rotateStyle}>{children}</div>
    </div>
  );
}
