import {
  createContext,
  Dispatch,
  SetStateAction,
} from 'react';

// Interfaces
import { IAnswers } from 'models';

/**
 * Initial Data
 */

const quizContextData: IAnswers = {
  answers: [],
};

const quizContextSetData: Dispatch<SetStateAction<IAnswers>> = (
  value: SetStateAction<IAnswers>,
) => value;

/**
 * Context
 */

const QuizStateContext = createContext(quizContextData);
const QuizUpdaterContext = createContext(quizContextSetData);

/**
 * Exports
 */

export {
  quizContextData,
  QuizStateContext,
  QuizUpdaterContext,
};
