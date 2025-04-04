import { Link } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import UserAvatar from "../components/UserAvatar";
import "./Home.css";
import Header from "../components/Header";

function Home() {
  // Quick Actions
  const quickActions = [
    {
      title: "Play Quiz",
      description: "Test your football knowledge",
      icon: "ri-question-line",
      iconColor: "icon-primary",
      path: "/play-quiz"
    },
    {
      title: "Guess Player",
      description: "Identify the player",
      icon: "ri-user-search-line",
      iconColor: "icon-blue",
      path: "/guess-player"
    },
    {
      title: "Join Lobby",
      description: "Enter a game with others",
      icon: "ri-door-open-line",
      iconColor: "icon-yellow",
      path: "/join-lobby"
    },
    {
      title: "Create Lobby",
      description: "Start your own game",
      icon: "ri-add-box-line",
      iconColor: "icon-green",
      path: "/create-lobby"
    }
  ];
  
  // Game Modes
  const gameModes = [
    {
      id: "classic-quiz",
      title: "Classic Quiz",
      description: "Test your football knowledge with a series of multiple-choice questions. Compete for the highest score!",
      imageSrc: "https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?q=80&w=2012&auto=format&fit=crop"
    },
    {
      id: "player-guess",
      title: "Guess the Player",
      description: "Can you identify the player from clues and partial images? Put your recognition skills to the test!",
      imageSrc: "https://images.unsplash.com/photo-1626248801379-51a0748e0f8a?q=80&w=1974&auto=format&fit=crop"
    },
    {
      id: "team-challenge",
      title: "Team Challenge",
      description: "Compete in teams to answer football trivia. Work together and claim victory!",
      imageSrc: "https://images.unsplash.com/photo-1542034781218-9a729700e0c0?q=80&w=3840&auto=format&fit=crop"
    }
  ];
  
  // Active Lobbies (mock data)
  const activeLobbies = [
    {
      id: 1,
      name: "Premier League Quiz",
      players: "3/5",
      status: "waiting",
      isFull: false
    },
    {
      id: 2,
      name: "Champions League Experts",
      players: "4/4",
      status: "in-progress",
      isFull: true
    },
    {
      id: 3,
      name: "World Cup Trivia",
      players: "2/6",
      status: "waiting",
      isFull: false
    }
  ];
  
  // Top Players (mock data)
  const topPlayers = [
    {
      id: 1,
      name: "FootballFan92",
      points: 12500,
      rank: 1
    },
    {
      id: 2,
      name: "QuizMaster",
      points: 10200,
      rank: 2
    },
    {
      id: 3,
      name: "LionelFan10",
      points: 9800,
      rank: 3
    },
    {
      id: 4,
      name: "SoccerKing",
      points: 8700,
      rank: 4
    },
    {
      id: 5,
      name: "GoalScorer",
      points: 7600,
      rank: 5
    }
  ];
  
  return (
    <AppLayout>
      <div className="home-container">
        <Header/>
        {/* Welcome Section */}
        <section className="welcome-section">
          <h1 className="welcome-title">Welcome to FootQuiz!</h1>
          <p className="welcome-subtitle">Test your football knowledge and compete with others</p>
        </section>
        
        {/* Quick Actions */}
        <section className="quick-actions">
          {quickActions.map((action, index) => (
            <Link to={action.path} key={index}>
              <div className="action-card">
                <div className="action-content">
                  <div className="action-header">
                    <div className="action-info">
                      <div className="action-title">{action.title}</div>
                      <div className="action-description">{action.description}</div>
                    </div>
                    <div className={`action-icon-wrapper ${action.iconColor}`}>
                      <i className={`action-icon ${action.icon}`}></i>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </section>
        
        {/* Game Modes */}
        <section className="game-modes-section">
          <div className="section-header">
            <h2 className="section-title">Game Modes</h2>
          </div>
          
          <div className="game-modes-grid">
            {gameModes.map((mode) => (
              <div key={mode.id} className="game-mode-card">
                <div className="game-mode-image">
                  <img src={mode.imageSrc} alt={mode.title} />
                  <div className="image-overlay">
                    <div className="image-overlay-content">
                      <div className="game-mode-title">{mode.title}</div>
                    </div>
                  </div>
                </div>
                <div className="game-mode-content">
                  <p className="game-mode-description">{mode.description}</p>
                  <Link to={`/play-quiz?mode=${mode.id}`}>
                    <button className="play-button">Play Now</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Lobbies and Leaderboard */}
        <section className="dual-grid">
          {/* Active Lobbies */}
          <div className="lobbies-card p-4">
            <div className="lobbies-header">
              <h3 className="lobbies-title">Active Lobbies</h3>
              <button className="refresh-button">
                Refresh
                <i className="ri-refresh-line"></i>
              </button>
            </div>
            
            <div className="lobbies-table-wrapper">
              <table className="lobbies-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Players</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {activeLobbies.length > 0 ? (
                    activeLobbies.map((lobby) => (
                      <tr key={lobby.id}>
                        <td>
                          <div className="lobby-name-cell">
                            <div className="lobby-avatar">{lobby.name.charAt(0)}</div>
                            <span className="lobby-name">{lobby.name}</span>
                          </div>
                        </td>
                        <td>
                          <span className="players-count">{lobby.players}</span>
                        </td>
                        <td>
                          <span className={`status-badge status-${lobby.status}`}>
                            {lobby.status === "waiting" ? "Waiting" : "In Progress"}
                          </span>
                        </td>
                        <td>
                          {!lobby.isFull && lobby.status === "waiting" ? (
                            <Link to={`/join-lobby?id=${lobby.id}`} className="join-button">
                              Join
                            </Link>
                          ) : (
                            <span className="full-label">Full</span>
                          )}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="empty-state">
                        No active lobbies found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            
            <div className="lobbies-footer">
              <Link to="/join-lobby" className="view-all-lobbies">
                View All Lobbies
                <i className="ri-arrow-right-line"></i>
              </Link>
            </div>
          </div>
          
          {/* Top Players */}
          <div className="top-players-card">
            <h3 className="top-players-title">Top Players</h3>
            
            {topPlayers.map((player) => (
              <div key={player.id} className="player-item">
                <div className="player-rank">{player.rank}</div>
                <UserAvatar
                  src={null}
                  fallback={player.name.substring(0, 2)}
                  size="sm"
                />
                <div className="player-info">
                  <div className="player-name">{player.name}</div>
                  <div className="player-points">{player.points.toLocaleString()} points</div>
                </div>
                <div className="player-trophy">
                  {player.rank === 1 && <i className="ri-trophy-line trophy-gold"></i>}
                  {player.rank === 2 && <i className="ri-trophy-line trophy-silver"></i>}
                  {player.rank === 3 && <i className="ri-trophy-line trophy-bronze"></i>}
                </div>
              </div>
            ))}
            
            <div className="leaderboard-footer">
              <Link to="/leaderboard" className="view-leaderboard">
                View Leaderboard
                <i className="ri-arrow-right-line"></i>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </AppLayout>
  );
}

export default Home;