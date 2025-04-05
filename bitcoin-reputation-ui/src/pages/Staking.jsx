import React, { useState } from 'react';
import './Staking.css';

export default function Staking() {
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');
  const [lockPeriod, setLockPeriod] = useState('7');

  const handleStake = () => {
    if (!recipient || !amount) {
      alert("Please enter recipient and amount.");
      return;
    }
    // Placeholder for staking logic
    alert(`Staked ${amount} sats to ${recipient} for ${lockPeriod} days`);
    setAmount('');
    setRecipient('');
    setLockPeriod('7');
  };

  return (
    <div className="staking-container">
      <h1>Stake Satoshis</h1>
      <p>Staking to support victims and hold malicious actors accountable</p>

      {/* Stats */}
      <div className="stat-cards">
        <div className="card">💼 Total Staked: <strong>3,200 sats</strong></div>
        <div className="card">🛡️ Compensation Received: <strong>540 sats</strong></div>
        <div className="card">🔒 Default Lock Period: <strong>7 days</strong></div>
      </div>

      {/* Stake Form */}
      <div className="stake-form">
        <input
          type="text"
          placeholder="Recipient's pubkey"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount in sats"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <select
          value={lockPeriod}
          onChange={(e) => setLockPeriod(e.target.value)}
        >
          <option value="7">7 days</option>
          <option value="30">30 days</option>
          <option value="90">90 days</option>
        </select>
        <button onClick={handleStake}>Stake Now</button>
      </div>

      {/* Staking History */}
      <div className="staking-history">
        <h3>Recent Staking Activity</h3>
        <ul>
          <li>📤 Staked <strong>500 sats</strong> to <code>user1</code> on Apr 4</li>
          <li>📤 Staked <strong>1,000 sats</strong> to <code>user2</code> on Apr 2</li>
          <li>🟢 Received <strong>200 sats</strong> in compensation on Mar 30</li>
        </ul>
      </div>
    </div>
  );
}
