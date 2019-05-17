import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSpring, useTrail, animated } from 'react-spring';

const PoppingCircle = ({ size, color }) => {
  const outerRingProps = useSpring({
    r: 20,
    from: { r: 0 },
    config: {
      tension: 200,
      friction: 8,
    },
  });

  const innerRingProps = useSpring({
    r: 20.5,
    from: { r: 0.5 },
    delay: 400,
    config: {
      tension: 120,
      friction: 12,
    },
  });

  const innerRingStyle = useSpring({
    transform: 'translateY(0)',
    from: { transform: 'translateY(120%)' },
    delay: 200,
    config: {
      tension: 120,
      friction: 12,
    },
  });

  return (
    <Svg width={size} height={size} viewBox="0 0 40 40">
      <defs>
        <mask id="popping-circle">
          <rect x="-50%" y="-50%" width="200%" height="200%" fill="#FFF" />
          <animated.circle
            cx={20}
            cy={20}
            {...innerRingProps}
            fill="#000"
            style={innerRingStyle}
          />
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
  overflow: visible;
`;

export default PoppingCircle;
