import React from 'react';

// Styled Components
import {
  QuizWrapper,
  QuizCategory,
  QuizQuestion,
  QuizQuestionWrapper,
  QuizActions,
  QuizButton,
} from './styled';

// Hooks
import { useQuizSetup, useQuizQuestions } from './hooks';

/**
 * Component
 */

export const QuizComponent = (_props) => {
  const { quizData } = useQuizSetup();
  const { currentQuestion, nextQuestion } = useQuizQuestions();

  console.log(quizData);

  // Render
  return quizData
    ? (
      <QuizWrapper>
        <QuizCategory>
          { quizData[currentQuestion].category }
        </QuizCategory>

        <QuizQuestionWrapper>
          <QuizQuestion>
            { quizData[currentQuestion].question }
          </QuizQuestion>
        </QuizQuestionWrapper>

        <QuizActions>
          { quizData[currentQuestion].possible_answers.map((answer) => (
            <QuizButton answer={answer.toLowerCase()}>
              { answer }
            </QuizButton>
          )) }
        </QuizActions>
      </QuizWrapper>
    )
    : <></>;
};
