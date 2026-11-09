import { StrictMode, useLayoutEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Navigate, Routes, Route, useLocation } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Home from './sections/Home';
import Divisions from './sections/Divisions';
import Events from './sections/Events';
import Leadership from './sections/Leadership';
import Sponsors from './sections/Sponsors';
import Placement from './sections/Placement';
import Join from './sections/Join';
import TradingCompetitionPage from './pages/TradingCompetitionPage';

const pageTitles = {
  '/events': 'Events',
  '/members': 'Members',
  '/sponsors': 'Sponsors',
  '/join': 'Join',
  '/trading-competition': 'UIUC Trading Competition',
};

function AboutPage() {
  const { hash } = useLocation();
  const formerSection = hash.slice(1);
  if (formerSection === 'team') return <Navigate to="/members#team" replace />;
  if (formerSection === 'join') return <Navigate to="/join" replace />;

  return (
    <>
      <Home />
      <Events preview />
      <Divisions collapsible />
      <Sponsors preview />
    </>
  );
}

function MembersPage() {
  return (
    <>
      <Placement />
      <Leadership />
      <Divisions />
    </>
  );
}

function RouteScroll() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    const title = pageTitles[pathname.replace(/\/$/, '')];
    document.title = title ? `${title} | Quant at Illinois` : 'Quant at Illinois';

    const anchor = hash && document.getElementById(hash.slice(1));
    if (anchor) anchor.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <RouteScroll />
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<AboutPage />} />
          <Route path="events" element={<Events />} />
          <Route path="members" element={<MembersPage />} />
          <Route path="team" element={<Navigate to="/members" replace />} />
          <Route path="sponsors" element={<Sponsors />} />
          <Route path="join" element={<Join />} />
          <Route path="trading-competition" element={<TradingCompetitionPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
