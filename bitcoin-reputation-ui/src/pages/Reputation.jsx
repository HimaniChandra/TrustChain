// src/pages/Reputation.jsx

import React, { useState } from 'react';
import './Reputation.css';

const dummyInteractions = [
  { id: '0xabc123...def', time: '10 mins ago' },
  { id: '0x456def...789', time: '2 hours ago' },
  { id: '0x987zyx...321', time: 'Yesterday' },
];

export default function Reputation() {
  const [submitted, setSubmitted] = useState({});

  const handleVote = (id, type) => {
    setSubmitted((prev) => ({ ...prev, [id]: type }));
    // later: send vote to backend or blockchain
  };

  return (
    <div className="reputation-container">
      <h1>Reputation Actions</h1>
      <p>Review recent transactions and cast your trust decisions.</p>

      <div className="interaction-list">
        {dummyInteractions.map(({ id, time }) => (
          <div key={id} className="interaction-card">
            <div className="interaction-info">
              <span className="user-id">{id}</span>
              <span className="timestamp">{time}</span>
            </div>

            {submitted[id] ? (
              <div className={`vote-status ${submitted[id]}`}>
                You marked this user as <strong>{submitted[id]}</strong>
              </div>
            ) : (
              <div className="vote-buttons">
                <button onClick={() => handleVote(id, 'Trusted')} className="trust-button">Trust</button>
                <button onClick={() => handleVote(id, 'Distrusted')} className="distrust-button">Distrust</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
