import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/Badges.css';

const Badges = () => {
  const [activeSection, setActiveSection] = useState('profile');

  const user = {
    username: 'Aahad',
    streak: 3,
    adsWatched: 45,
    xp: 450,
    level: Math.floor(45 / 10) + 1,
  };

  const allBadges = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      description: 'Watched your first ad!',
      icon: '🏁',
      unlocked: user.adsWatched >= 1,
    },
    {
      id: '3-day-streak',
      title: '3-Day Streak',
      description: 'Kept your streak alive for 3 days!',
      icon: '🔥',
      unlocked: user.streak >= 3,
    },
    {
      id: '7-day-streak',
      title: '7-Day Streak',
      description: 'Maintain a streak for 7 days',
      icon: '🗓️',
      unlocked: user.streak >= 7,
      progress: `${user.streak}/7`,
    },
    {
      id: '14-day-beast',
      title: '14-Day Beast',
      description: 'Keep the streak alive for 14 days',
      icon: '🧨',
      unlocked: user.streak >= 14,
      progress: `${user.streak}/14`,
    },
    {
      id: 'streak-master',
      title: 'Streak Master',
      description: 'Maintain a 30-day streak!',
      icon: '🏆',
      unlocked: user.streak >= 30,
      progress: `${user.streak}/30`,
    },
    {
      id: 'loyal-watcher',
      title: 'Loyal Watcher',
      description: 'Visit daily for 15 consecutive days',
      icon: '⏰',
      unlocked: user.streak >= 15,
      progress: `${user.streak}/15`,
    },
    {
      id: 'ad-warrior',
      title: 'Ad Warrior',
      description: 'Watch 100 ads',
      icon: '⚔️',
      unlocked: user.adsWatched >= 100,
      progress: `${user.adsWatched}/100`,
    },
    {
      id: 'ad-slayer',
      title: 'Ad Slayer',
      description: 'Watch 250 ads. You’re a machine.',
      icon: '👹',
      unlocked: user.adsWatched >= 250,
      progress: `${user.adsWatched}/250`,
    },
    {
      id: 'ad-king',
      title: 'Ad King',
      description: 'Watch 500 ads. Royalty!',
      icon: '👑',
      unlocked: user.adsWatched >= 500,
      progress: `${user.adsWatched}/500`,
    },
    {
      id: 'xp-grinder',
      title: 'XP Grinder',
      description: 'Earn 1000 XP',
      icon: '💎',
      unlocked: user.xp >= 1000,
      progress: `${user.xp}/1000`,
    },
    {
      id: 'level-5',
      title: 'Level 5 Achieved',
      description: 'Climbed to level 5. Keep going!',
      icon: '📈',
      unlocked: user.level >= 5,
      progress: `${user.level}/5`,
    },
    {
      id: 'level-10',
      title: 'Level 10 Master',
      description: 'Hit level 10. You’re a legend!',
      icon: '🚀',
      unlocked: user.level >= 10,
      progress: `${user.level}/10`,
    },
    {
      id: 'night-owl',
      title: 'Night Owl',
      description: 'Watched an ad between 2AM - 4AM',
      icon: '🌙',
      unlocked: false,
    },
    {
      id: 'secret-finder',
      title: 'Secret Finder',
      description: 'Unlocked a hidden badge 👀',
      icon: '💎',
      unlocked: false,
    },
    {
      id: 'early-bird',
      title: 'Early Bird',
      description: 'Watched an ad before 6AM',
      icon: '🐣',
      unlocked: false,
    },
    {
      id: 'weekend-grinder',
      title: 'Weekend Grinder',
      description: 'Watched ads on both Saturday and Sunday',
      icon: '📆',
      unlocked: false,
    },
  ];

  return (
    <div className="dashboard-container">
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
              <li><button className={`nav-button ${activeSection === 'profile' ? 'active' : ''}`} onClick={() => setActiveSection('profile')}>Profile</button></li>
              <li><button className={`nav-button ${activeSection === 'badges' ? 'active' : ''}`} onClick={() => setActiveSection('badges')}>Badges</button></li>
              <li><button className={`nav-button ${activeSection === 'progress' ? 'active' : ''}`} onClick={() => setActiveSection('progress')}>Progress</button></li>
            </ul>
          </nav>
        </aside>

        <main className="main-content">
          {activeSection === 'profile' && (
            <section className="user-info">
              <h2>User Profile</h2>
              <div className="profile-card">
                <img src="https://via.placeholder.com/100" alt="User Avatar" className="avatar" />
                <div className="user-details">
                  <p><strong>Username:</strong> {user.username}</p>
                  <p><strong>Level:</strong> {user.level}</p>
                  <p><strong>XP:</strong> {user.xp}</p>
                  <p><strong>Streak:</strong> {user.streak} Days <span className="streak-flame">🔥</span></p>
                  <p><strong>Total Ads Watched:</strong> {user.adsWatched}</p>
                </div>
              </div>
            </section>
          )}

          {activeSection === 'badges' && (
            <section className="all-badges">
              <h2>🎖️ All Badges</h2>
              <div className="badges-grid">
                {allBadges.map((badge) => (
                  <div key={badge.id} className={`badge-card ${badge.unlocked ? 'unlocked' : 'locked'}`}>
                    <div className="badge-icon">{badge.icon}</div>
                    <div className="badge-title">{badge.title}</div>
                    <div className="badge-desc">{badge.description}</div>
                    {badge.progress && <div className="progress-bar"><div className="progress-fill" style={{ width: `${(parseInt(badge.progress.split('/')[0]) / parseInt(badge.progress.split('/')[1])) * 100}%` }}></div></div>}
                  </div>
                ))}
              </div>
            </section>
          )}

          {activeSection === 'progress' && (
            <section className="level-progress">
              <h2>📊 Level Progress</h2>
              <div className="level-grid">
                {Array.from({ length: 10 }, (_, index) => {
                  const level = index + 1;
                  const unlocked = level <= user.level;
                  return (
                    <div key={level} className={`level-card ${unlocked ? 'unlocked' : 'locked'}`}>
                      <p>Level {level}</p>
                    </div>
                  );
                })}
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
};

export default Badges;