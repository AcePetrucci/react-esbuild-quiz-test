import React from 'react';
import { Redirect } from 'react-router-dom';
import uuid from 'react-uuid';

// Shared Components
import { SpinnerComponent } from 'components';

// Styled Components
import {
  QuizWrapper,
  QuizCategory,
  QuizQuestion,
  QuizQuestionWrapper,
  QuizActions,
  QuizButton,
  QuizLength,
  QuizLoading,
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
    ? (currentQuestion >= quizData.length)
      ? <Redirect to="/score" />
      : (
        <QuizWrapper>
          <QuizCategory> { quizData[currentQuestion].category } </QuizCategory>

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
        </QuizWrapper>
      )
    : (
      <QuizLoading>
        <SpinnerComponent />
      </QuizLoading>
    );
};
