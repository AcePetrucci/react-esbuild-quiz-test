import React from 'react';
import ReactDOM from 'react-dom';

// CSS Defaults
import '../assets/scss/normalize.css';
import '../assets/scss/app.scss';

// Providers
import { QuizProvider } from 'providers';

// Routes
import { Routes } from './config';

// Styled Components
import { MainWrapper } from './styled';

/**
 * Render the React Bootstrap
 */

ReactDOM.render(
  <QuizProvider>
    <MainWrapper>
      <Routes />
    </MainWrapper>
  </QuizProvider>,
  document.getElementById('root'),
);
