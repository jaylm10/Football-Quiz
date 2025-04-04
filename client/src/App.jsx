import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./components/NotFound";
import "./App.css";
import PlayQuiz from "./pages/PlayQuiz";


// Main App Component
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play-quiz" element={<PlayQuiz/>} />
        <Route path="/guess-player" element={<div className="page-container">Guess Player page coming soon</div>} />
        <Route path="/leaderboard" element={<div className="page-container">Leaderboard page coming soon</div>} />
        <Route path="/my-teams" element={<div className="page-container">My Teams page coming soon</div>} />
        <Route path="/join-lobby" element={<div className="page-container">Join Lobby page coming soon</div>} />
        <Route path="/create-lobby" element={<div className="page-container">Create Lobby page coming soon</div>} />
        <Route path="/profile" element={<div className="page-container">Profile page coming soon</div>} />
        <Route path="/settings" element={<div className="page-container">Settings page coming soon</div>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;