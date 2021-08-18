import { useContext } from 'react';

// Context
import { QuizStateContext } from './quiz-context';

/**
 * Export Context State Hook
 */

export const useQuizContextState = () => {
  // Context
  const quizContext = useContext(QuizStateContext);

  // Hook Return
  return { quizContext };
};
