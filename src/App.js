import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Quiz from "./Pages/Quiz";
import Result from "./Pages/Result";

function App() {
  return (
    <BrowserRouter>
      <div className="app" style={{ backgroundImage: "url(./ques1.png)" }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
