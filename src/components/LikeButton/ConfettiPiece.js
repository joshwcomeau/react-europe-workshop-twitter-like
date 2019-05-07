import React from 'react';
import styled from 'styled-components';

import { random, sample } from '../../utils';

import Particle from '../Particle';

const getRandomColor = () =>
  sample(['#e53935', '#1e88e5', '#43a047', '#fdd835', '#fb8c00']);

const getRandomSize = parentSize =>
  random(parentSize * 0.15, parentSize * 0.225);

const ConfettiPiece = ({ parentSize, angle, distance }) => {
  const size = parentSize * 0.1;

  return (
    <CenteredWithinParent>
      <Particle angle={angle} distance={distance}>
        <Circle
          style={{
            width: size,
            height: size,
            background: '#e53935',
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
