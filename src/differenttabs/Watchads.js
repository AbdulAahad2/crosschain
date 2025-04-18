import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/WatchAd.css';

const sponsors = [
  {
    name: 'EcoDrive',
    logo: 'https://via.placeholder.com/120x60?text=EcoDrive',
    description: 'Support clean energy transportation by watching EcoDrive’s latest ad.'
  },
  {
    name: 'HealthPlus',
    logo: 'https://via.placeholder.com/120x60?text=HealthPlus',
    description: 'Promote global wellness by viewing HealthPlus’ new awareness campaign.'
  },
  {
    name: 'EduSpark',
    logo: 'https://via.placeholder.com/120x60?text=EduSpark',
    description: 'Help fund global education with EduSpark’s inspiring message.'
  }
];

const WatchAd = () => {
  return (
    <div className="watchad-container">
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

      {/* Page Content */}
      <header className="watchad-header">
        <h1>🎥 Choose a Sponsor</h1>
        <p>Select a sponsor to watch their ad and earn $GIVEs</p>
      </header>

      <section className="sponsor-grid">
        {sponsors.map((sponsor, index) => (
          <div className="sponsor-card" key={index}>
            <img src={sponsor.logo} alt={`${sponsor.name} Logo`} />
            <h3>{sponsor.name}</h3>
            <p>{sponsor.description}</p>
            <button className="watch-btn">Watch Now</button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default WatchAd;
