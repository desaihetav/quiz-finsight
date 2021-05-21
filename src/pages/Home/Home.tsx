import { useEffect } from "react";
import { useData } from "../../contexts/DataContext";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";

export default function Home() {
  const {
    state: { allQuizzes },
  } = useData();

  useEffect(() => {
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach((i) => console.log(uuid()));
  }, []);

  return (
    <div>
      <h1>HomePage</h1>
      {allQuizzes.map((quizItem) => (
        <div>
          <Link to={`/quiz/${quizItem.id}`}>{quizItem.name}</Link>
        </div>
      ))}
    </div>
  );
}
