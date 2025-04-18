import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/Leaderboard.css';

const leaderboardData = [
  { name: 'Alex R.', points: 152, bio: 'Top contributor with a focus on crypto.', avatar: 'https://placeimg.com/100/100/people' },
  { name: 'Maya L.', points: 134, bio: 'Experienced investor and strategist.', avatar: 'https://placeimg.com/100/100/people' },
  { name: 'Jordan P.', points: 119, bio: 'Blockchain enthusiast and developer.', avatar: 'https://placeimg.com/100/100/people' },
  { name: 'Chris M.', points: 110, bio: 'AI and machine learning expert.', avatar: 'https://placeimg.com/100/100/people' },
  { name: 'Samira K.', points: 98, bio: 'Crypto trader with a keen eye for trends.', avatar: 'https://placeimg.com/100/100/people' },
  // More entries...
];

const LeaderDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="leader-container">
      {/* Top Navigation Bar */}
      <nav className="navbar">
      <div className="logo">
          <span className="heart">❤️</span>
          <span className="brand">Watch<span className="highlight">2</span>Give</span>
        </div>
        <div>
        <nav className="nav-links">
        <Link to="/ads" className="cta-btn secondary">Watch AD</Link>
          <Link to="/leaderboard" className="cta-btn secondary">Leaderboard</Link>
          <Link to="/badges" className="cta-btn secondary">Badges</Link>
        </nav>
        </div>
      </nav>

      {/* Centered Leaderboard Header */}
      <header className="leader-header">
        <h1>🏆 Weekly Leaderboard</h1>
        <p>Top contributors lighting up the charts</p>
      </header>

      {/* Leader Cards */}
      <section className="leader-list">
        {leaderboardData.map((user, index) => {
          const rankClass =
            index === 0 ? 'gold-glow' :
            index === 1 ? 'silver-glow' :
            index === 2 ? 'bronze-glow' : '';

          return (
            <div className={`leader-card ${rankClass}`} key={index}>
              <div className="rank">#{index + 1}</div>
              <div className="user-info">
                <img src={user.avatar} alt={`${user.name}'s avatar`} className="user-avatar" />
                <div>
                  <h3>{user.name}</h3>
                  <p className="bio">{user.bio}</p>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${(user.points / leaderboardData[0].points) * 100}%` }}
                    />
                  </div>
                  <p className="points">{user.points} XP</p>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default LeaderDashboard;
