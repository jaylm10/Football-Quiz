import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import PlayQuiz from "./pages/PlayQuiz.jsx";
import NotFound from "./components/NotFound.jsx";
import UsernameEntry from "./components/auth/UsernameEntry.jsx";
import Quiz from "./components/Quiz.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="play-quiz" element={<PlayQuiz />}>
        <Route path="username" element= {<UsernameEntry/>}>
        </Route>
        <Route path="quiz" element={<Quiz/>}>
        </Route>
      </Route>
      <Route
        path="guess-player"
        element={
          <div className="page-container">Guess Player page coming soon</div>
        }
      />
      <Route
        path="leaderboard"
        element={
          <div className="page-container">Leaderboard page coming soon</div>
        }
      />
      <Route
        path="my-teams"
        element={
          <div className="page-container">My Teams page coming soon</div>
        }
      />
      <Route
        path="join-lobby"
        element={
          <div className="page-container">Join Lobby page coming soon</div>
        }
      />
      <Route
        path="play-alone"
        element={
          <div className="page-container">Join Lobby page coming soon</div>
        }
      />
      <Route
        path="create-lobby"
        element={
          <div className="page-container">Create Lobby page coming soon</div>
        }
      />
      <Route
        path="profile"
        element={<div className="page-container">Profile page coming soon</div>}
      />
      <Route
        path="settings"
        element={
          <div className="page-container">Settings page coming soon</div>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
