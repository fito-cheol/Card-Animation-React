import { clamp } from '@/utils/Math';
import { useState } from 'react';

export default function useMouse() {
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [rotation, setRotation] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const [positionPercent, setPositionPercent] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const { clientX, clientY, currentTarget } = event;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const offsetX = clientX - centerX;
    const offsetY = clientY - centerY;

    const rotateX = -offsetY / 7; // Adjust the division value for sensitivity
    const rotateY = offsetX / 3;

    const leftPercent = ((clientX - left) / width) * 100;
    const topPercent = ((clientY - top) / height) * 100;
    setPosition({ x: offsetX, y: offsetY });
    setRotation({ x: rotateX, y: rotateY });
    setPositionPercent({ x: leftPercent, y: topPercent });
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    setRotation({ x: 0, y: 0 });
    setPositionPercent({ x: 25, y: 10 });
  };
  const dynamicStyles = {
    '--pointer-x': `${positionPercent.x}%`,
    '--pointer-y': `${positionPercent.y}%`,
    '--pointer-from-center': clamp(
      Math.sqrt((position.y - 50) * (position.y - 50) + (position.x - 50) * (position.x - 50)) / 50,
      0,
      1,
    ),
    '--pointer-from-top': position.y / 100,
    '--pointer-from-left': position.x / 100,
    '--card-opacity': 1,
    '--rotate-x': `${rotation.x}deg`,
    '--rotate-y': `${rotation.y}deg`,
  };
  //   --background-x: ${$springBackground.x}%;
  //   --background-y: ${$springBackground.y}%;
  //   --card-scale: ${$springScale};
  //   --translate-x: ${$springTranslate.x}px;
  //   --translate-y: ${$springTranslate.y}px;
  // `

  return { rotation, position, positionPercent, handleMouseMove, handleMouseLeave, dynamicStyles };
}
