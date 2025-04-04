import "./MobileHeader.css";

function MobileHeader({ onToggleSidebar }) {
  return (
    <header className="mobile-header">
      <div className="mobile-header-left">
        <button 
          className="menu-button" 
          onClick={onToggleSidebar}
          aria-label="Toggle menu"
        >
          <i className="ri-menu-line"></i>
        </button>
        <div className="mobile-logo">
          <div className="mobile-logo-icon">F</div>
          <span className="mobile-logo-text">FootQuiz</span>
        </div>
      </div>
      <div className="mobile-header-right">
        <button className="notification-button" aria-label="Notifications">
          <i className="ri-notification-3-line"></i>
        </button>
      </div>
    </header>
  );
}

export default MobileHeader;