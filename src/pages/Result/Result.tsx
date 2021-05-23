import { Header } from "../../components";
import { useData } from "../../contexts/DataContext";

export default function Result() {
  const {
    state: { score, currentQuiz },
  } = useData();
  return (
    <div>
      <Header title="Result" />
      <div className="container px-4 py-16">
        <p className="text-2xl font-bold text-center">
          Final Score: {score} / {currentQuiz?.totalScore}
        </p>
        {currentQuiz?.questions.map((question) => (
          <div className="my-16">
            <p className="font-bold my-4 text-lg">{question.question}</p>
            {question.options.map((option) => (
              <div>
                <p
                  className={`block w-full text-center font-semibold rounded-3xl text-lg my-6 py-6 bg-gray-800 transition-colors duration-200 ease-in ${
                    option.isAnswer && "bg-green-600"
                  } ${
                    option.id === question.selectedOptionId &&
                    !option.isAnswer &&
                    "bg-red-600"
                  }`}
                >
                  {option.content}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
