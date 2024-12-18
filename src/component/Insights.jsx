import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

// Register necessary components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Insights = () => {
  const consultationsData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Incoming',
        data: [30, 35, 40, 50, 45, 42, 48],
        borderColor: '#8B8B8B',
        borderWidth: 2,
        tension: 0.4, // Smooth curve
        fill: false,
      },
      {
        label: 'Answered',
        data: [20, 25, 30, 35, 40, 38, 42],
        borderColor: '#00C6A3',
        backgroundColor: '#00C6A3',
        borderWidth: 2,
        tension: 0.4,
        fill: false,
      },
      {
        label: 'Experts Online',
        type: 'bar',
        data: [10, 12, 15, 20, 15, 10, 12],
        backgroundColor: '#FDE68A',
        yAxisID: 'y-axis-2',
      },
    ],
  };

  const comparisonData = {
    labels: ['This week', 'Last week'],
    datasets: [
      {
        label: 'Consultations',
        data: [25, 20],
        backgroundColor: '#00C6A3',
      },
      {
        label: 'Orders Closed',
        data: [20, 18],
        backgroundColor: '#1E293B',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
      'y-axis-2': {
        position: 'right',
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  return (
    <div className="p-6">
      <h1 className="text-4xl font-medium text-gray-800 mb-6">Insights</h1>
      <div className="flex justify-between  items-center md:grid-cols-3 gap-6 ">
        {/* Consultations Graph */}
        <div className="p-4 bg-white rounded-lg shadow col-span-1 md:col-span-2 h-80">
          <h2 className="text-lg font-semibold mb-4">Consultations</h2>
          <Line data={consultationsData} options={options} />
        </div>

        {/* Comparison Chart */}
        <div className="p-4 bg-white rounded-lg shadow col-span-1 h-80">
          <h2 className="text-lg font-semibold mb-4">VS Past Period</h2>
          <Bar data={comparisonData} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>

        {/* Forecast Card */}
        <div className="p-4 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl shadow-lg h-80 flex flex-col justify-between max-w-xs">
  {/* Heading */}
  <h2 className="text-sm uppercase tracking-widest opacity-80">● Forecasts</h2>
  
  {/* First Forecast Block */}
  <div className="flex-1 flex flex-col justify-center">
    <p className="text-4xl font-bold flex items-center gap-1">
      +15%
      <span className="inline-block transform rotate-45">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12l7-7m0 0l7 7m-7-7v18"></path>
        </svg>
      </span>
    </p>
    <p className="text-sm opacity-90 text-justify leading-snug">
      forecasted increase in your sales closed by the end of the current month
    </p>
  </div>

  {/* Second Forecast Block */}
  <div className="flex-1 flex flex-col justify-center">
    <p className="text-4xl font-bold flex items-center gap-1">
      +20%
      <span className="inline-block transform rotate-45">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12l7-7m0 0l7 7m-7-7v18"></path>
        </svg>
      </span>
    </p>
    <p className="text-sm opacity-90 text-justify leading-snug">
      forecasted increase in consultations by the end of the current month
    </p>
  </div>
</div>

      </div>
    </div>
  );
};

export default Insights;
