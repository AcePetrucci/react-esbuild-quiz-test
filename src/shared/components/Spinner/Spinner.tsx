import React from 'react';

// Styled Components
import {
  Circular,
  Path,
  Loader,
} from './styled';

/**
 * Component
 */

export const SpinnerComponent = () => (
  <Loader>
    <Circular viewBox="25 25 50 50">
      <Path cx="50" cy="50" r="20" />
    </Circular>
  </Loader>
);
