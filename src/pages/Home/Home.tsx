import { useEffect } from "react";
import { Header, QuizGrid } from "../../components";
import { useData } from "../../contexts/DataContext";

export default function Home() {
  const { dispatch } = useData();

  useEffect(() => {
    dispatch({ type: "RESET_STATE" });
  }, []);

  return (
    <div className="min-h-screen w-full">
      <Header title={"Quiz Finsight"} />
      <QuizGrid />
    </div>
  );
}
