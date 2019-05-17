/* eslint-disable no-unused-vars */
import React from 'react';
import styled, { keyframes } from 'styled-components';

import { random, range, sample } from '../../utils';

import Particle from '../Particle';

const ConfettiPiece = ({ parentSize, angle, distance, color }) => {
  const size = parentSize * 0.25;

  // Early return to keep the Confetti from being distracting when
  // working on the springing heart and popping circle.
  // REMOVE ME once you get to the particles section!!
  return null;

  return (
    <CenteredWithinParent>
      <Particle
        angle={angle}
        startDistance={distance * 0.55}
        endDistance={distance}
      >
        {/*
        The main version of this component just uses the color passed by the
        parent component:
       */}
        <Circle
          style={{
            width: size,
            height: size,
            background: color,
          }}
        />

        {/*
          For fun, I added another stretch goal that changes the color of
          each particle. In this case, the color isn't used, and instead it
          picks a random keyframe to use.

          Uncomment to use:
        */}

        {/* <Circle
          keyframeId={sample(['warm', 'mid', 'cool'])}
          style={{
            width: size,
            height: size,
          }}
        /> */}
      </Particle>
    </CenteredWithinParent>
  );
};

const warmKeyframe = keyframes`
  0% { background: pink; }
  50% { background: yellow; }
  100% { background: pink; }
`;
const midKeyframe = keyframes`
  0% { background: blue; }
  50% { background: hotpink; }
  100% { background: blue; }
`;
const coolKeyframe = keyframes`
  0% { background: turquoise; }
  50% { background: violet; }
  100% { background: turquoise; }
`;

const getKeyframeForId = id => {
  switch (id) {
    case 'warm':
      return warmKeyframe;
    case 'mid':
      return midKeyframe;
    case 'cool':
      return coolKeyframe;
    default:
      throw new Error('Unrecognized ID: ' + id);
  }
};

const CenteredWithinParent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Circle = styled.div`
  border-radius: 50%;
  animation: ${props => getKeyframeForId(props.keyframeId)} 1000ms
    ${props => Math.random() * 400}ms infinite;
`;

export default ConfettiPiece;
