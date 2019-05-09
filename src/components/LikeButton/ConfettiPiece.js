/* eslint-disable no-unused-vars */
import React from 'react';
import styled, { keyframes } from 'styled-components';

import { random, range, sample } from '../../utils';

import Particle from '../Particle';

const ConfettiPiece = ({ parentSize, angle, distance, color }) => {
  const size = parentSize * 0.25;

  return (
    <CenteredWithinParent>
      <Particle
        angle={angle}
        startDistance={distance * 0.55}
        endDistance={distance}
      >
        <Circle
          style={{
            width: size,
            height: size,
            background: color,
          }}
        />
      </Particle>
    </CenteredWithinParent>
  );
};

const CenteredWithinParent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Circle = styled.div`
  border-radius: 50%;
`;

export default ConfettiPiece;
