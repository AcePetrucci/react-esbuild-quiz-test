import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Shared Styled Components
import {
  fontSize,
  H1,
  H2,
  H4,
  pxToRem,
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
`;

export const ScoreAnswers = styled.section`
  width: ${pxToRem(1280)};
  padding: ${pxToRem(0, 32)};
  overflow: auto;
  margin-bottom: ${pxToRem(32)};
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
`;

export const ScoreAction = styled(Link)`
  ${fontSize(48)};
  color: ${themes.dark.colors.text};
  cursor: pointer;
  font-weight: 400;
  letter-spacing: ${pxToRem(4)};
  outline: none;
  padding: ${pxToRem(16, 32)};
  text-decoration: none;
  text-transform: uppercase;
`;
