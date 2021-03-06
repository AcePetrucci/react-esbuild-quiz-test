import styled from 'styled-components';

// Shared Styled Components
import {
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

export const HomeWrapper = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: ${pxToRem(32, 16)};
  width: 100%;
  flex-wrap: wrap;
`;

export const HomeTitle = styled(H1)`
  flex: 1;
`;

export const HomeIntroduction = styled(H2)`
  margin-bottom: ${pxToRem(36)};
  flex: 0.5;

  @media screen and (max-width: 880px) {
    text-align: center;
  }
`;

export const HomeTruthy = styled.strong`
  color: ${themes.dark.colors.true.color};
  font-weight: 500;
`;

export const HomeFalsy = styled.strong`
  color: ${themes.dark.colors.false.color};
  font-weight: 500;
`;

export const HomeAction = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: center;
`;

export const HomeActionButton = styled(LinkButton)``;
