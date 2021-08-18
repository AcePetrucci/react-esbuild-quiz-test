import styled from 'styled-components';

// Shared Styled Components
import {
  fontSize,
  H1,
  H2,
  pxToRem,
  LinkButton,
} from 'styled';

// Themes
import { themes } from 'themes';

/**
 * Styled Components
 */

export const ScoreWrapper = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: ${pxToRem(32, 16)};
  width: 100%;
`;

export const ScoreTitle = styled(H1)`
  margin-bottom: ${pxToRem(24)};
`;

export const ScoreResults = styled(H2)`
  word-spacing: ${pxToRem(4)};
  margin-bottom: ${pxToRem(36)};

  @media screen and (max-width: 1440px) {
    margin-bottom: ${pxToRem(18)};
  }
`;

export const ScoreAnswers = styled.section`
  width: ${pxToRem(1280)};
  padding: ${pxToRem(0, 32)};
  overflow: auto;
  margin-bottom: ${pxToRem(32)};

  &::-webkit-scrollbar {
    width: 0.25em;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: ${themes.dark.colors.card};
  }

  @media screen and (max-width: 1660px) {
    width: ${pxToRem(1080)};
  }

  @media screen and (max-width: 1360px) {
    width: ${pxToRem(860)};
  }

  @media screen and (max-width: 1080px) {
    width: ${pxToRem(640)};
  }

  @media screen and (max-width: 880px) {
    width: ${pxToRem(440)};
  }
`;

export const ScoreAnswersItem = styled.p<{ correct: boolean }>`
  ${fontSize(32)};
  color: ${(props) => (props.correct
    ? themes.dark.colors.true.color
    : themes.dark.colors.false.color
  )};
  display: flex;
  margin-bottom: ${pxToRem(24)};

  &::before {
    content: "${(props) => (props.correct ? '+ ' : '- ')}";
    margin-right: ${pxToRem(12)};
    text-align: center;
    width: ${pxToRem(20)};
  }

  @media screen and (max-width: 1660px) {
    ${fontSize(28)};
    margin-bottom: ${pxToRem(22)};
  }

  @media screen and (max-width: 1080px) {
    ${fontSize(22)};
    margin-bottom: ${pxToRem(16)};
  }
`;

export const ScoreAction = styled(LinkButton)``;
