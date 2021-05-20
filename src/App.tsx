import "./index.css";
import { Routes, Route } from "react-router-dom";
import { Home, Quiz } from "./pages";

function App() {
  return (
    <div className="h-screen flex justify-center items-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </div>
  );
}

export default App;
