export interface IQuizItem {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  possible_answers?: string[];
}

export interface IQuiz {
  response_code: number;
  results: IQuizItem[];
}