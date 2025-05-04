import React, { useState, useContext } from 'react';
import {useLocation,useNavigate} from 'react-router-dom'
import './UsernameEntry.css';
import UserContext from '../../contexts/UserContext';

const UsernameEntry = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(null); 
  const location = useLocation();
  const navigate = useNavigate();

  const { setUsername } = useContext(UserContext);

  const source = location.state?.source || 'unknown';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("Name cannot be empty.");
      return;
    }

    setUsername({ name });
    setError(null); 
    
    if(source=="solo"){
      navigate('/play-quiz/quiz')
    }

  };

  return (
    <div className="username-modal">
      <div className="modal-content">
        <h2>Enter Your Username</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your display name"
            maxLength={15}
          />
          {error && <p className="error-message">{error}</p>}
          <button type="submit">Continue</button>
        </form>
      </div>
    </div>
  );
};

export default UsernameEntry;
