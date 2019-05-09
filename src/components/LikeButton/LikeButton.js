import React from 'react';
import styled from 'styled-components';

import UnstyledButton from '../UnstyledButton';
import Heart from './Heart';
import LikeSprite from '../LikeSprite';

const PARTICLE_COLORS = ['#e53935', '#1e88e5', '#43a047', '#fdd835', '#fb8c00'];

const LikeButton = ({ isLiked, numOfConfettiPieces = 1, size = 40 }) => {
  const heartSize = size * 0.6;

  return (
    <Wrapper style={{ width: size, height: size }}>
      <Heart width={heartSize} isToggled={isLiked} />
      {isLiked && (
        <SpriteWrapper>
          <LikeSprite />
        </SpriteWrapper>
      )}
    </Wrapper>
  );
};

const Wrapper = styled(UnstyledButton)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SpriteWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-10px, -10px);
`;

export default LikeButton;
