import { Link } from "react-router-dom";
import { useData } from "../../contexts/DataContext";
import { Quiz } from "../../data/quiz.types";

type QUIZ_CARD = { quizItem: Quiz };

function QuizCard({ quizItem }: QUIZ_CARD) {
  return (
    <Link to={`/quiz/${quizItem.id}`}>
      <div className="bg-gray-800 rounded-3xl h-full">
        <img
          className="w-full rounded-3xl"
          src={quizItem.coverImageUrl}
          alt={quizItem.name}
        />
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-2">{quizItem.name}</h2>
          <p className="text-gray-400">Take this quiz to test yourself!</p>
          <p className="text-gray-400">{quizItem.questions.length} Questions</p>
        </div>
      </div>
    </Link>
  );
}

export default function QuizGrid() {
  const {
    state: { allQuizzes },
  } = useData();
  return (
    <section className="px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8 container">
      {allQuizzes?.map((quizItem) => (
        <QuizCard quizItem={quizItem} />
      ))}
    </section>
  );
}
