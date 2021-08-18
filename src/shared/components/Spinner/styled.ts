import styled, { keyframes } from 'styled-components';

// Helpers
import { pxToRem } from 'styled';

// Themes
import { themes } from 'themes';

/**
 * Keyframes
 */

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const dash = keyframes`
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124px;
  }
`;

/**
 * Styled Components
 */

export const Loader = styled.div`
  position: relative;
  margin: 0 auto;
  width: ${pxToRem(400)};

  &::before {
    content: '';
    display: block;
    padding-top: 100%;
  }

  @media screen and (max-width: 1660px) {
    width: ${pxToRem(250)};
  }

  @media screen and (max-width: 880px) {
    width: ${pxToRem(150)};
  }
`;

export const Circular = styled.svg`
  animation: ${rotate} 2s linear infinite;
  bottom: 0;
  height: 100%;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  transform-origin: center center;
  width: 100%;
`;

export const Path = styled.circle`
  animation: ${dash} 1.5s ease-in-out infinite;
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  stroke-linecap: round;
  stroke-width: 2px;
  fill: none;
  stroke: ${themes.dark.colors.card};
`;
