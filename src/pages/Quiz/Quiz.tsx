import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Header } from "../../components";
import { useData } from "../../contexts/DataContext";
import { Option, Question } from "../../data/quiz.types";

export default function Quiz() {
  const { quizId } = useParams();
  const {
    state: { currentQuiz, questionNo, isClickEnabled, score },
    dispatch,
  } = useData();
  const currentQuestion = currentQuiz?.questions[questionNo] as Question;
  const [selectedOptionId, setSelectedOptionId] = useState("");

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
      ? navigate("/result", { replace: true })
      : dispatch({
          type: "INCREMENT_QUESTION_NO",
        });
  };

  const optionClickHandler = async (option: Option) => {
    setSelectedOptionId(() => option.id);
    dispatch({
      type: "SET_SELECTED_OPTION_ID",
      payload: { optionId: option.id, questionId: currentQuestion.id },
    });
    dispatch({ type: "DISABLE_CLICK" });
    setTimeout(() => {
      updateQuestionAndScore(option);
      dispatch({ type: "ENABLE_CLICK" });
    }, 1500);
  };

  useEffect(() => {
    dispatch({ type: "INITIALIZE_CURRENT_QUIZ", payload: { quizId } });
    return () => {};
  }, []);

  return currentQuiz && currentQuestion ? (
    <div className="min-h-screen w-full max-w-2xl px-4">
      <Header title={currentQuiz.name} />
      <div className="container">
        <div className="w-full flex my-8 justify-between text-xl font-semibold">
          <p>
            <span className="text-gray-400">Question:</span> {questionNo + 1} /{" "}
            {currentQuiz.questions.length}
          </p>
          <p>
            <span className="text-gray-400">Score:</span> {score}
          </p>
        </div>
        <h3 className="font-bold my-4 text-lg">{currentQuestion.question}</h3>
        <div className="my-16">
          {currentQuestion.options.map((option) => {
            return (
              <button
                disabled={!isClickEnabled}
                onClick={() => optionClickHandler(option)}
                className={`block w-full rounded-3xl text-lg font-semibold my-6 py-6 bg-gray-800 transition-colors duration-200 ease-in ${
                  !isClickEnabled && option.isAnswer && "bg-green-600"
                } ${
                  option.id === selectedOptionId &&
                  !option.isAnswer &&
                  !isClickEnabled &&
                  "bg-red-600"
                }`}
              >
                {option.content}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  ) : (
    <div></div>
  );
}
