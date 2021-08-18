import {
  useCallback,
  useEffect,
  useState,
} from 'react';
import memoize from 'memoizee';

// FP Helpers
import clone from 'ramda/src/clone';
import pipe from 'ramda/src/pipe';

// Interfaces
import { IQuiz, IQuizItem } from '../models';

/**
 * Export Hook
 */

export const useQuizSetup = () => {
  // State
  const [quizData, setQuizData] = useState<IQuiz['results']>();

  // Fetch Callback
  const getQuiz = useCallback(async (): Promise<IQuiz> => {
    const quiz = await fetch(process.env.REACT_APP_QUIZ_API);

    return quiz.json();
  }, []);

  // Memoized Helpers
  const getPossibleAnswers = memoize((
    quizItem: IQuizItem,
  ) => quizItem.incorrect_answers.concat(quizItem.correct_answer));

  const sortPossibleAnswers = memoize((
    answers: string[],
  ) => answers.sort((a, b) => (a > b ? 1 : -1)));

  // Lifecycle
  useEffect(() => {
    getQuiz().then((quiz) => {
      const formattedQuiz = quiz.results.map((quizItem) => {
        const clonedQuizItem = clone(quizItem);

        clonedQuizItem.possible_answers = pipe(
          getPossibleAnswers,
          sortPossibleAnswers,
        )(clonedQuizItem);

        clonedQuizItem.question = new DOMParser()
          .parseFromString(clonedQuizItem.question, 'text/html')
          .documentElement.textContent;

        return clonedQuizItem;
      });

      setQuizData(() => formattedQuiz);
    });
  }, []);

  return { quizData };
};
