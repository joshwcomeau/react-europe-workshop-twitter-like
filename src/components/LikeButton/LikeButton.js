import React from 'react';
import styled from 'styled-components';

import PoppingCircle from '../PoppingCircle';
import UnstyledButton from '../UnstyledButton';

import ConfettiPiece from './ConfettiPiece';
import ScaleIn from '../ScaleIn';
import Heart from './Heart';

const LikeButton = ({ isLiked, numOfConfettiPieces = 1, size = 40 }) => {
  const heartSize = size * 0.6;

  const heart = <Heart width={heartSize} isToggled={isLiked} />;

  return (
    <Wrapper style={{ width: size, height: size }}>
      <Foreground>
        {/* Part I: Update ScaleIn to do the springy scale effect */}
        {isLiked ? <ScaleIn>{heart}</ScaleIn> : heart}
      </Foreground>

      <Background>
        {/* Part II: Update the PoppingCircle */}
        {isLiked && <PoppingCircle size={size} />}

        {/* Part III: update ConfettiPiece, add several more: */}
        <ConfettiPiece parentSize={size} angle={33} distance={10} />
      </Background>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Background = styled.div`
  position: absolute;
  z-index: 0;
`;

const Foreground = styled.div`
  position: relative;
  z-index: 1;
`;

export default LikeButton;
