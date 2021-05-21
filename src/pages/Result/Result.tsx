import { useData } from "../../contexts/DataContext";

export default function Result() {
  const {
    state: { score, currentQuiz },
  } = useData();
  return (
    <div>
      <h1>Result Page</h1>
      <p>
        Final Score: {score} / {currentQuiz?.totalScore}
      </p>
      {currentQuiz?.questions.map((question) => (
        <div>
          <p>{question.question}</p>
          {question.options.map((option) => (
            <div>
              <p
                className={`my-2 ${option.isAnswer && "text-green-600"} ${
                  option.id === question.selectedOptionId &&
                  !option.isAnswer &&
                  "text-red-600"
                }`}
              >
                {option.content}
              </p>
              {option.isAnswer && <p>Correct</p>}
              {option.id === question.selectedOptionId && !option.isAnswer && (
                <p>Incorrect</p>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
