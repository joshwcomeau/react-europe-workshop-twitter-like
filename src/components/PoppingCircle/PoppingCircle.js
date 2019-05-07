import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSpring, useTrail, animated } from 'react-spring';

import useUniqueId from '../../hooks/unique-id.hook';

import Svg from '../Svg';

const propTypes = {
  size: PropTypes.number,
};

const defaultProps = {
  size: 40,
  color: '#DF5FFF99',
};

const PoppingCircle = ({ size, color }) => {
  const id = useUniqueId('popping-circle');

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
        <mask id={id}>
          <rect x={0} y={0} width="100%" height="100%" fill="#FFF" />
          <animated.circle {...innerRingProps} cx={20} cy={20} fill="#000" />
        </mask>
      </defs>

      <animated.circle
        {...outerRingProps}
        cx={20}
        cy={20}
        fill={color}
        mask={`url(#${id})`}
      />
    </Svg>
  );
};

PoppingCircle.propTypes = propTypes;
PoppingCircle.defaultProps = defaultProps;

export default PoppingCircle;
