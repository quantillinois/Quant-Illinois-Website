import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import TradingCompetitionPage from './pages/TradingCompetitionPage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/trading-competition" element={<TradingCompetitionPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
