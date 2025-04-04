import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="not-found-container">
      <div className="not-found-card">
        <div className="not-found-content">
          <div className="not-found-header">
            <div className="not-found-code">404</div>
            <h1 className="not-found-title">Page Not Found</h1>
          </div>
          
          <p className="not-found-message">
            The page you are looking for doesn't exist or has been moved.
          </p>
          
          <div className="not-found-actions">
            <Link to="/" className="home-button">
              <i className="ri-home-line"></i>
              Return Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;