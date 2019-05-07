import React from 'react';
import styled from 'styled-components';
import 'focus-visible';

import { COLORS } from '../../constants';

import Tweet from '../Tweet';

const App = () => {
  const [isRetweeted, setIsRetweeted] = React.useState(false);
  const [isLiked, setIsLiked] = React.useState(false);

  const [numOfRetweets, setNumOfRetweets] = React.useState(
    Math.round(Math.random() * 100)
  );
  const [numOfLikes, setNumOfLikes] = React.useState(
    Math.round(Math.random() * 1000)
  );

  return (
    <Wrapper>
      <Tweet
        tweetContents="Hi React Europe! 👋🏻"
        displayName="Josh ✨"
        username="joshwcomeau"
        avatarSrc="http://placekitten.com/128/128"
        timestamp={new Date()}
        numOfRetweets={numOfRetweets}
        numOfLikes={numOfLikes}
        isRetweetedByCurrentUser={isRetweeted}
        isLikedByCurrentUser={isLiked}
        handleToggleLike={() => {
          setNumOfLikes(isLiked ? numOfLikes - 1 : numOfLikes + 1);
          setIsLiked(!isLiked);
        }}
        handleToggleRetweet={() => {
          setNumOfRetweets(isRetweeted ? numOfRetweets - 1 : numOfRetweets + 1);
          setIsRetweeted(!isRetweeted);
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: ${COLORS.gray[100]};
`;
export default App;
