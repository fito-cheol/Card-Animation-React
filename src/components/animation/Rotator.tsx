import React, { useEffect, useState } from 'react';
import './Rotator.scss';
import useMouse from '../../hooks/useMouse';
import Spring from 'tiny-spring';

const SpringConfig = { stiffness: 200, damping: 10 };

export default function Rotator({ children, rotationProps, positionProps }: any) {
  const { rotation, position, handleMouseMove, handleMouseLeave } = useMouse();
  let rotationValue = rotationProps || rotation;
  let positionValue = positionProps || position;

  const [rotateX, setRotateX] = useState<number>(0);
  const [rotateY, setRotateY] = useState<number>(0);

  const [springX, setSpringX] = useState<any>(Spring(0, SpringConfig));
  const [springY, setSpringY] = useState<any>(Spring(0, SpringConfig));

  useEffect(() => {
    springX.onUpdate((val: number) => {
      setRotateX(val);
    });
    springY.onUpdate((val: number) => {
      setRotateY(val);
    });
    return () => {
      springX.destroy();
      springY.destroy();
    };
  }, []);

  springX.transitionTo(rotationValue.x);
  springY.transitionTo(rotationValue.y);

  const rotateStyle = {
    transform: `perspective(450px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
  };

  return (
    <div className='rotator__wrapper' onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <div style={rotateStyle}>{children}</div>
    </div>
  );
}
