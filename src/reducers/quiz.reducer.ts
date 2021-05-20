import { QUIZ_INITIAL_STATE, ACTION } from "./quiz.types";

export const quizInitialState = {
  quizId: "quiz01",
  questionNo: 1,
  score: 0,
  timer: 30,
};

export const quizReducer = (
  state: QUIZ_INITIAL_STATE,
  action: ACTION
): QUIZ_INITIAL_STATE => {
  switch (action.type) {
    case "INCREMENT_SCORE":
      return {
        ...state,
        score: state.score + action.payload.score,
      };
    case "DECREMENT_SCORE":
      return {
        ...state,
        score: state.score - action.payload.score,
      };
    case "RESET_SCORE":
      return {
        ...state,
        score: 0,
      };
    case "INCREMENT_QUESTION_NO":
      return {
        ...state,
        questionNo: state.questionNo + 1,
      };
    case "RESET_QUESTION_NO":
      return {
        ...state,
        questionNo: 0,
      };
    case "DECREMENT_TIMER":
      return {
        ...state,
        timer: state.timer - 1,
      };
    case "RESET_TIMER":
      return {
        ...state,
        timer: 30,
      };
    case "SET_QUIZ_ID":
      return {
        ...state,
        quizId: action.payload.quizId,
      };
    default:
      return state;
  }
};
