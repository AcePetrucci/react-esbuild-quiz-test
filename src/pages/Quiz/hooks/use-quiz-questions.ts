import { useCallback, useState } from 'react';

/**
 * Export Hook
 */

export const useQuizQuestions = () => {
  // State
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);

  // Callback
  const nextQuestion = useCallback(() => {
    setCurrentQuestion((questionID) => questionID + 1);
  }, []);

  // Return Hook
  return { currentQuestion, nextQuestion };
};
