import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const Home = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="logo">
          <span className="heart">❤️</span>
          <span className="brand">Watch<span className="highlight">2</span>Give</span>
        </div>
        <nav className="nav-links">
        <Link to="/ads" className="cta-btn secondary">Watch AD</Link>
          <Link to="/leaderboard" className="cta-btn secondary">Leaderboard</Link>
          <Link to="/badges" className="cta-btn secondary">Badges</Link>
        </nav>
      </header>

      <main className="dashboard-main">
        <h1 className="main-title">Watch & Earn AdTokens</h1>

        <div className="video-progress-section">
          <div className="video-player">
            <div className="play-button" />
          </div>
          <div className="ad-progress">
            <h3>Ad Progress</h3>
            <p><span className="progress">5</span>/20 Ads</p>
            <div className="progress-bar">
              <div className="filled" style={{ width: '25%' }}></div>
            </div>
          </div>
        </div>

        <button className="watch-now">Watch Now</button>

        <div className="status-section">
          <div className="streak">
            <p>🔥 Streak: <strong>3-Day</strong></p>
            <div className="icons">🔥🔥🔥</div>
          </div>
          <div className="badges">
            <p>🏅 Badges</p>
            <span>2 unlocked</span>
          </div>
        </div>

        <div className="leaderboard">
          <h3>Top 5 Leaderboard</h3>
          <ol>
            <li>Alice <span>240</span></li>
            <li>Bob <span>200</span></li>
            <li>Charlie <span>180</span></li>
            <li>Aliss <span>140</span></li>
            <li>Fmil.i <span>55</span></li>
          </ol>
        </div>

        <section className="proof-of-giving">
          <h2>Proof-of-Giving</h2>
          <div className="giving-items">
            <div className="item">
              <img src="/images/donated-tshirts.jpg" alt="Donated T-Shirts" />
              <p>👕 Donated T-Shirts<br/><span>Vendor 1</span></p>
            </div>
            <div className="item">
              <img src="/images/soup-kitchen.jpg" alt="Soup Kitchen" />
              <p>🍲 Soup Kitchen<br/><span>Vendor 2</span></p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
