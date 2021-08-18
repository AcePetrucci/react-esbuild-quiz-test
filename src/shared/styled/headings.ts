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
`;

export const H2 = styled.h2`
  color: ${themes.dark.colors.text};
  font-weight: 400;
  ${fontSize(48)};
`;

export const H4 = styled.h4`
  color: ${themes.dark.colors.text};
  font-weight: 400;
  ${fontSize(32)};
`;
