import styled from 'styled-components';

// Shared Styled Components
import { fontSize, pxToRem } from './helpers';

/**
 * Styled Components
 */

export const Button = styled.button<{ answer: string }>`
  ${fontSize(32)};
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  outline: none;
  padding: ${pxToRem(36, 48)};
  width: ${pxToRem(240)};

  @media screen and (max-width: 1660px) {
    ${fontSize(24)};
    padding: ${pxToRem(24, 32)};
    width: ${pxToRem(160)};
  }

  @media screen and (max-width: 1360px) {
    ${fontSize(22)};
    padding: ${pxToRem(16, 24)};
    width: ${pxToRem(140)};
  }
`;
