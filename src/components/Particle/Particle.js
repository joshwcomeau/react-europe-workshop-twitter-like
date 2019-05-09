import React from 'react';
import { useSpring, interpolate, animated } from 'react-spring';

import { random, sample } from '../../utils';

const Particle = ({ angle, startDistance, endDistance, children }) => {
  // const angle = React.useRef(random(0, Math.PI * 2 * 100) / 100);
  const angleInRads = (angle * Math.PI) / 180;
  const delay = React.useRef(random(0, 450));

  const startX = Math.cos(angleInRads) * startDistance;
  const startY = Math.sin(angleInRads) * startDistance;

  const endX = Math.cos(angleInRads) * endDistance;
  const endY = Math.sin(angleInRads) * endDistance;

  const positionSpring = useSpring({
    x: endX,
    y: endY,
    scale: 0,
    from: { x: startX, y: startY, scale: 1 },
    delay: delay.current,
    config: {
      tension: 120,
      friction: 30,
    },
  });

  const opacitySpring = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: delay.current,
    config: {
      tension: 140,
      friction: 20,
    },
  });

  return (
    <animated.div
      style={{
        ...opacitySpring,
        transform: interpolate(
          [positionSpring.x, positionSpring.y, positionSpring.scale],
          (x, y, scale) => `translate(${x}px, ${y}px) scale(${scale}, ${scale})`
        ),
      }}
    >
      {children}
    </animated.div>
  );
};

export default Particle;
