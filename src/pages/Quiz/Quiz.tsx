import React from 'react';
import { Redirect } from 'react-router-dom';
import uuid from 'react-uuid';

// Styled Components
import {
  QuizWrapper,
  QuizCategory,
  QuizQuestion,
  QuizQuestionWrapper,
  QuizActions,
  QuizButton,
  QuizLength,
} from './styled';

// Hooks
import { useQuizSetup, useQuizQuestions } from './hooks';

/**
 * Component
 */

export const QuizComponent = (_props) => {
  const { quizData } = useQuizSetup();
  const { currentQuestion, answerQuestion } = useQuizQuestions(quizData);

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
            <QuizButton
              key={uuid()}
              answer={answer.toLowerCase()}
              value={answer}
              onClick={answerQuestion}
            >
              { answer }
            </QuizButton>
          )) }
        </QuizActions>

        <QuizLength>
          { currentQuestion + 1 } / { quizData.length }
        </QuizLength>

        { (currentQuestion + 1 >= quizData.length) && <Redirect to="/home" /> }
      </QuizWrapper>
    )
    : <></>;
};
