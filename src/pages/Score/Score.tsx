import React, { useMemo } from 'react';
import uuid from 'react-uuid';

import { useQuizContextState } from 'providers';

// Styled Components
import {
  ScoreWrapper,
  ScoreTitle,
  ScoreResults,
  ScoreAnswers,
  ScoreAnswersItem,
  ScoreAction,
} from './styled';

// Hooks

/**
 * Component
 */

export const ScoreComponent = (_props) => {
  // Context
  const { quizContext } = useQuizContextState();

  // Memoized Results
  const correctScore = useMemo(() => {
    const score = quizContext.answers.filter((answer) => answer.correct);

    return score.length;
  }, [quizContext]);

  return (
    <ScoreWrapper>
      <ScoreTitle> You scored </ScoreTitle>
      <ScoreResults>
        { correctScore } / { quizContext.answers.length }
      </ScoreResults>

      <ScoreAnswers>
        { quizContext.answers.map((answer) => (
          <ScoreAnswersItem
            key={uuid()}
            correct={answer.correct}
          >
            { answer.question }
          </ScoreAnswersItem>
        )) }
      </ScoreAnswers>

      <ScoreAction to="/quiz"> Play again? </ScoreAction>
    </ScoreWrapper>
  );
};
