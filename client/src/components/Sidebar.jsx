import { useLocation, Link } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import UserAvatar from "./UserAvatar";
import "./Sidebar.css";

function Sidebar({ isMobileOpen, onCloseMobile }) {
  const location = useLocation();
  
  // Navigation item groups
  const playItems = [
    { path: "/", name: "Home", icon: "ri-home-line" },
    { path: "/play-quiz", name: "Play Quiz", icon: "ri-question-line" },
    { path: "/guess-player", name: "Guess Player", icon: "ri-user-search-line" },
  ];
  
  const lobbyItems = [
    { path: "/join-lobby", name: "Join Lobby", icon: "ri-door-open-line" },
    { path: "/create-lobby", name: "Create Lobby", icon: "ri-add-box-line" },
  ];
  
  const browseItems = [
    { path: "/leaderboard", name: "Leaderboard", icon: "ri-trophy-line" },
    { path: "/my-teams", name: "My Teams", icon: "ri-team-line" },
  ];
  
  const accountItems = [
    { path: "/profile", name: "Profile", icon: "ri-user-line" },
    { path: "/settings", name: "Settings", icon: "ri-settings-line" },
  ];
  
  // User data - This would come from authentication in a real app
  const user = {
    name: "Guest User",
    status: "Not signed in",
    avatarUrl: null,
  };
  
  return (
    <aside className={`sidebar ${isMobileOpen ? "open" : ""}`}>
      {/* Logo */}
      <div className="sidebar-logo">
        <div className="logo-icon">F</div>
        <span className="logo-text">FootQuiz</span>
        
        {/* Mobile close button */}
        <button 
          className="mobile-close-btn"
          onClick={onCloseMobile}
          aria-label="Close sidebar"
        >
          <i className="ri-close-line"></i>
        </button>
      </div>
      
      {/* Navigation */}
      <nav className="sidebar-nav">
        {/* Play section */}
        <div className="nav-section">
          <div className="nav-header">
            <h2>Play</h2>
          </div>
          <ul className="nav-list">
            {playItems.map((item) => (
              <li key={item.path} className="nav-item">
                <Link 
                  to={item.path} 
                  className={`nav-link ${location.pathname === item.path ? "active" : ""}`}
                >
                  <i className={`nav-icon ${item.icon}`}></i>
                  <span className="nav-text">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Lobby section */}
        <div className="nav-section">
          <div className="nav-header">
            <h2>Lobbies</h2>
          </div>
          <ul className="nav-list">
            {lobbyItems.map((item) => (
              <li key={item.path} className="nav-item">
                <Link 
                  to={item.path} 
                  className={`nav-link ${location.pathname === item.path ? "active" : ""}`}
                >
                  <i className={`nav-icon ${item.icon}`}></i>
                  <span className="nav-text">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Browse section */}
        <div className="nav-section">
          <div className="nav-header">
            <h2>Browse</h2>
          </div>
          <ul className="nav-list">
            {browseItems.map((item) => (
              <li key={item.path} className="nav-item">
                <Link 
                  to={item.path} 
                  className={`nav-link ${location.pathname === item.path ? "active" : ""}`}
                >
                  <i className={`nav-icon ${item.icon}`}></i>
                  <span className="nav-text">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Account section */}
        <div className="nav-section">
          <div className="nav-header">
            <h2>Account</h2>
          </div>
          <ul className="nav-list">
            {accountItems.map((item) => (
              <li key={item.path} className="nav-item">
                <Link 
                  to={item.path} 
                  className={`nav-link ${location.pathname === item.path ? "active" : ""}`}
                >
                  <i className={`nav-icon ${item.icon}`}></i>
                  <span className="nav-text">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      
      {/* Footer with user info */}
      {/* <div className="sidebar-footer">
        <div className="user-profile">
          <UserAvatar 
            src={user.avatarUrl} 
            fallback="GU" 
            size="md"
          />
          <div className="user-info">
            <div className="user-name">{user.name}</div>
            <div className="user-status">{user.status}</div>
          </div>
        </div>
        
        <button className="signin-btn mt-2">
          <i className="ri-login-box-line"></i>
          Sign In
        </button>
      </div> */}
    </aside>
  );
}

export default Sidebar;