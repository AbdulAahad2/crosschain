import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './Home';
import Badges from './differenttabs/Badges';
import Leaderboard from './differenttabs/Leaderboard';
import WatchAd from './differenttabs/Watchads';
import './index.css';

const Root = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/badges" element={<Badges/>} />
      <Route path="/leaderboard" element={<Leaderboard />} />
      <Route path="/ads" element={<WatchAd />} />
    </Routes>
  </BrowserRouter>
);

const root = createRoot(document.getElementById('root'));
root.render(<Root />);