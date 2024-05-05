import { useState } from 'react';

export default function useMouse() {
  const [rotation, setRotation] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const { clientX, clientY, currentTarget } = event;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const offsetX = clientX - centerX;
    const offsetY = clientY - centerY;

    const rotateX = -offsetY / 7; // Adjust the division value for sensitivity
    const rotateY = offsetX / 3;

    setPosition({ x: offsetX, y: offsetY });
    setRotation({ x: rotateX, y: rotateY });
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    setRotation({ x: 0, y: 0 });
  };

  return { rotation, position, handleMouseMove, handleMouseLeave };
}
