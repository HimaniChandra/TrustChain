import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const TrustBreakdown = () => {
  const data = {
    labels: ['Positive', 'Negative'],
    datasets: [
      {
        label: 'Trust Votes',
        data: [30, 10],  // You can update these dynamically later
        backgroundColor: ['#00ffcc', '#ff4d4d'],
        borderColor: ['#00ccaa', '#cc0000'],
        borderWidth: 1,
      }
    ]
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          color: 'white',
        }
      }
    },
    maintainAspectRatio: false,
  };

  return (
    <div style={{ maxWidth: '300px', margin: '0 auto' }}>
      <Pie data={data} options={options} />
    </div>
  );
};

export default TrustBreakdown;
