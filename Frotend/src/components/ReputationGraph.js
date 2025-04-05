import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const ReputationGraph = () => {
  const data = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Reputation Score',
        data: [10, 15, 12, 18],
        backgroundColor: 'rgba(0, 172, 255, 0.2)',
        borderColor: '#00acff',
        tension: 0.4,
        fill: true,
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: 'white',
        }
      }
    },
    scales: {
      x: {
        ticks: { color: 'white' },
        grid: { color: '#333' },
      },
      y: {
        ticks: { color: 'white' },
        grid: { color: '#333' },
      }
    }
  };

  return <Line data={data} options={options} />;
};

export default ReputationGraph;
