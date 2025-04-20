import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Transcripts from "./pages/transcripts/transcripts";
import Results from "./pages/results/results";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transcript" element={<Transcripts />} />
          <Route path="/result" element={<Results />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
