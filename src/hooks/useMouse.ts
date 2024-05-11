import { adjust, clamp } from '../utils/Math';
import { useState } from 'react';

const randomSeed = {
  x: Math.random(),
  y: Math.random(),
};

const cosmosPosition = {
  x: Math.floor(randomSeed.x * 734),
  y: Math.floor(randomSeed.y * 1280),
};

const staticStyles = {
  '--seedx': randomSeed.x,
  '--seedy': randomSeed.y,
  '--cosmosbg': `${cosmosPosition.x}px ${cosmosPosition.y}px`,
};

export default function useMouse() {
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [positionFromCenter, setPositionFromCenter] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [rotation, setRotation] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const [positionPercent, setPositionPercent] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [background, setBackground] = useState<{ x: number; y: number }>({ x: 50, y: 50 });

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const { clientX, clientY, currentTarget } = event;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const offsetX = clientX - centerX;
    const offsetY = clientY - centerY;

    const leftX = clientX - left;
    const topX = clientY - top;

    const rotateX = offsetY / 8; // Adjust the division value for sensitivity
    const rotateY = -offsetX / 5;

    const leftPercent = ((clientX - left) / width) * 100;
    const topPercent = ((clientY - top) / height) * 100;
    setPosition({ x: leftX, y: topX });
    setPositionFromCenter({ x: offsetX, y: offsetY });
    setRotation({ x: rotateX, y: rotateY });
    setPositionPercent({ x: leftPercent, y: topPercent });
    setBackground({ x: adjust(leftPercent, 0, 100, 37, 63), y: adjust(topPercent, 0, 100, 33, 67) });
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    setPositionFromCenter({ x: 0, y: 0 });
    setRotation({ x: 0, y: 0 });
    setPositionPercent({ x: 50, y: 50 });
    setBackground({ x: 50, y: 50 });
  };
  const styleVar = {
    ...staticStyles,
    '--pointer-x': `${positionPercent.x}%`,
    '--pointer-y': `${positionPercent.y}%`,
    '--pointer-from-center': clamp(
      Math.sqrt(
        (positionPercent.y - 50) * (positionPercent.y - 50) + (positionPercent.x - 50) * (positionPercent.x - 50),
      ) / 50,
      0,
      1,
    ),
    '--pointer-from-top': positionPercent.y / 100,
    '--pointer-from-left': positionPercent.x / 100,
    '--card-opacity': 1,
    '--rotate-x': `${rotation.x}deg`,
    '--rotate-y': `${rotation.y}deg`,
    '--background-x': `${background.x}%`,
    '--background-y': `${background.y}%`,
  };

  //   --card-scale: ${$springScale};
  //   --translate-x: ${$springTranslate.x}px;
  //   --translate-y: ${$springTranslate.y}px;
  // `

  return { rotation, position, positionPercent, handleMouseMove, handleMouseLeave, styleVar };
}
