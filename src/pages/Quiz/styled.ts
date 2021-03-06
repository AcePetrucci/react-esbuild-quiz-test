import styled from 'styled-components';

// Shared Styled Components
import {
  H1,
  H2,
  H4,
  pxToRem,
  Button,
} from 'styled';

// Themes
import { themes } from 'themes';

/**
 * Styled Components
 */

export const QuizWrapper = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: ${pxToRem(32, 16)};
  width: 100%;
`;

export const QuizCategory = styled(H1)`
  margin-bottom: ${pxToRem(80)};

  @media screen and (max-width: 880px) {
    margin-bottom: ${pxToRem(40)};
    text-align: center;
  }
`;

export const QuizQuestionWrapper = styled.div`
  align-items: center;
  background-color: ${themes.dark.colors.card};
  border-radius: 4px;
  display: flex;
  height: ${pxToRem(540)};
  justify-content: center;
  margin-bottom: ${pxToRem(80)};
  max-width: ${pxToRem(1280)};
  padding: ${pxToRem(16, 32)};
  text-align: center;
  width: 100%;

  @media screen and (max-width: 1660px) {
    height: ${pxToRem(460)};
    max-width: ${pxToRem(1080)};
    padding: ${pxToRem(16, 48)};
  }

  @media screen and (max-width: 1360px) {
    height: ${pxToRem(380)};
    max-width: ${pxToRem(860)};
  }
`;

export const QuizQuestion = styled(H2)`
  line-height: ${pxToRem(80)};

  @media screen and (max-width: 1660px) {
    line-height: ${pxToRem(60)};
  }

  @media screen and (max-width: 1360px) {
    line-height: ${pxToRem(44)};
  }

  @media screen and (max-width: 1360px) {
    line-height: ${pxToRem(28)};
  }
`;

export const QuizActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  max-width: ${pxToRem(1280)};
  margin-bottom: ${pxToRem(80)};

  @media screen and (max-width: 1660px) {
    justify-content: space-evenly;
    max-width: ${pxToRem(1080)};
  }

  @media screen and (max-width: 1360px) {
    max-width: ${pxToRem(860)};
  }
`;

export const QuizButton = styled(Button)<{ answer: string }>`
  background-color: ${(props) => themes.dark.colors[props.answer].contrast};
  color: ${(props) => themes.dark.colors[props.answer].color};

  &:focus, &:hover {
    background-color: ${(props) => themes.dark.colors[props.answer].focus};
  }
`;

export const QuizLength = styled(H4)`
  word-spacing: ${pxToRem(4)};
`;

export const QuizLoading = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
