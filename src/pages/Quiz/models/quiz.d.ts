export type TAnswerType = 'False' | 'True';
export interface IQuizItem {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: TAnswerType;
  incorrect_answers: TAnswerType[];
  possible_answers?: TAnswerType[];
}

export interface IQuiz {
  response_code: number;
  results: IQuizItem[];
}
