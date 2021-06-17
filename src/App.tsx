import "./index.css";
import { Routes, Route } from "react-router-dom";
import { Home, Quiz, Result } from "./pages";

function App() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-900 color text-gray-50">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz/:quizId" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
