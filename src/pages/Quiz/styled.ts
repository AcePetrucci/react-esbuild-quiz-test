import styled from 'styled-components';

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
`;

export const QuizQuestion = styled(H2)`
  line-height: ${pxToRem(80)};
`;

export const QuizActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  max-width: ${pxToRem(1280)};
  margin-bottom: ${pxToRem(80)};
`;

export const QuizButton = styled.button<{ answer: string }>`
  ${fontSize(32)};
  background-color: ${(props) => themes.dark.colors[props.answer].contrast};
  border-radius: 4px;
  border: none;
  color: ${(props) => themes.dark.colors[props.answer].color};
  cursor: pointer;
  font-weight: 500;
  outline: none;
  padding: ${pxToRem(36, 48)};
  width: ${pxToRem(240)};

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
