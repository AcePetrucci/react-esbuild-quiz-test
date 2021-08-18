import React, { useState, ReactNode } from 'react';

// Context Helpers
import {
  quizContextData,
  QuizStateContext,
  QuizUpdaterContext,
} from './quiz-context';

/**
 * Provider
 */

export const QuizProvider = ({ children }: { children: ReactNode }) => {
  // State
  const [contextData, setContextData] = useState(quizContextData);

  // Render
  return (
    <QuizStateContext.Provider value={contextData}>
      <QuizUpdaterContext.Provider value={setContextData}>
        { children }
      </QuizUpdaterContext.Provider>
    </QuizStateContext.Provider>
  );
};
