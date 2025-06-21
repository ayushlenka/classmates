import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/home";
import Transcripts from "./pages/transcripts/transcripts";
import Results from "./pages/results/results";
import Input from "./pages/input/input";
import ProtectedRoute from "./components/protectedroute.jsx";

function App() {
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <Router>
        <AuthProvider>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/transcript" element={<ProtectedRoute><Transcripts /></ProtectedRoute>} />
              <Route path="/result" element={<ProtectedRoute><Results /></ProtectedRoute>} />
              <Route path="/input" element={<ProtectedRoute><Input /></ProtectedRoute>} />
            </Routes>
          </div>
        </AuthProvider>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
