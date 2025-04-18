import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/Badges.css';

const Badges = () => {
  const user = {
    username: 'Aahad',
    streak: 3,
    adsWatched: 45,
    xp: 450, // Example: 10 XP per ad watched
    level: Math.floor(45 / 10) + 1, // Level up every 10 ads
  };

  const progressToNextBadge = {
    sevenDayStreak: (user.streak / 7) * 100, // 3/7 days = 42.86%
    adWarrior: (user.adsWatched / 100) * 100, // 45/100 ads = 45%
  };

  return (
    <div className="dashboard-container">
      {/* Reusable Navigation Bar */}
      <nav className="navbar">
        <div className="logo">
          <span className="heart">❤️</span>
          <span className="brand">Watch<span className="highlight">2</span>Give</span>
        </div>
        <div className="nav-links">
          <Link to="/ads" className="cta-btn secondary">Watch AD</Link>
          <Link to="/leaderboard" className="cta-btn secondary">Leaderboard</Link>
          <Link to="/badges" className="cta-btn secondary">Badges</Link>
        </div>
      </nav>
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>🎮 User Dashboard</h1>
        <div className="user-stats">
          <span>Level {user.level} 🚀</span>
          <span>{user.xp} XP ⭐</span>
          <span>{user.streak} Day Streak 🔥</span>
        </div>
      </header>

      <div className="dashboard-content">
        <aside className="sidebar">
          <nav>
            <ul>
              <li><button className="nav-button active">Profile</button></li>
              <li><button className="nav-button">Badges</button></li>
              <li><button className="nav-button">Progress</button></li>
            </ul>
          </nav>
        </aside>

        <main className="main-content">
          <section className="user-info">
            <h2>User Profile</h2>
            <div className="profile-card">
              <img
                src="https://via.placeholder.com/100"
                alt="User Avatar"
                className="avatar"
              />
              <div className="user-details">
                <p><strong>Username:</strong> {user.username}</p>
                <p><strong>Level:</strong> {user.level}</p>
                <p><strong>XP:</strong> {user.xp}</p>
                <p><strong>Streak:</strong> {user.streak} Days <span className="streak-flame">🔥</span></p>
                <p><strong>Total Ads Watched:</strong> {user.adsWatched}</p>
              </div>
            </div>
          </section>

          <section className="earned-badges">
            <h2>Unlocked Badges (2)</h2>
            <div className="badges-grid">
              <div className="badge-card unlocked">
                <div className="badge-icon">🏁</div>
                <p className="badge-title">Getting Started</p>
                <p className="badge-desc">Watched your first ad!</p>
                <button className="claim-button">Claim Reward</button>
              </div>
              <div className="badge-card unlocked">
                <div className="badge-icon">🔥</div>
                <p className="badge-title">3-Day Streak</p>
                <p className="badge-desc">Kept your streak alive for 3 days!</p>
                <button className="claim-button">Claim Reward</button>
              </div>
            </div>
          </section>

          <section className="locked-badges">
            <h2>Locked Badges</h2>
            <div className="badges-grid">
              <div className="badge-card locked" title="Progress: 3/7 days">
                <div className="badge-icon">🔒</div>
                <p className="badge-title">7-Day Streak</p>
                <p className="badge-desc">Maintain a streak for 7 days</p>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${progressToNextBadge.sevenDayStreak}%` }}
                  ></div>
                </div>
              </div>
              <div className="badge-card locked" title="Progress: 45/100 ads">
                <div className="badge-icon">🔒</div>
                <p className="badge-title">Ad Warrior</p>
                <p className="badge-desc">Watch 100 ads</p>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${progressToNextBadge.adWarrior}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>

    </div>
  );
};

export default Badges;