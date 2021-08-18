import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Themes
import { themes } from 'themes';

// Helpers
import { fontSize, pxToRem } from './helpers';

/**
 * Styled Components
 */

export const LinkButton = styled(Link)`
  ${fontSize(48)};
  color: ${themes.dark.colors.text};
  cursor: pointer;
  font-weight: 400;
  letter-spacing: ${pxToRem(4)};
  outline: none;
  padding: ${pxToRem(16, 32)};
  text-decoration: none;
  text-transform: uppercase;

  @media screen and (max-width: 1660px) {
    ${fontSize(36)};
  }

  @media screen and (max-width: 1360px) {
    ${fontSize(28)};
    letter-spacing: ${pxToRem(2)};
  }

  @media screen and (max-width: 880px) {
    ${fontSize(22)};
  }
`;
