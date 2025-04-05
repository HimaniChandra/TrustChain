import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';
import TrustBreakdown from '../components/TrustBreakdown';


import './Dashboard.css';

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function Dashboard() {
  const trustData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Trust Power',
        data: [6.5, 7.1, 7.3, 8.0, 8.2, 8.1, 8.2],
        fill: false,
        borderColor: 'rgba(0, 191, 255, 1)',
        backgroundColor: 'rgba(0, 191, 255, 0.2)',
        tension: 0.3,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: '#fff',
        },
      },
    },
    scales: {
      x: {
        ticks: { color: '#aaa' },
        grid: { color: '#333' },
      },
      y: {
        ticks: { color: '#aaa' },
        grid: { color: '#333' },
      },
    },
  };

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard.</p>

      {/* Stat Cards */}
      <div className="stat-cards">
        <div className="card">💰 Balance: <strong>10,000 sats</strong></div>
        <div className="card">⚡ Trust Power: <strong>8.2</strong></div>
        <div className="card">🗳️ Votes Cast: <strong>17</strong></div>
      </div>

      {/* Chart */}
      <div className="chart-section">
        <h3>Trust Over Time</h3>
        <Line data={trustData} options={chartOptions} />
      </div>

      {/* Recent Activity */}
      <div className="activity-feed">
        <h3>Recent Activity</h3>
        <div className="trust-breakdown">
          <h3>Trust Breakdown</h3>
          <TrustBreakdown />
        </div>

        <ul>
          <li>✅ You trusted <code>0xabc...efg</code> <span className="timestamp">10 mins ago</span></li>
          <li>📥 Staked <strong>500 sats</strong> <span className="timestamp">2 hours ago</span></li>
          <li>❌ You distrusted <code>0x123...456</code> <span className="timestamp">1 day ago</span></li>
        </ul>
      </div>
    </div>
  );
}
