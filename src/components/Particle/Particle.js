import React from 'react';
import { useSpring, animated } from 'react-spring';

import { sample } from '../../utils';

const Particle = ({ angle, startDistance, endDistance, children }) => {
  // const angle = React.useRef(random(0, Math.PI * 2 * 100) / 100);
  const angleInRads = (angle * Math.PI) / 180;
  const delay = React.useRef(sample([0, 200]));

  const startX = Math.cos(angleInRads) * startDistance;
  const startY = Math.sin(angleInRads) * startDistance;

  const endX = Math.cos(angleInRads) * endDistance;
  const endY = Math.sin(angleInRads) * endDistance;

  const positionSpring = useSpring({
    transform: `translate(${endX}px, ${endY}px) scale(0)`,
    from: {
      transform: `translate(${startX}px, ${startY}px) scale(1)`,
    },
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
        ...positionSpring,
      }}
    >
      {children}
    </animated.div>
  );
};

export default Particle;
