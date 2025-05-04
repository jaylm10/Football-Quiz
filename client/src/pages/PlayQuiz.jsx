import { Link, Outlet } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import "./PlayQuiz.css";

function PlayQuiz() {
  return (
    <AppLayout>
      <div className="play-quiz-container">
        <section className="play-quiz-header">
          <h1 className="play-quiz-title">Play Quiz</h1>
          <p className="play-quiz-subtitle">Select a game mode to start playing</p>
        </section>
        
        <div className="quiz-content">
          <div className="quiz-image-container">
            <img 
              src="https://www.livemint.com/lm-img/img/2025/04/27/original/the-ball-stadion-football-the-pitch-46798_1745749650462.jpeg" 
              alt="Football stadium" 
              className="quiz-image"
            />
            <div className="image-overlay">
              <div className="image-text">
                <h2>Test Your Football Knowledge</h2>
                <p>Challenge yourself with questions about players, teams, history, and more</p>
              </div>
            </div>
          </div>
          
          <div className="quiz-options">
            <Link to="username" state={{source:'solo'}} className="quiz-option-card public-lobby">
              <div className="option-icon-wrapper">
                <i className="ri-group-line option-icon"></i>
              </div>
              <div className="option-content">
                <h3 className="option-title">Play against Computer</h3>
                <p className="option-description">Play with other football fans in a public quiz session</p>
              </div>
            </Link>
            <Link to="username" state={{source:'public'}} className="quiz-option-card public-lobby">
              <div className="option-icon-wrapper">
                <i className="ri-group-line option-icon"></i>
              </div>
              <div className="option-content">
                <h3 className="option-title">Join Public Lobby</h3>
                <p className="option-description">Play with other football fans in a public quiz session</p>
              </div>
            </Link>
            
            <Link to="username" state={{source:'private'}} className="quiz-option-card private-join">
              <div className="option-icon-wrapper">
                <i className="ri-door-lock-line option-icon"></i>
              </div>
              <div className="option-content">
                <h3 className="option-title">Join Private Lobby</h3>
                <p className="option-description">Enter a lobby code to join a private quiz session</p>
              </div>
            </Link>
            
            <Link to="username" state={{source:'create-private'}} className="quiz-option-card private-create">
              <div className="option-icon-wrapper">
                <i className="ri-add-circle-line option-icon"></i>
              </div>
              <div className="option-content">
                <h3 className="option-title">Create Private Lobby</h3>
                <p className="option-description">Set up your own quiz session and invite friends</p>
              </div>
            </Link>
          </div>
        </div>
        <Outlet/>
      </div>
    </AppLayout>
  );
}

export default PlayQuiz;