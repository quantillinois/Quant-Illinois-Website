import React from 'react';
import quantLogo from '../assets/full-logo.png';

const TradingCompetitionPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
        padding: '20px',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      <img
        src={quantLogo}
        alt="Quant Logo"
        style={{ width: '800px', height: '200px', marginBottom: '20px' }}
      />
      <h1
        style={{
          fontSize: '2.5rem',
          marginBottom: '20px',
          fontFamily: 'Cinzel, serif',
        }}
      >
        Quant Illinois Spring 2025 Trading Competition Information
      </h1>
      <p style={{ fontSize: '1.2rem', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto' }}>
        Welcome to the Quant Illinois Trading Competition! This competition is designed to challenge
        participants to develop and test their trading strategies in a simulated environment.
      </p>
      <p style={{ fontSize: '1.2rem', lineHeight: '1.6', maxWidth: '800px', margin: '20px auto' }}>
        Stay tuned for more details about registration, rules, and prizes. We look forward to seeing
        your strategies in action!
      </p>
    </div>
  );
};

export default TradingCompetitionPage;
