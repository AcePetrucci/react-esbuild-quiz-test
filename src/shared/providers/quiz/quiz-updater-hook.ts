import { useContext, useCallback } from 'react';

// Interfaces
import { IAnswers } from 'models';

// Context
import { QuizUpdaterContext } from './quiz-context';

/**
 * Export Context Updater Hook
 */

export const useQuizContextUpdater = () => {
  // Context
  const setQuizContext = useContext(QuizUpdaterContext);

  // State Callback
  const handleQuizContext = useCallback((
    contextCB: (quizContext: IAnswers) => IAnswers,
  ) => setQuizContext(contextCB), [setQuizContext]);

  // Hook Return
  return { handleQuizContext };
};
