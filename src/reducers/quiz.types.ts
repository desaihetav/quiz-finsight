export type QUIZ_INITIAL_STATE = {
  quizId: string;
  questionNo: number;
  score: number;
  timer: number;
};

export type ACTION =
  | { type: "INCREMENT_SCORE"; payload: { score: number } }
  | { type: "DECREMENT_SCORE"; payload: { score: number } }
  | { type: "RESET_SCORE" }
  | { type: "INCREMENT_QUESTION_NO" }
  | { type: "RESET_QUESTION_NO" }
  | { type: "DECREMENT_TIMER" }
  | { type: "RESET_TIMER" }
  | { type: "SET_QUIZ_ID"; payload: { quizId: string } };
