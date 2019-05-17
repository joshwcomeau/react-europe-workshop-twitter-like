import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const PoppingCircle = ({ size, color }) => {
  const outerRingProps = useSpring({
    r: 20,
    from: { r: 0 },
    config: {
      tension: 800,
      friction: 60,
      mass: 0.5,
    },
  });

  const innerRingProps = useSpring({
    r: 20.5,
    from: { r: 0.5 },
    delay: 110,
    config: {
      tension: 1300,
      friction: 90,
      mass: 1,
    },
  });

  return (
    <Svg width={size} height={size} viewBox="0 0 40 40">
      <defs>
        <mask id="popping-circle">
          <rect x={0} y={0} width="100%" height="100%" fill="#FFF" />
          <animated.circle {...innerRingProps} cx={20} cy={20} fill="#000" />
        </mask>
      </defs>

      <animated.circle
        {...outerRingProps}
        cx={20}
        cy={20}
        fill="#E790F7"
        mask={`url(#popping-circle)`}
        style={{ opacity: 0.9 }}
      />
    </Svg>
  );
};

const Svg = styled.svg`
  display: block;
  backface-visibility: hidden;
  fill: none;
`;

export default PoppingCircle;
