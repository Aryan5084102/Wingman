import React from 'react';
import { IoTrendingUpOutline } from "react-icons/io5";
import { IoTrendingDownOutline } from "react-icons/io5";
import { BiSolidMessageRounded } from "react-icons/bi";
import { GiNetworkBars } from "react-icons/gi";
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
        tension: 0.4, 
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
        <div className="p-4 bg-white rounded-lg shadow col-span-1 md:col-span-2 h-80">
          <div className='text-gray-500 text-sm flex items-center space-x-2 mb-4'>
            <BiSolidMessageRounded />
            <h2 className="uppercase font-medium">Consultations</h2>
          </div>
          <Line data={consultationsData} options={options} />
        </div>

        <div className="p-4 bg-white rounded-lg shadow col-span-1 h-80">
          <div className='text-gray-500 text-sm flex items-center space-x-2 mb-4'>
            <GiNetworkBars />
            <h2 className="uppercase font-medium">VS Past Period</h2>
          </div>
          <Bar data={comparisonData} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>

        <div className="p-4 bg-gradient-to-b from-tealLight to-tealDark text-white rounded-2xl shadow-lg h-80 flex flex-col justify-between max-w-xs">
          <div className='text-white text-sm flex items-center space-x-2 mb-4'>
            <BiSolidMessageRounded />
            <h2 className=" uppercase font-medium ">Forecasts</h2>
          </div>

          <div className="flex-1 flex flex-col justify-center">
            <p className="text-4xl font-bold flex items-center gap-1">
              +15%
              <span className="">
                <IoTrendingUpOutline />
              </span>
            </p>
            <p className="text-sm opacity-90 text-justify leading-snug">
              forecasted increase in your sales closed by the end of the current month
            </p>
          </div>

          <div className="flex-1 flex flex-col justify-center">
            <p className="text-4xl font-bold flex items-center gap-1">
              +20%
              <span className="">
                <IoTrendingDownOutline />
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
