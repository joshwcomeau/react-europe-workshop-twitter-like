/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { random, range, sample } from '../../utils';

import Particle from '../Particle';

const ConfettiPiece = ({ parentSize, angle, distance, color }) => {
  const size = parentSize * 0.1;

  // Early return to keep the Confetti from being distracting when
  // working on the springing heart and popping circle.
  // REMOVE ME once you get to the particles section!!
  return null;

  return (
    <CenteredWithinParent>
      <Particle angle={angle} distance={distance}>
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
