import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useData } from "../../contexts/DataContext";
import { Option, Question } from "../../data/quiz.types";

export default function Quiz() {
  const { quizId } = useParams();
  const {
    state: { allQuizzes, currentQuiz, questionNo, isClickEnabled, score },
    dispatch,
  } = useData();
  const currentQuestion = currentQuiz?.questions[questionNo] as Question;
  const navigate = useNavigate();

  const updateQuestionAndScore = (option: Option) => {
    option.isAnswer
      ? dispatch({
          type: "INCREMENT_SCORE",
          payload: { score: currentQuestion?.points },
        })
      : dispatch({
          type: "DECREMENT_SCORE",
          payload: { score: currentQuestion?.negativePoints },
        });

    questionNo + 1 === currentQuiz?.questions.length
      ? navigate("/result")
      : dispatch({
          type: "INCREMENT_QUESTION_NO",
        });

    dispatch({
      type: "SET_SELECTED_OPTION_ID",
      payload: { optionId: option.id, questionId: currentQuestion.id },
    });
  };

  const optionClickHandler = (option: Option) => {
    dispatch({ type: "DISABLE_CLICK" });
    setTimeout(() => {
      updateQuestionAndScore(option);
      dispatch({ type: "ENABLE_CLICK" });
    }, 1000);
  };

  useEffect(() => {
    dispatch({ type: "INITIALIZE_CURRENT_QUIZ", payload: { quizId } });
    return () => {};
  }, []);

  return currentQuiz && currentQuestion ? (
    <div>
      <h1>Quiz Page</h1>
      <h2>{currentQuiz.name}</h2>
      <div className="w-full flex my-2 justify-between">
        <p>
          Question: {questionNo} / {currentQuiz.questions.length}
        </p>
        <p>Score: {score}</p>
      </div>
      <h3>{currentQuestion.question}</h3>
      {currentQuestion.options.map((option) => {
        return (
          <button
            disabled={!isClickEnabled}
            onClick={() => optionClickHandler(option)}
            className="block"
          >
            {option.content}
          </button>
        );
      })}
    </div>
  ) : (
    <div></div>
  );
}
