export type Option = {
  content: string;
  isAnswer: boolean;
};

export type Question = {
  question: string;
  points: number;
  options: Array<Option>;
  /**
   * Add just a number without minus sign
   */
  negativePoints?: number;
};

export type Quiz = {
  name: string;
  questions: Array<Question>;
};
