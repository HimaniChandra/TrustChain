import React from 'react';
import './AuditLog.css';

const mockAuditData = [
  {
    id: 1,
    type: 'Trust',
    from: '0xAlice',
    to: '0xBob',
    amount: 250,
    timestamp: '2025-04-03 10:30:00',
  },
  {
    id: 2,
    type: 'Distrust',
    from: '0xCharlie',
    to: '0xEve',
    amount: 100,
    timestamp: '2025-04-03 11:15:00',
  },
  {
    id: 3,
    type: 'Trust',
    from: '0xDavid',
    to: '0xFrank',
    amount: 300,
    timestamp: '2025-04-04 09:00:00',
  },
  {
    id: 4,
    type: 'Trust',
    from: '0xAlice',
    to: '0xGeorge',
    amount: 500,
    timestamp: '2025-04-04 13:45:00',
  },
  {
    id: 5,
    type: 'Distrust',
    from: '0xHank',
    to: '0xIvy',
    amount: 150,
    timestamp: '2025-04-04 15:20:00',
  },
  {
    id: 6,
    type: 'Trust',
    from: '0xJack',
    to: '0xKelly',
    amount: 275,
    timestamp: '2025-04-05 08:10:00',
  },
  {
    id: 7,
    type: 'Trust',
    from: '0xLeo',
    to: '0xMona',
    amount: 220,
    timestamp: '2025-04-05 09:30:00',
  },
  {
    id: 8,
    type: 'Distrust',
    from: '0xNina',
    to: '0xOscar',
    amount: 180,
    timestamp: '2025-04-05 10:50:00',
  },
  {
    id: 9,
    type: 'Trust',
    from: '0xPaul',
    to: '0xQueen',
    amount: 350,
    timestamp: '2025-04-05 12:15:00',
  },
  {
    id: 10,
    type: 'Distrust',
    from: '0xRick',
    to: '0xSara',
    amount: 200,
    timestamp: '2025-04-05 13:05:00',
  },
];

export default function Audit() {
  return (
    <div className="audit-container">
      <h1>Audit Log</h1>
      <p>All transactions are permanently recorded.</p>

      <div className="audit-list">
        {mockAuditData.map((entry) => (
          <div key={entry.id} className={`audit-entry ${entry.type.toLowerCase()}`}>
            <div className="entry-header">
              <strong>{entry.type}</strong> from <code>{entry.from}</code> to <code>{entry.to}</code>
            </div>
            <div className="entry-details">
              <span>Staked: <strong>{entry.amount} sats</strong></span>
              <span className="timestamp">{entry.timestamp}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
