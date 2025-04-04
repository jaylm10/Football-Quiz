import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="main-header">
      <div className="header-container">
        <div className="header-left">
          {/* <div className="header-logo">
            <div className="header-logo-icon">F</div>
            <h1 className="header-logo-text">FootQuiz</h1>
          </div> */}
        </div>

        <div className="header-center">
          <nav className="header-nav">
            <ul className="header-nav-list">
              <li className="header-nav-item">
                <Link to="/" className="header-nav-link active">Home</Link>
              </li>
              <li className="header-nav-item">
                <Link to="/play-quiz" className="header-nav-link">Play</Link>
              </li>
              <li className="header-nav-item">
                <Link to="/leaderboard" className="header-nav-link">Leaderboard</Link>
              </li>
              <li className="header-nav-item">
                <Link to="/join-lobby" className="header-nav-link">Lobbies</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="header-right">
          <div className="header-actions">
            <button className="header-action-btn">
              <i className="ri-search-line"></i>
            </button>
            <button className="header-action-btn">
              <i className="ri-notification-3-line"></i>
            </button>
            <Link to="/profile" className="header-profile-link">
              <div className="header-profile-avatar">GU</div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;