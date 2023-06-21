import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const StatisticsLine = () => {
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        id: 1,
        year: 2016,
        label: "User Gain",
        data: [800, 400, 600, 300, 800, 900], 
        backgroundColor: [
          "#0060A1",
          "#E97156",
          "#131352",
          "#008493",
          "#B83B61",
          "#0090BE",
        ],
      },

      // Add more datasets as needed
    ],
  };
  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  return (
    <div className="StatisticsLine">
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default StatisticsLine;
// line will be daily usage
// which house 12am to 11.59pm how much usage and upload
// or if i want then weekly usage
