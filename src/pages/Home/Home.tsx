import React from 'react';

// Styled Components
import {
  HomeWrapper,
  HomeTitle,
  HomeIntroduction,
  HomeTruthy,
  HomeFalsy,
  HomeAction,
  HomeActionButton,
} from './styled';

/**
 * Component
 */

export const HomeComponent = (_props) => {
  const a = 1;

  return (
    <HomeWrapper>
      <HomeTitle> Welcome to the Trivia Challenge! </HomeTitle>

      <HomeIntroduction>
        You will be presented with 10
        <HomeTruthy> True </HomeTruthy>
        or
        <HomeFalsy> False </HomeFalsy>
        questions.
      </HomeIntroduction>

      <HomeIntroduction>
        Can you score 100%?
      </HomeIntroduction>

      <HomeAction>
        <HomeActionButton> Begin </HomeActionButton>
      </HomeAction>
    </HomeWrapper>
  );
};
