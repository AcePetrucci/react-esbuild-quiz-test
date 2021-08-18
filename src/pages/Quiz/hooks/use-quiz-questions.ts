import {
  MouseEvent,
  useCallback,
  useState,
} from 'react';

import clone from 'ramda/src/clone';

// Context
import { useQuizContextUpdater } from 'providers';

// Interfaces
import { IQuizItem } from '../models';

/**
 * Export Hook
 */

export const useQuizQuestions = (quizData: IQuizItem[]) => {
  // State
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);

  // Context
  const { handleQuizContext } = useQuizContextUpdater();

  // Callback
  const nextQuestion = useCallback(() => {
    setCurrentQuestion((questionID) => questionID + 1);
  }, []);

  const answerQuestion = useCallback((
    answerEvent: MouseEvent<HTMLButtonElement>,
  ) => {
    handleQuizContext((answers) => {
      const clonedAnswers = clone(answers);
      const givenAnswer = (answerEvent.target as HTMLButtonElement).value;

      clonedAnswers.answers = clonedAnswers.answers.concat({
        correct: quizData[currentQuestion].correct_answer === givenAnswer,
        question: quizData[currentQuestion].question,
      });

      return clonedAnswers;
    });

    nextQuestion();
  }, [quizData, currentQuestion]);

  // Return Hook
  return { currentQuestion, answerQuestion };
};
