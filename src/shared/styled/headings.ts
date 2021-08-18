import styled from 'styled-components';

// Themes
import { themes } from 'themes';

// Helpers
import { fontSize } from './helpers';

/**
 * Styled Components
 */

export const H1 = styled.h1`
  color: ${themes.dark.colors.text};
  font-weight: 500;
  ${fontSize(72)};

  @media screen and (max-width: 1660px) {
    ${fontSize(54)};
  }

  @media screen and (max-width: 1360px) {
    ${fontSize(38)};
  }

  @media screen and (max-width: 880px) {
    ${fontSize(28)};
  }
`;

export const H2 = styled.h2`
  color: ${themes.dark.colors.text};
  font-weight: 400;
  ${fontSize(48)};

  @media screen and (max-width: 1660px) {
    ${fontSize(36)};
  }

  @media screen and (max-width: 1360px) {
    ${fontSize(28)};
  }

  @media screen and (max-width: 880px) {
    ${fontSize(22)};
  }
`;

export const H4 = styled.h4`
  color: ${themes.dark.colors.text};
  font-weight: 400;
  ${fontSize(32)};

  @media screen and (max-width: 1660px) {
    ${fontSize(28)};
  }

  @media screen and (max-width: 1360px) {
    ${fontSize(20)};
  }

  @media screen and (max-width: 880px) {
    ${fontSize(20)};
  }
`;
