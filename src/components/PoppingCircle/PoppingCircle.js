import React from 'react';
import styled from 'styled-components';

const PoppingCircle = ({ size }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 40 40">
      <defs>
        <mask id="popping-circle">{/* Add mask elements here*/}</mask>
      </defs>

      {/* Add circle here */}
    </Svg>
  );
};

const Svg = styled.svg`
  display: block;
  backface-visibility: hidden;
  fill: none;
`;

export default PoppingCircle;
