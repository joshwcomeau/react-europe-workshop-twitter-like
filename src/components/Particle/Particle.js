/* eslint-disable no-unused-vars */
import React from 'react';

import { random, sample } from '../../utils';

// This helper function can convert your angle to radians, which is the format
// that Math.sin and Math.cos expect.
const convertDegreesToRadians = angle => (angle * Math.PI) / 180;

const Particle = ({ angle, distance, children }) => {
  const angleInRadians = convertDegreesToRadians(angle);

  // TODO: Calculate X and Y from `angleInRadians` and `distance`.
  // Translate the child to the end position.

  // In Step B, use React Spring to animate the transition from the origin
  // position (where it is by default) to the end position.

  return children;
};

export default Particle;
