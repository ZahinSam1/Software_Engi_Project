import React from "react";
import { Bar } from "react-chartjs-2";

const StatisticsBar = () => {
  // Sample dataset
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        id: 1,
        year: 2016,
        label: "User Gain",
        data: [800, 400, 600, 300, 800, 900],
        backgroundColor: [
          "#131352",
          "#E97156",
          "#0060A1",
          "#008493",
          "#B83B61",
          "#0090BE",
        ],
      },

      // Add more datasets as needed
    ],
  };

  // Chart options
  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="StatisticsBar">
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default StatisticsBar;
